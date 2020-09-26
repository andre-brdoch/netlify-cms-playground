<template>
  <div class="pt-1/4 relative" :style="`background-color: ${value};`">
    <div
      class="absolute flex h-full inset-0 items-center justify-center w-full">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      validator: val => val.startsWith('#') && val.length <= 6,
    },
  },
};
</script>
