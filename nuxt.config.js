export default {
  target: "static",

  head: {
    title: "netlify-cms-playground",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  components: true,

  buildModules: ["@nuxtjs/tailwindcss"]
};
