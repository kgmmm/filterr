$(function() {
	var resizeEvt;

	$('.svgload').load('svg/svgdefs.html');

	$(window).on("resize", function() {
		clearTimeout(resizeEvt);
		resizeEvt = setTimeout(function() {
			if($('main').hasClass('hasimg')) {
				saveFilters();
				$('.imgcanv')[0].width = window.innerWidth;
				$('.imgcanv')[0].height = window.innerHeight - 150;

				loadImg();
				loadSaved();
			} else {
				$('.imgcanv')[0].width = window.innerWidth;
				$('.imgcanv')[0].height = window.innerHeight - 150;
			}
		}, 250);
	});

	$('.imgcanv')[0].width = window.innerWidth;
	$('.imgcanv')[0].height = window.innerHeight - 150;

	$('.loadimg').on('change', loadImg);
});

function loadImg() {
	var input = $('.loadimg')[0],
		file,
		fr,
		img;


	$('.loader').toggleClass('hide');

	if(typeof window.FileReader !== 'function') {
		alert('FILTERR is not supported by your browser!');
		return false;
	}

	if(!input) {
		alert('No file!');
		$('.loader').toggleClass('hide');
	} else if(!input.files) {
		alert('Browser does not support "files" property of file inputs.');
		$('.loader').toggleClass('hide');
	} else if(!input.files[0]) {
		alert('Please select a file first!');
		$('.loader').toggleClass('hide');
	} else {
		resetAll();
		file = input.files[0];
		fr = new FileReader();
		fr.onload = createImg;
		fr.readAsDataURL(file);
	}

	function createImg() {
		img = new Image();
		img.onload = imgLoaded;
		img.src = fr.result;
	}

	function imgLoaded() {
		var canvas = $('.imgcanv')[0],
			context = canvas.getContext('2d'),
			imgWidth = img.naturalWidth,
			imgHeight = img.naturalHeight,
			canvWidth = canvas.width,
			canvHeight = canvas.height;

		if(imgWidth > imgHeight) {
			var newHeight = imgWidth / canvWidth * 100;

			if(newHeight <= 100) {
				$('main').addClass('hasimg');
				context.clearRect(0, 0, canvWidth, canvHeight);
				context.drawImage(img,
					canvWidth / 2 - (imgWidth - 40) / 2,
					canvHeight / 2 - (imgHeight - 40) / 2,
					imgWidth - 40, imgHeight - 40);
				$('.loader').toggleClass('hide');
			} else {
				var factor = newHeight / 100,
					drawHeight = imgHeight / factor;

				$('main').addClass('hasimg');
				context.clearRect(0, 0, canvWidth, canvHeight);
				context.drawImage(img,
					canvWidth / 2 - (canvWidth - 40) / 2,
					canvHeight / 2 - (drawHeight - 40) / 2,
					canvWidth - 40, drawHeight - 40);
				$('.loader').toggleClass('hide');
			}
		} else if(imgHeight >= imgWidth) {
			var newWidth = imgHeight / canvHeight * 100;

			if(newWidth <= 100) {
				$('main').addClass('hasimg');
				context.clearRect(0, 0, canvWidth, canvHeight);
				context.drawImage(img,
					canvWidth / 2 - (imgWidth - 40) / 2,
					canvHeight / 2 - (imgHeight - 40) / 2,
					imgWidth - 40, imgHeight - 40);
				$('.loader').toggleClass('hide');
			} else {
				var factor = newWidth / 100,
					drawWidth = imgWidth / factor;

				$('main').addClass('hasimg');
				context.clearRect(0, 0, canvWidth, canvHeight);
				context.drawImage(img,
					canvWidth / 2 - (drawWidth - 40) / 2,
					canvHeight / 2 - (canvHeight - 40) / 2,
					drawWidth - 40, canvHeight - 40);
				$('.loader').toggleClass('hide');
			}
		}
	}
}


// @prepros-append filters.js
