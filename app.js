
const apiKey = "204e3cee4ac5d45227f6b280c1386657";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiURL+ city +`&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display ="none";
    }
    var data = await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=Math.round(data.wind.speed) +" Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/Images/cloudy.png";
    }
    else if(data.weather[0].main == "Rain"){
         weatherIcon.src = "/Images/heavy-rain.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "/Images/sunny.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/Images/drizzle.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display="none";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
