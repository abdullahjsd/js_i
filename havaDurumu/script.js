const apiKey ="acbf5a7609ab6bdaec930a028081f494";


const searchBox = document.querySelector(".myInput")
const searchBtn = document.querySelector(".search button")
const weatherIcons = document.querySelector(".weather-icon")



async function checkWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    if(response.status== 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
        let data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "% ";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    

    if (data.weather[0].main == "Clouds"){
        weatherIcons.src ="https://w7.pngwing.com/pngs/880/389/png-transparent-weather-computer-icons-rain-cloud-weather-leaf-text-cloud.png"
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcons.src ="https://w7.pngwing.com/pngs/543/19/png-transparent-weather-forecasting-symbol-computer-icons-cloud-sunny-cloud-weather-forecasting-computer-wallpaper-thumbnail.png"
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcons.src ="https://w7.pngwing.com/pngs/880/389/png-transparent-weather-computer-icons-rain-cloud-weather-leaf-text-cloud.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcons.src ="https://w7.pngwing.com/pngs/191/728/png-transparent-weather-forecasting-rain-and-snow-mixed-wind-windy-rain-love-text-cloud.png"
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcons.src ="https://w7.pngwing.com/pngs/244/421/png-transparent-weather-clouds-fog-foggy-weather-color-icon-thumbnail.png"
    }
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display = "none"
    }

    

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    

})








































