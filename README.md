# fathomlondon.github.io

## Requirements

- [Ruby](https://www.ruby-lang.org/en/downloads/) (including development headers, v2 or above)
- [jekyll](https://jekyllrb.com/)

## Development

```bash
jekyll serve
```

### Script for scraping categories

Copy the below snippet into console on this page: http://whatsonnetflix.com/netflix-hacks/the-netflix-id-bible-every-category-on-netflix/

```
var sections = Array.prototype.filter.call(
	document.querySelectorAll('.entry .theiaPostSlider_slides > div > .wpb_row'),
	elem => {
		var paras = Array.from(elem.querySelectorAll('p'));
		return paras.some(para => RegExp(' = ').test(para.textContent));
	}
);

var data = {};

sections.forEach(section => {
	var firstParagraph = Array.from(section.querySelectorAll('p'))
			.filter(el => RegExp(' = ').test(el.textContent))[0];

	var sectionName = firstParagraph.textContent.split(' = ')[1];

	data[sectionName] = Array.from(section.querySelectorAll('p')).filter(el => RegExp(' = ').test(el.textContent)).map(elem => {
        var category = elem.textContent.split(' = ');
        return {
            id: category[0],
            label: category[1]
        };
    });
});
console.log(JSON.stringify(data));
```
