<template>
  <nav class="bg-primary-500 border-b-8 border-primary-700 py-3">
    <div class="container flex items-center justify-between">
      <nuxt-link to="/" class="bg-primary-300 block h-12 w-16" />
      <ul class="hidden items-center sm:flex">
        <li v-for="item in linkItems" :key="item.label" class="pl-5">
          <nuxt-link
            class="font-bold text-2xl text-primary-800"
            :to="item.href">
            {{ item.label }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    linkItems: {
      type: Array,
      default: () => [],
      validator: arr => arr.every(item => [ 'href', 'label' ].every(key => key in item)),
    },
  },
};
</script>
