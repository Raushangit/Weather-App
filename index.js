const form = document.querySelector('form');
const search = document.getElementById('search');
const weather = document.getElementById('weather');
const API_KEY = '3265874a2c77ae4a04bb96236a642d2f';

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    
    
const response = await fetch(url);
console.log(response);
const data = await response.json();
console.log(data);
showWeather(data);

};

const showWeather = (data) => {
    console.log('inside showWeather', data);
    if(data.cod == '404') {
        weather.innerHTML = `<h1>Oops!!! city not found</h1>`;
        return;
    }
     weather.innerHTML = `
     <div>
     <img
      src="https://pluspng.com/img-png/png-weather-black-and-white-open-2000.png" height= 80px; 
      alt="weather"/>
 </div>
 <div>
     <h2>${data.main.temp} C</h2>
     <h3>${data.weather[0].main}</h3>
 </div>`;
};

form.addEventListener('submit', function (event) {
    console.log(' city name: ', search.value);
    getWeather(search.value);
    event.preventDefault();
});

