const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1852d6192fmsh6f91a94a85e5a25p1e6505jsn772db1590563',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', options)
	.then(response => response.json())
	.then(data => {
        const list = data.d;

        list.map((item) => {
            //console.log(item)
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`;
            document.querySelector('.movies').innerHTML += movie;
        })
    }) 
	.catch(err => console.error(err));