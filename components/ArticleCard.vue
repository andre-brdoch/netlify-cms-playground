<template>
  <article>
    <nuxt-link
      :to="href"
      class="bg-white block flex flex-col h-full overflow-hidden rounded-md shadow-lg">
      <div
        class="bg-center bg-cover bg-no-repeat"
        :style="`background-image: url('${img}');`">
        <div class="pt-2/3" />
      </div>
      <div class="flex flex-col flex-grow justify-between p-3">
        <div>
          <h3 class="font-bold text-lg text-neutral-800">
            {{ label }}
          </h3>
          <p class="mt-2 text-neutral-800 text-sm tracking-tight">
            {{ text }}
          </p>
        </div>
        <p class="mt-4 text-neutral-800 text-right text-sm tracking-tight">
          {{ date }}
        </p>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    href: { type: String, required: true },
    img: { type: String, required: true },
    label: { type: String, required: true },
    text: { type: String },
    date: { type: String },
  },
};
</script>
