var filters = {
		brightness: [0, 200, 100],
		contrast: [0, 200, 100],
		grayscale: [0, 100, 0],
		hueRotate: [0, 360, 0],
		invert: [0, 100, 0],
		saturate: [0, 200, 100],
		sepia: [0, 100, 0]
	},
	defaults = {
		brightness: 100,
		contrast: 100,
		grayscale: 0,
		hueRotate: 0,
		invert: 0,
		saturate: 100,
		sepia: 0
	},
	canvas = $('.imgcanv'),
	slider = $('.slider'),
	currentFilter = slider.attr('data-currentfilter');

slider.on('input change', function() {
	var currentFilter = slider.attr('data-currentfilter'),
		val = $(this)[0].value;

	if(typeof currentFilter !== 'undefined' || currentFilter === null) {
		window.filters[currentFilter][2] = val;
		applyFilter();
	} else {
		return false;
	}
});

$('.tool').on('click', function() {
	if($('main').hasClass('hasimg')){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	} else {
		return false;
	}
});

function resetAll() {
	var currentFilter = slider.attr('data-currentfilter');

	if(typeof currentFilter !== 'undefined' || currentFilter === null) {
		window.filters.brightness[2] = window.defaults.brightness;
		window.filters.contrast[2] = window.defaults.contrast;
		window.filters.grayscale[2] = window.defaults.grayscale;
		window.filters.hueRotate[2] = window.defaults.hueRotate;
		window.filters.invert[2] = window.defaults.invert;
		window.filters.saturate[2] = window.defaults.saturate;
		window.filters.sepia[2] = window.defaults.sepia;
		applyFilter();
		setCurrent(currentFilter);
	} else {
		return false;
	}
}

function resetCurrent(current) {
	var currentFilter = slider.attr('data-currentfilter');

	if(typeof currentFilter !== 'undefined' || currentFilter === null) {
		window.filters[current][2] =  window.defaults[current];
		applyFilter();
		setCurrent(currentFilter);
	} else {
		return false;
	}
}

function setCurrent(filter) {
	if($('main').hasClass('hasimg')) {
		if(typeof filter !== 'undefined' || filter === null) {
			slider.attr('data-currentfilter', filter);
			slider[0].min = window.filters[filter][0];
			slider[0].max = window.filters[filter][1];
			slider[0].value = window.filters[filter][2];
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function applyFilter() {
	canvas.css({
		'filter' :
			' brightness(' + window.filters.brightness[2] + '%)' +
			' contrast(' + window.filters.contrast[2] + '%)' +
			' grayscale(' + window.filters.grayscale[2] + '%)' +
			' hue-rotate(' + window.filters.hueRotate[2] + 'deg)' +
			' invert(' + window.filters.invert[2] + '%)' +
			' saturate(' + window.filters.saturate[2] + '%)' +
			' sepia(' + window.filters.sepia[2] + '%)',
		'-webkit-filter' :
			' brightness(' + window.filters.brightness[2] + '%)' +
			' contrast(' + window.filters.contrast[2] + '%)' +
			' grayscale(' + window.filters.grayscale[2] + '%)' +
			' hue-rotate(' + window.filters.hueRotate[2] + 'deg)' +
			' invert(' + window.filters.invert[2] + '%)' +
			' saturate(' + window.filters.saturate[2] + '%)' +
			' sepia(' + window.filters.sepia[2] + '%)'
	});

}
