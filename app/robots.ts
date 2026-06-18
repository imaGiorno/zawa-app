export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://zawa-app.vercel.app/sitemap.xml",
  };
}