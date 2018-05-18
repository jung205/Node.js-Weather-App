let request = require('request');
const argv = require('yargs').argv;

let apiKey = '5c9cfac0af12e9f0bbe2aa61f5f8c7bc';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
	if(err){
		console.log('error:', error);
	}
	else {
		let weather = JSON.parse(body)

		let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
		console.log(message);
	}
});


