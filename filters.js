var filters = {
		blur: [0, 50, 0],
		brightness: [0, 200, 100],
		contrast: [0, 200, 100],
		grayscale: [0, 100, 0],
		hueRotate: [0, 360, 0],
		invert: [0, 100, 0],
		opacity: [0, 100, 100],
		saturate: [0, 200, 100],
		sepia: [0, 100, 0]
	},
	canvas = $('.imgcanv'),
	slider = $('.slider');

function applyFilter() {
	canvas.css({
		'filter' :
			' blur(' + window.filters.blur[2] + 'px)' +
			' brightness(' + window.filters.brightness[2] + '%)' +
			' contrast(' + window.filters.contrast[2] + '%)' +
			' grayscale(' + window.filters.grayscale[2] + '%)' +
			' hue-rotate(' + window.filters.hueRotate[2] + 'deg)' +
			' invert(' + window.filters.invert[2] + '%)' +
			' opacity(' + window.filters.opacity[2] + '%)' +
			' saturate(' + window.filters.saturate[2] + '%)' +
			' sepia(' + window.filters.sepia[2] + '%)',
		'-webkit-filter' :
			' blur(' + window.filters.blur[2] + 'px)' +
			' brightness(' + window.filters.brightness[2] + '%)' +
			' contrast(' + window.filters.contrast[2] + '%)' +
			' grayscale(' + window.filters.grayscale[2] + '%)' +
			' hue-rotate(' + window.filters.hueRotate[2] + 'deg)' +
			' invert(' + window.filters.invert[2] + '%)' +
			' opacity(' + window.filters.opacity[2] + '%)' +
			' saturate(' + window.filters.saturate[2] + '%)' +
			' sepia(' + window.filters.sepia[2] + '%)'
	});
}
