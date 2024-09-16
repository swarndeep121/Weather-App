const apikey =  "b85cbad2891bfb76ce91cfeadb6f373d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
const input = document.querySelector('.search input');
var citi = input.value;
const weatherImage = document.querySelector('.weather img');
var imgUrl = "mist.png";
weatherImage.src = imgUrl;
 
const element = document.getElementById("search_btn");
async function checkWeather(citi){
    const response = await fetch(apiurl + citi+`&appid=${apikey}&units=metric`);
    var data =  await response.json();
    var city = document.querySelector('h2')
    city.textContent = data.name;
    var temp = document.querySelector('h1');
    temp.textContent = Math.round(data.main.temp)+'°C';
    var humid = document.querySelector('.humid');
    humid.textContent = data.main.humidity + '%';
    var speed = document.querySelector('.speed');
    speed.textContent = data.wind.speed + 'km/h';
    
    if(data.weather[0].main =='Clouds'){
        weatherImage.src = "clouds.png";
      }
    else if(data.weather[0].main =='Clear'){
          weatherImage.src = "clear.png";
        }
    else if(data.weather[0].main =='Drizzle' ||data.weather[0].main =='Haze' ){
          weatherImage.src = "drizzle.png";
        }
    else if(data.weather[0].main =='Mist'){
          weatherImage.src = "mist.png";
        }
    else if(data.weather[0].main =='Rain'){
          weatherImage.src = "rain.png";
        }
        console.log(data);
}
element.addEventListener("click",()=>{
    checkWeather(input.value);
} 
    
  );
  
