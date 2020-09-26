<template>
  <div>
    <header>
      <div class="container md:px-0 px-5">
        <h1 class="font-bold leading-tight mb-4 md:text-6xl text-4xl">
          Tailwind CSS Test
        </h1>
      </div>
    </header>
    <section class="py-4">
      <div class="container md:px-0 px-5">
        <div class="gap-5 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
          <ArticleCard
            v-for="article in articles"
            :key="article.label"
            v-bind="article" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard';

export default {
  components: { ArticleCard },

  asyncData() {
    return {
      articles: [
        {
          label: 'Test',
          img:
            'https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2020/04/mt-crested-butte-colorado.jpg',
          text: 'This is a text',
          date: 'Jan 13 1995',
          href: '/',
        },
        {
          label: 'Hello World',
          img:
            'https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2020/04/mt-crested-butte-colorado.jpg',
          text: 'This is a text',
          date: 'Jan 13 1995',
          href: '/',
        },
        {
          label: 'This is a the longest text of them all',
          img:
            'https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2020/04/mt-crested-butte-colorado.jpg',
          text: 'This is a text',
          date: 'Jan 13 1995',
          href: '/',
        },
        {
          label: 'This is a longer text',
          img:
            'https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2020/04/mt-crested-butte-colorado.jpg',
          text: 'This is a text',
          date: 'Jan 13 1995',
          href: '/',
        },
      ],
    };
  },
};
</script>
