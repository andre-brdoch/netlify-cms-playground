<template>
  <ul>
    <li v-for="value in colors" :key="value">
      <ColorBox :value="value" />
    </li>
  </ul>
</template>

<script>
import ColorBox from '@/components/ColorBox';

export default {
  components: { ColorBox },

  props: {
    colors: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
