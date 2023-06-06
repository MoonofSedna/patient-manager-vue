<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = defineProps({
  alert: {
    type: Object,
    required: true,
  },
});

const alertType = computed(() => {
  return props.alert.type === "error"
    ? "bg-red-400"
    : "bg-green-400";
});
</script>

<template>
  <span
    class="text-center block p-2 text-white mb-2 text-lg rounded-lg"
    :class="alertType"
  >
    {{ alert.message }}
  </span>
</template>
