<template>
  <nav class="bg-primary-500 border-b-8 border-primary-700 py-3">
    <div class="container flex items-center justify-between">
      <div class="bg-primary-300 h-12 w-16" />
      <ul class="flex items-center">
        <li v-for="item in linkItems" :key="item.label" class="pl-5">
          <a class="font-bold text-2xl text-primary-800" :href="item.href">{{
            item.label
          }}</a>
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
