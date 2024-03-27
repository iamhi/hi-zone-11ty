module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/assets/**');
	eleventyConfig.addPassthroughCopy('src/css/**');
	eleventyConfig.addPassthroughCopy('src/js/**');

	eleventyConfig.addWatchTarget('src/css/**');
	eleventyConfig.addWatchTarget('src/js/**');
	eleventyConfig.addWatchTarget('src/assets/**');

//	eleventyConfig.addShortcode('Card', Card);

	eleventyConfig.addCollection('navpages', function(collectionApi) {
		return collectionApi.getFilteredByTag('mainpage')
			.sort((page1, page2) => page1.data.mainpagepriority - page2.data.mainpagepriority);
	});

	return {
		dir: {
			input: 'src',
			includes: '_includes',
			output: '_site',
		},
		templateFormats: ['md', 'njk', 'html'],
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
	};
}
