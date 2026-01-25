const { DateTime } = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const site = {
  name: "Dean Verhey",
  url: "https://verhey.me",
  description: "The personal site of Dean Verhey",
  author: "Dean Verhey",
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("site", site);

  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    // Static Assets:
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

  // Filters let you modify the content https://www.11ty.dev/docs/filters/
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Configure the Eleventy Dev Server (replaces BrowserSync in v3.x)
  eleventyConfig.setServerOptions({
    // Disable live reload mirroring of scrolling, clicks, form inputs
    domDiff: true,
    port: 8080,
  });

  eleventyConfig.addCollection("posts", function (collection) {
    const coll = collection.getFilteredByTag("posts");

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
};
