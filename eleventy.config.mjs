import { DateTime } from "luxon";
import pluginSEO from "eleventy-plugin-seo";
import pluginRss from "@11ty/eleventy-plugin-rss";

const site = {
  name: "Dean Verhey",
  url: "https://verhey.me",
  description: "The personal site of Dean Verhey",
  author: "Dean Verhey",
};

export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("site", site);

  eleventyConfig.setTemplateFormats([
    "html",
    "njk",
    "md",
    "css",
    "jpeg",
    "jpg",
    "png",
    "svg",
    "woff",
    "woff2",
  ]);
  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.addPlugin(pluginSEO, {
    title: site.name,
    description: site.description,
    url: site.url,
    author: site.author,
  });

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("readTime", (content) => {
    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]*>/g, "");
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes === 1 ? "1 min read" : `${minutes} min read`;
  });

  eleventyConfig.setServerOptions({
    domDiff: true,
    port: 8080,
  });

  eleventyConfig.addCollection("posts", function (collection) {
    const coll = [...collection.getFilteredByTag("posts")].sort((a, b) => {
      return b.date - a.date;
    });

    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];

      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }

    return coll;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "build",
    },
  };
}
