import { getHotLists } from "@/api";

const HOT_LIST_CACHE_TTL = 1000 * 60 * 5; // 5分钟缓存
const STORAGE_PREFIX = "dailyhot-hotlist-";
const cacheMap = new Map();

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const retryRequest = async (request, retry = 2, delay = 600) => {
  let lastError = null;
  for (let attempt = 0; attempt <= retry; attempt++) {
    try {
      return await request();
    } catch (error) {
      lastError = error;
      if (attempt < retry) {
        await sleep(delay * (attempt + 1));
      }
    }
  }
  throw lastError;
};

const getCacheKey = (name, params = {}) =>
  `${name}-${JSON.stringify(params ?? {})}`;

const readFromStorage = (key) => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_PREFIX + key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.timestamp > HOT_LIST_CACHE_TTL) {
      window.localStorage.removeItem(STORAGE_PREFIX + key);
      return null;
    }
    return parsed;
  } catch (error) {
    return null;
  }
};

const writeToStorage = (key, value) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
  } catch (error) {
    // 存储空间不足时直接忽略
  }
};

const removeFromStorage = (key) => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_PREFIX + key);
};

export const fetchHotList = async ({
  name,
  params,
  isNew = false,
  forceRefresh = false,
} = {}) => {
  if (!name) throw new Error("热榜名称缺失");
  const cacheKey = getCacheKey(name, params);

  if (!forceRefresh && !isNew) {
    const memoryCache = cacheMap.get(cacheKey);
    if (memoryCache && Date.now() - memoryCache.timestamp < HOT_LIST_CACHE_TTL) {
      return memoryCache.data;
    }

    const storageCache = readFromStorage(cacheKey);
    if (storageCache) {
      cacheMap.set(cacheKey, storageCache);
      return storageCache.data;
    }
  }

  const result = await retryRequest(() => getHotLists(name, isNew, params));
  if (result?.code === 200 && !isNew) {
    const payload = {
      timestamp: Date.now(),
      data: result,
    };
    cacheMap.set(cacheKey, payload);
    writeToStorage(cacheKey, payload);
  }

  if (forceRefresh && result?.code === 200) {
    const payload = {
      timestamp: Date.now(),
      data: result,
    };
    cacheMap.set(cacheKey, payload);
    writeToStorage(cacheKey, payload);
  }

  return result;
};

export const warmupHotList = async ({ name, params }) => {
  try {
    await fetchHotList({ name, params });
  } catch (error) {
    // 预热失败可以忽略
  }
};

export const invalidateHotList = (name, params) => {
  const cacheKey = getCacheKey(name, params);
  cacheMap.delete(cacheKey);
  removeFromStorage(cacheKey);
};

export const clearExpiredHotListCache = () => {
  if (typeof window === "undefined") return;
  try {
    Object.keys(window.localStorage)
      .filter((key) => key.startsWith(STORAGE_PREFIX))
      .forEach((key) => {
        const raw = window.localStorage.getItem(key);
        if (!raw) return;
        try {
          const parsed = JSON.parse(raw);
          if (Date.now() - parsed.timestamp > HOT_LIST_CACHE_TTL) {
            window.localStorage.removeItem(key);
          }
        } catch (error) {
          window.localStorage.removeItem(key);
        }
      });
  } catch (error) {
    // 某些浏览器隐私模式会抛出异常，这里直接忽略
  }
};

clearExpiredHotListCache();
