/*
**  Copyright 2012, Andreas Johansson
**  Licensed under a MIT license, http://ibuypink.com/mit-license/
**
*/
(function($){ 
	$.fn.readingPace = function(options) {
		var defaults = {  
		    pace: 275,
		    singular: 'minute',
		    plural: 'minutes',
		    before: 'It takes about',
		    after: 'to read.',
		    wrap: '<div class="pace" />'
		};  
		var options = $.extend(defaults, options); 
		return this.each(function() { 
			var o = $(this);
			var txt = o.text();
			var arr = txt.split(/[\s,]+/);
			var mins = Math.ceil(arr.length/options.pace);
			var output = options.before  + unit(mins) + options.after;
			o
				.before($('<span />')) 
				.prev().text(output)
				.wrap(options.wrap);
		});
		function unit(v) {
			switch (v) {
				case 1:
					return ' ' + v + ' ' + options.singular + ' ';
					break;
				default:	
					return ' ' + v + ' ' + options.plural + ' ';
					break;
			}

		}
	}
})(jQuery);