# IntruAd
## A small javascript module to create an intrusive ad

----------------

### Usage
Create an element with a class, let's say `.ad`.
Then create a style for it, you need to add at minimum `display: none; min-width: somepixel, min-height: somepixel`.
Then add `<script src="intruad.js"></script>` prefereably on the bottom of `<body>` tag.
Next add `<script>intruAd.track();</script>` and it will run IntruAd with default settings (`.intrusive-ad` element, 2 seconds interval, 10 seconds adShowAfter)
Done! Don't forget to see example.html. 

### Methods
`interval(d)`
d is miliseconds

`selector(el)`
your ad element selector

`adShowAfter(d)`
d is miliseconds

`track()`
run intruAd

### Restriction
Normally, intruAd won't show ad if your cursor hovering above an element with `data-type="no-ad"`, `button` element, `a` element, and `input` element.