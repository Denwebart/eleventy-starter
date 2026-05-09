import prettier from 'prettier';

export default function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    host: '0.0.0.0',
    port: 8080,
  });

  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/js');

  eleventyConfig.addFilter('rootPath', function (page) {
    const depth = (page.url.match(/\//g) || []).length - 1;
    return depth > 0 ? '../'.repeat(depth) : '';
  });

  eleventyConfig.addTransform('prettier', async (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      return await prettier.format(content, { parser: 'html' });
    }
    return content;
  });

  return {
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_includes/layouts',
    },
  };
}
