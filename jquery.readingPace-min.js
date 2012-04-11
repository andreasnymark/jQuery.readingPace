/*
**  Copyright 2012, Andreas Johansson
**  Licensed under a MIT license, http://ibuypink.com/mit-license/
**
*/(function(a){a.fn.readingPace=function(b){function d(a){switch(a){case 1:return" "+a+" "+b.singular+" ";default:return" "+a+" "+b.plural+" "}}var c={pace:275,singular:"minute",plural:"minutes",before:"It takes about",after:"to read.",wrap:'<div id="pace" />'},b=a.extend(c,b);return this.each(function(){var c=a(this),e=c.text(),f=e.split(/[\s,]+/),g=Math.ceil(f.length/b.pace),h=b.before+d(g)+b.after;c.after(a("<span />")).next().text(h).wrap(b.wrap)})}})(jQuery);