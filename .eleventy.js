module.exports = function (eleventyConfig) {

	// Copy `img/` to `_site/img`
	eleventyConfig.addPassthroughCopy("favicon");
	eleventyConfig.addPassthroughCopy("fonts");
	eleventyConfig.addPassthroughCopy("img");

	// Copy the stylesheet specifically
	eleventyConfig.addPassthroughCopy("./src/style.css");
	eleventyConfig.addPassthroughCopy("./src/uikit.min.css");
	eleventyConfig.addPassthroughCopy("./src/uikit.min.js");
	return {
		dir: {
			input: "src",
			output: "public",
		},
	};

	// Copy any .jpg file to `_site`, via Glob pattern
	// Keeps the same directory structure.
	eleventyConfig.addPassthroughCopy("**/*.jpg");
	eleventyConfig.addPassthroughCopy("**/*.svg");
	eleventyConfig.addPassthroughCopy("**/*.mp4");
};