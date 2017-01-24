# peduarte.github.io/netflix-categories

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
var data = Array.from(document.querySelectorAll('.entry .theiaPostSlider_slides > div > .wpb_row'))
	.splice(1)
	.map(section =>
		Array.from(section.querySelectorAll('p'))
			.map(el => el.innerText)
			.filter(text => text.includes(' = '))
			.map(text => text.split(' = '))
			.map(([id, label]) => ({id, label}))
	)
	.filter(sectionTexts => sectionTexts.length > 0)
	.reduce((acc, curr) => {
		acc[curr[0].label] = curr;
		return acc;
	}, {});
console.log(JSON.stringify(data, null, 2));
```
