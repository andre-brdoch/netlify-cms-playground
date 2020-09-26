<template>
  <div>
    <TheNav :link-items="linkItems" />
    <Nuxt />
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
        { label: 'Link 3', href: '/' },
      ],
    };
  },
};
</script>
