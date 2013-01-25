/* Baseline Grid 1.0
 * 
 * Copyright 2013 Marcel Neumann
 * http://www.marcelneumann.com
 * 
 * Draws a baseline grid over your page to guide you during layout development
 * 
 * WTFPL license ( http://sam.zoy.org/wtfpl/ )
 */

(function($) {
	
	$.extend({
		baseline: function( options ) {
			
			var settings = $.extend({
				baseline	: 24,
				color		: '#39f',
				opacity		: '0.3',
				lineClass	: 'baseline-line',
				showToggle	: true,
				on			: true,
				offsetTop	: 0
			}, options);
			
			var privateMethods = {
				
				create: function() {
					
					var times = $(document).height() / settings.baseline;
					for (var i = 1; i < times; i++) {
						line.clone().css('top',(i*settings.baseline - 1 + settings.offsetTop) + 'px').appendTo( $('body') );
					}
					
				},
				
				destroy: function() {
					
					$('.' + settings.lineClass).remove();
					
				}
				
			};
			
			var line = $('<div />')
				.addClass(settings.lineClass)
				.css({
					cursor		: 'crosshair',
					height		: '1px',
					width		: '100%',
					background	: settings.color,
					position	: 'absolute',
					left		: 0,
					opacity		: settings.opacity,
					zIndex		: 9998
			});
			
			if (settings.showToggle) {
				var toggle = $('<a href="#" />')
					.css({
						background		: '#888',
						position		: 'fixed',
						bottom			: 0,
						right			: 0,
						color			: '#000',
						padding			: '3px',
						textDecoration	: 'none',
						fontFamily		: 'sans-serif',
						fontSize		: '12px',
						opacity			: '0.5',
						border			: '1px solid #fff',
						outline			: 0,
						zIndex			: 9999
					})
					.text('Baseline (' + settings.baseline + 'px)')
					.click(function(e) {
						e.preventDefault();
						if ( settings.on ) {
							privateMethods.destroy();
							settings.on = false;
						} else {
							privateMethods.create();
							settings.on = true;
						}
					})
					.appendTo( $('body') );
			}
			
			if (settings.on) {
				privateMethods.create();
			}
			
		}
	});
	
})(jQuery);