<template>
  <div>
    <header class="py-24">
      <div class="container">
        <div class="w-1/2">
          <h1 class="font-bold leading-tight mb-4 text-6xl">
            Website Theme
          </h1>
          <p class="mb-3">
            This Website was created using
            <a href="https://tailwindcss.com" target="_blank" rel="noopener"><b>Tailwind CSS</b></a>.
          </p>
          <p>
            It was my first time using Tailwind. Here you can find the theme and
            <code>tailwind.config.js</code> I was using.
          </p>
        </div>
      </div>
    </header>
    <section>
      <div class="container">
        <ul class="gap-10 grid" :class="`grid-cols-${colors.length}`">
          <li v-for="color in colors" :key="color.label">
            <h2 class="font-bold mb-4 text-center text-xl">
              {{ color.label }}
            </h2>
            <ColorList :colors="color.values" />
          </li>
        </ul>
      </div>
    </section>
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
