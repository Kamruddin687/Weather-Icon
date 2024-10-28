const apikey = "dd0dc7504369c4bf1208a1fac6b73972";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");


        async function checkWeather(city) {
            const response = await fetch(apiUrl+ city+ `&appid=${apikey}`);

            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
           else{
            var data = await response.json();
            
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
                 
            if(data.weather[0].main=="clouds"){
                weatherIcon.src="wimage/clouds.png";
            }
            else if(data.weather[0].main=="Rain"){
                weatherIcon.src="wimage/rain.png";
            }
             else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="wimage/drizzle.png";
            }
             else if(data.weather[0].main=="Mist"){
                weatherIcon.src="wimage/mist.png";
            }
         document.querySelector(".weather").style.display="block";
         document.querySelector(".error").style.display="nonef";

        }
    }
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })