# filterr
Image filtering with CSS filter property. Simple CSS experiment not built for production use. More of a portfolio project/case study.

List of CSS3 filters:

	filter: brightness(100%); 0min 200max

	filter: contrast(100%); 0min 200max

	filter: grayscale(0%); 0min 100max

	filter: hue-rotate(0deg); 0min 360max

	filter: invert(0%); 0min 100max

	filter: saturate(100%); 0min 200max
	
	filter: sepia(0%); 0min 100max
	
Blur, opacity and drop shadow filters were omitted. Blur can get choppy, opacity and drop shadow didn't really seem that useful in this context.

Right now the image cannot be saved after you filter it. The image is rendered in a 'canvas' element, and the CSS filters are being applied to this canvas element. "CanvasRenderingContext2D.filter" could be used to allow for saving of the image but this has zero Safari support and zero iOS support. More info on that here: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
