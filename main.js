let weather = {
    "apiKey": "b5f08f2bca6e56afd82205442f3dbc5b",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
         + city 
         + "&units=imperial&appid="
          + this.apiKey 
          )
          .then((response) => response.json())
          .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const { name } = data ;
        const {icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind

        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").textContent = "Weather in " + name
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").textContent = description
        document.querySelector(".temp").textContent = temp + " °F"
        document.querySelector(".wind").textContent =  "Wind Speed: " + speed + "km/h"
        document.querySelector(".humidity").textContent = "Humidity: " + humidity + "%"
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.background = "url('https://source.unsplash.com/random/1600x900/?" + name + " building')"
        document.body.style.backgroundSize = "cover"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }

}


document.querySelector(".searchbutton").addEventListener('click', function() {
weather.search()


})

document.querySelector(".search-bar").addEventListener('keyup', (e) => {
if(e.key === "Enter"){
weather.search()}
})


weather.fetchWeather("Denver")