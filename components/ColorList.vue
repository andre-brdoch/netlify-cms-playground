<template>
  <ul>
    <li v-for="color in colors" :key="color.value" class="block">
      <ColorBox :value="color.value" :complementary="color.complementary" />
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
