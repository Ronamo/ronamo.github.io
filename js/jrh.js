// Do the following when the document is ready.
$(document).ready( function(){ 

	// Adds click() handlers to all of the navbar links which have an anchor target
	$('nav li a').each( function (){
		// Is this a link to a section, or an off page link?
		if (this.id !== ''){
			// If it's to a section, create a click function to handle the animation
			$(this).click(function (){
				$('section').fadeOut(200).delay(200);
				// this.href is in the form of http://www/#anchor .
				// So, find the hashtag, and  get that substr.
				// It's equal to a section id.
				$(this.href.substr(this.href.indexOf('#'))).fadeToggle(200);
				$('li.active').removeClass('active');
				$(this).parent().addClass('active');
			})
		}
	});

	// Apply the masonry after all of the images are loaded.
	var $container = $('#folio');

	$container.imagesLoaded( function() { 
		// Set proper height and width for each image.

		$('#folio img').each( function (){
			var $this = $(this);

			function checkHeight (src) {
				var img = new Image();
				img.src = src;
				return img.height;
			}

			$this.css('width','148px');
			height = checkHeight($this.attr('src'));
			$this.css('height', height);
		});
		$container.masonry({
	    	// options
	    	itemSelector : '.portfolioItem',
	    	columnWidth: 160,
		});	
	});





	// Activate the Lightbox.
	$('a.lightbox').lightBox();

	// Which section should we show first?
	$('section').toggle();
	$('#aboutMe').toggle();
	$('#navabout').parent().addClass('active');

});