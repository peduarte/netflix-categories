/*
    Copy the below snippet into console on this page: http://whatsonnetflix.com/netflix-hacks/the-netflix-id-bible-every-category-on-netflix/
*/

const elements = Array.prototype.filter.call(
	document.querySelectorAll('.post-inner p'),
	elem => RegExp(' = ').test(elem.textContent)
);

const data = elements.map(elem => {
	const category = elem.textContent.split(' = ');
	return {
		id: category[0],
		label: category[1]
    };
});

console.log(JSON.stringify(data));