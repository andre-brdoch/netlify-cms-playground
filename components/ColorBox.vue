<template>
  <div
    class="pt-1/4 relative"
    :style="`background-color: ${value}; color: ${complementary};`">
    <div
      ref="text"
      class="absolute cursor-pointer flex font-bold h-full inset-0 items-center justify-center w-full"
      @click="copy">
      {{ !copyInfoActive ? value : 'copied ✓' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    complementary: {
      type: String,
      required: true,
    },
  },

  data() {
    return { copyInfoActive: false };
  },

  methods: {
    copy() {
      navigator.clipboard.writeText(this.value).then(this.showCopiedInfo);
    },
    showCopiedInfo() {
      this.copyInfoActive = true;
      setTimeout(() => (this.copyInfoActive = false), 700);
    },
  },
};
</script>
