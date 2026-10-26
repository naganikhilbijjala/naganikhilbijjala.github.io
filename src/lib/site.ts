// Production URL, used for canonical links, sitemap, RSS and share images.
// Override with NEXT_PUBLIC_SITE_URL in Vercel if you add a custom domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://naganikhilbijjala.vercel.app");

export const site = {
  name: "Naga Nikhil Bijjala",
  url: siteUrl.replace(/\/$/, ""),
  title: "Naga Nikhil Bijjala — Full-Stack Software Engineer",
  description:
    "Full-stack software engineer building data-heavy web platforms, processing pipelines and APIs with React, Next.js, TypeScript, Node.js and Python. Portfolio and blog of Naga Nikhil Bijjala.",
  jobTitle: "Full-Stack Software Engineer",
  email: "naganikhil.bijjala@gmail.com",
  github: "https://github.com/naganikhilbijjala",
  linkedin: "https://www.linkedin.com/in/naganikhilbijjala/"
} as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
