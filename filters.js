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
	saved = {
		brightness: [0, 200, 100],
		contrast: [0, 200, 100],
		grayscale: [0, 100, 0],
		hueRotate: [0, 360, 0],
		invert: [0, 100, 0],
		saturate: [0, 200, 100],
		sepia: [0, 100, 0]
	},
	canvas = $('.imgcanv'),
	slider = $('.slider'),
	currentFilter = slider.attr('data-currentfilter');

slider.on('input change', function() {
	var currentFilter = slider.attr('data-currentfilter'),
		val = $(this)[0].value;

	if(typeof currentFilter !== 'undefined' || currentFilter === null) {
		filters[currentFilter][2] = val;
		applyFilter();
	} else {
		return false;
	}
});

$('.tool').on('click', function() {
	if($('main').hasClass('hasimg')){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		setCurrent($(this).attr('data-tool'));
	} else {
		return false;
	}
});

$('.resetall').on('click', resetAll);

function resetAll() {
	var currentFilter = slider.attr('data-currentfilter');

	if(typeof currentFilter !== 'undefined' || currentFilter === null) {
		filters.brightness[2] = defaults.brightness;
		filters.contrast[2] = defaults.contrast;
		filters.grayscale[2] = defaults.grayscale;
		filters.hueRotate[2] = defaults.hueRotate;
		filters.invert[2] = defaults.invert;
		filters.saturate[2] = defaults.saturate;
		filters.sepia[2] = defaults.sepia;
		applyFilter();
		setCurrent(currentFilter);
	} else {
		return false;
	}
}

$('.resetcurrent').on('click', resetCurrent);

function resetCurrent() {
	var currentFilter = slider.attr('data-currentfilter');

	if(typeof currentFilter !== 'undefined' || currentFilter === null) {
		filters[currentFilter][2] = defaults[currentFilter];
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
			slider[0].min = filters[filter][0];
			slider[0].max = filters[filter][1];
			slider[0].value = filters[filter][2];
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
			' brightness(' + filters.brightness[2] + '%)' +
			' contrast(' + filters.contrast[2] + '%)' +
			' grayscale(' + filters.grayscale[2] + '%)' +
			' hue-rotate(' + filters.hueRotate[2] + 'deg)' +
			' invert(' + filters.invert[2] + '%)' +
			' saturate(' + filters.saturate[2] + '%)' +
			' sepia(' + filters.sepia[2] + '%)',
		'-webkit-filter' :
			' brightness(' + filters.brightness[2] + '%)' +
			' contrast(' + filters.contrast[2] + '%)' +
			' grayscale(' + filters.grayscale[2] + '%)' +
			' hue-rotate(' + filters.hueRotate[2] + 'deg)' +
			' invert(' + filters.invert[2] + '%)' +
			' saturate(' + filters.saturate[2] + '%)' +
			' sepia(' + filters.sepia[2] + '%)'
	});

}

function saveFilters() {
	saved.brightness[2] = filters.brightness[2];
	saved.contrast[2] = filters.contrast[2];
	saved.grayscale[2] = filters.grayscale[2];
	saved.hueRotate[2] = filters.hueRotate[2];
	saved.invert[2] = filters.invert[2];
	saved.saturate[2] = filters.saturate[2];
	saved.sepia[2] = filters.sepia[2];
}

function loadSaved() {
	var currentFilter = slider.attr('data-currentfilter');

	if(typeof currentFilter !== 'undefined' || currentFilter === null) {
		filters.brightness[2] = saved.brightness[2];
		filters.contrast[2] = saved.contrast[2];
		filters.grayscale[2] = saved.grayscale[2];
		filters.hueRotate[2] = saved.hueRotate[2];
		filters.invert[2] = saved.invert[2];
		filters.saturate[2] = saved.saturate[2];
		filters.sepia[2] = saved.sepia[2];
		applyFilter();
		setCurrent(currentFilter);
	} else {
		return false;
	}
}
