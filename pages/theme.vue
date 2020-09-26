<template>
  <div class="container">
    <h1>Theme</h1>
    <div class="gap-4 grid" :class="`grid-cols-${colors.length}`">
      <div v-for="color in colors" :key="color.label">
        <h2>
          {{ color.label }}
        </h2>
        <ul>
          <li v-for="value in color.values" :key="value">
            <ColorBox :value="value" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ColorBox } from '@/components/ColorBox';
import tailwindConfig from '@/tailwind.config.js';

export default {
  components: { ColorBox },

  asyncData() {
    const { colors: colorsObj } = tailwindConfig.theme.extend;
    // transform to array
    const colors = Object.keys(colorsObj).map(key => {
      const color = {
        label: key.charAt(0).toUpperCase() + key.slice(1),
        values: Object.keys(colorsObj[key])
          .filter(colorKey => !colorKey.startsWith('transparent'))
          .map(colorKey => colorsObj[key][colorKey]),
      };
      return color;
    });
    return { colors };
  },
};
</script>
