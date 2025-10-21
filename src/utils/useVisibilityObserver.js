// 统一的可见性监听器，避免每个组件重复创建 IntersectionObserver
import { onBeforeUnmount, onMounted, ref } from "vue";

const callbackMap = new Map();
let observer = null;

const createObserver = () => {
  if (observer || typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return observer;
  }
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const handler = callbackMap.get(entry.target);
      if (handler) {
        handler();
        observer.unobserve(entry.target);
        callbackMap.delete(entry.target);
      }
    });
  }, {
    rootMargin: "120px 0px",
  });
  return observer;
};

export const useVisibilityObserver = (onVisible) => {
  const targetRef = ref(null);

  onMounted(() => {
    const io = createObserver();
    const target =
      targetRef.value && targetRef.value.$el
        ? targetRef.value.$el
        : targetRef.value;
    if (io && target instanceof Element) {
      callbackMap.set(target, onVisible);
      io.observe(target);
    } else if (!io) {
      // 降级处理：如果浏览器不支持 IntersectionObserver，则直接触发
      onVisible();
    }
  });

  onBeforeUnmount(() => {
    const target =
      targetRef.value && targetRef.value.$el
        ? targetRef.value.$el
        : targetRef.value;
    if (observer && target instanceof Element) {
      observer.unobserve(target);
    }
    const mapKey =
      targetRef.value && targetRef.value.$el
        ? targetRef.value.$el
        : targetRef.value;
    callbackMap.delete(mapKey);
  });

  return targetRef;
};
