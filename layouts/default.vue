<template>
  <div>
    <TheNav :link-items="linkItems" />
    <Nuxt />
  </div>
</template>

<script>
import TheNav from '@/components/TheNav';

export default {
  components: { TheNav },

  data() {
    return {
      linkItems: [
        { label: 'Link 1', href: '/' },
        { label: 'Link 2', href: '/' },
        { label: 'Link 3', href: '/' },
      ],
    };
  },
};
</script>
