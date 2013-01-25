Baseline.js
===========

jQuery plugin that draws a baseline grid over your page to guide you during layout development.

How to use
------

Include jQuery and jquery.baseline.js on your page and start it on document load:

```html
<script src="jquery.baseline.js"></script>
<script>
	$(function() {
		$.baseline();
	})
</script>
```

This will give you a blue colored baseline of 24 pixels (150% of 16px text).

Customization
------

Baseline.js can be customized to adapt it to your needs. Allowed options are:
* `baseline` - Height between the lines in pixels. Default: 24
* `color` - Color of the lines. Default: "#3399ff"
* `opacity` - Line opacity, value between 0 and 1. Default: 0.3,
* `showToggle` - Shows a little toggle on the bottom right of the window to show/hide the lines. Default: true
* `on` - If set to true, it will show the lines automatically on page load. If false, you have to manually show the lines with the toggle above. Default: true
* `offsetTop` - Move all lines up or down an amount of pixels, to make them sit right on your text. Default: 0
* `lineClass` - Used internally. Change if it's causing you trouble with your css. Default: "baseline-line"

Example:

```javascript
$.baseline({
	baseline: 20,
	color: 'red',
	opacity: 1
});
```