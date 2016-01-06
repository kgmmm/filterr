# filterr
Image filtering with pure CSS. Simple CSS experiment built to give me, a lazy designer/dev, the initiative to learn Git and Github. Also this was fun to make, and we like fun.

List of CSS3 filters:

	filter: brightness(100%); 0min 200max

	filter: contrast(100%); 0min 200max

	filter: grayscale(0%); 0min 100max

	filter: hue-rotate(0deg); 0min 360max

	filter: invert(0%); 0min 100max

	filter: saturate(100%); 0min 200max
	
	filter: sepia(0%); 0min 100max
	
Blur and opacity filters omitted. Blur can get choppy, and opacity didn't really seem that useful so both filters were omitted.

Right now the image cannot be saved after you filter it, as the CSS filters are not actually filtering the image as the image is drawn into a canvas.

There is currently a proposed 'filter' property for canvas. This means that the same filters I am using in CSS could be applied to the canvas objects directly. This would allow for saving the image, post filter, as the image within the canvas is actually be altered by the filters and not just made to look as if it has been altered. More info here: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
