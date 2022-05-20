// var image = document.getElementById('.image');
// var title = document.getElementById('.card-title');
// var content = document.getElementById('.news-content');
// var time = document.getElementById('.news-time');


// function getData() {
//     url = "http://api.mediastack.com/v1/news?access_key=1a0a0c384ed863d721f0bb2c715e9257";
//     fetch(url).then((response) => {
//         return response.json();
//         console.log(response);
//     }).then((data) => {
//         console.log(data);
//         image.src = data.data.image;
//         title.innerHTML = data.title;
//         content.innerHTML = data.description;
//         time.innerHTML = data.published_at;
//     }
//     )
// }



// ACCU WEATHER API

// var btn = document.querySelector('Submit');
// var input = document.querySelector('#input');
// var city = document.querySelector('.city');
// var temp = document.querySelector('.weather-temp');
// var desc = document.querySelector('.weather-desc');

// url = 'https://api.openweathermap.org/data/2.5/weather?'+input.value+'&appid=96259501f46d766ec44089801df5a4d2';
// url=`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
// 	input)}&appid=96259501f46d766ec44089801df5a4d2`;
		
// btn.addEventListener('click', function () {
// 	console.log(input.value);
	
// 	fetch(url)
// 		.then(response => {
// 			response.json()
// 		})
// 		.then(data => {
// 			console.log(data);
// 			const t = data.main.temp;
// 			const loc = data.name;
// 			const des = data.weather[0].description;

// 			city.innerHTML = loc;
// 			temp.innerHTML = t;
// 			desc.innerHTML = des;

// 		})
		
// 		.catch(err => alert("Wrong City Name"));
// })



// Qoutes API

// var content = document.getElementById('.quotes: ');
// var author = document.getElementById('.author');
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'f2acdad90emshab86c2217acde1bp17681fjsnd321fedd6f81'
// 	}
// };

// fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
// 	.then(response => response.json())
// 	.then(response => {
// 		console.log(response);
// 		// console.log(response.content);
// 		document.getElementById('quote').innerHTML = response.content;
// 		document.getElementById('author').innerHTML = "- "+response.originator.name;
		
// 		// content.innerHTML = response.content;
// 		// author.innerHTML = response.name;
// 	})

// 	.catch(err =>
		// console.error(err));
		


// Chuck Norris API

const content = document.querySelector('#cn-content');
const btn_next = document.querySelector('#cn-next');
const btn_back = document.querySelector('.cn-back');

url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';

const PreviousJokes = new Array();
var i = 0;

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
		'X-RapidAPI-Key': 'f2acdad90emshab86c2217acde1bp17681fjsnd321fedd6f81'
	}
};

fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
		.then(response => response.json())		
		.then(response => {
			console.log(response);
			var con = response.value;
			content.textContent = con;

			PreviousJokes[i] = con;
		})
		.catch(err => console.error(err));

btn_next.addEventListener('click', function (){

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
			'X-RapidAPI-Key': 'f2acdad90emshab86c2217acde1bp17681fjsnd321fedd6f81'
		}
	};
	
	fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
		.then(response => response.json())		
		.then(response => {
			console.log(response);
			var con = response.value;
			content.textContent = con;

			PreviousJokes[i] = con;
			i++;
		})
		.catch(err => console.error(err));
})
// var i = PreviousJokes.length;
btn_back.addEventListener('click', function () {

	i--;
	content.textContent = PreviousJokes[i];
	console.log(PreviousJokes[i]);
	i--;
})