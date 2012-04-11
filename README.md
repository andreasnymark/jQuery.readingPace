# jQuery.readingPace.js

## What does it do

Gives an avarage appreciation how long the article will take to read.

## How to use

Simply add the plugin and then:

`$('article').readingPace();`

### Options

These are the options

	`$('article').readingPace({
		pace:310, // --> words per minute
		singular: 'minut', // --> your unit of choice; if 1
		plural: 'minuter', // --> "; if 0 or >1
		before: 'Det tar cirka', // --> text before
		after: 'att l&auml;sa.', // --> text after
		wrap: '<div id="lorem" />' // --> wrapper around text
	});`




