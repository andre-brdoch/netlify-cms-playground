<template>
  <div class="container">
    <h1>Theme</h1>
    <div class="gap-10 grid" :class="`grid-cols-${colors.length}`">
      <div v-for="color in colors" :key="color.label">
        <h2>
          {{ color.label }}
        </h2>
        <ColorList :colors="color.values" />
      </div>
    </div>
  </div>
</template>

<script>
import ColorList from '@/components/ColorList';
import tailwindConfig from '@/tailwind.config.js';

const getDarkestShadeValue = color => Object.keys(color)
  .sort((a, b) => b - a)
  .slice(0, 1)
  .map(key => color[key])[0];

export default {
  components: { ColorList },

  asyncData() {
    const { colors: colorsObj } = tailwindConfig.theme.extend;
    // transform to array
    const colors = Object.keys(colorsObj).map(key => {
      const darkestShade = getDarkestShadeValue(colorsObj[key]);
      const color = {
        label: key.charAt(0).toUpperCase() + key.slice(1),
        values: Object.keys(colorsObj[key])
          .filter(colorKey => !colorKey.startsWith('transparent'))
          .map(colorKey => ({
            value: colorsObj[key][colorKey],
            complementary:
              // use dark color for all values of 500 or less
              parseInt(colorKey, 10) > 500 ? 'white' : darkestShade,
          })),
      };
      return color;
    });
    return { colors };
  },
};
</script>
