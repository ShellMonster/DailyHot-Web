<template>
  <div class="avatar-placeholder" :style="placeholderStyle">
    {{ initials }}
  </div>
</template>

<script setup>
import { computed } from "vue";
import { getAvatarGradient, getAvatarInitials } from "@/utils/avatarPlaceholder";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
});

const initials = computed(() => getAvatarInitials(props.label, props.name));
const gradient = computed(() => getAvatarGradient(props.name));

const placeholderStyle = computed(() => {
  const [start, end] = gradient.value;
  return {
    background: `linear-gradient(135deg, ${start}, ${end})`,
  };
});
</script>

<style scoped>
.avatar-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  border-radius: 50%;
  letter-spacing: 0.5px;
}
</style>
