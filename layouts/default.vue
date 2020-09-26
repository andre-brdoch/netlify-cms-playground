<template>
  <div class="flex flex-col min-h-screen">
    <TheNav :link-items="linkItems" />
    <div class="flex-grow">
      <Nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter';
import TheNav from '@/components/TheNav';

export default {
  components: { TheFooter, TheNav },

  data() {
    return {
      linkItems: [
        { label: 'Link 1', href: '/' },
        { label: 'Link 2', href: '/' },
        { label: 'Theme', href: '/theme' },
      ],
    };
  },
};
</script>
