export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.caferabbit.com/sitemap.xml",
    host: "https://www.caferabbit.com",
  };
}
