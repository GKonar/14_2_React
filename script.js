var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: 'http://1.fwcdn.pl/po/68/78/6878/6927221.6.jpg'
	},														//Tablica z obiekatmi
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film opowidający historię króla sawanny',
		img: ""
	},
	{
		id: 3,
		title: "Pan życia i śmierci",
		desc: "Film o handlarzu bronią",
		img: ""
	},
	{
		id: 4,
		title: "Lot skazańców",
		desc: "Film o locie skazańców :)",
		img: ""
	},
	{
		id: 5,
		title: "Bez twarzy",
		desc: "Kolejny świetny film z Nickiem :)",
		img: ""
	},
];


var moviesElements = movies.map(function(movie) {  //metoda map, która jako parametr przyjmuje funkcję, która przechodzi przez każdy element tablicy
	return React.createElement('li', {key: movie.id},			// który następnie mapowany jest do React elementu
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: this.props.img})
	);											   	
}); 

var element = 
	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements) // umieszczenie powyższych elementów w liście
	);


ReactDOM.render(element, document.getElementById('app'));

