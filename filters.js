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
	defaults = {
		blur: 0,
		brightness: 100,
		contrast: 100,
		grayscale: 0,
		hueRotate: 0,
		invert: 0,
		opacity: 100,
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
		window.filters.blur[2] = 0;
		window.filters.brightness[2] = 100;
		window.filters.contrast[2] = 100;
		window.filters.grayscale[2] = 0;
		window.filters.hueRotate[2] = 0;
		window.filters.invert[2] = 0;
		window.filters.opacity[2] = 100;
		window.filters.saturate[2] = 100;
		window.filters.sepia[2] = 0;
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
