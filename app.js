const form = document.querySelector('form');
const cityName = document.querySelector('.city-name');
const weatherCondition = document.querySelector('.weather-condition');
const temp = document.querySelector('.temp');
const cardImg = document.querySelector('.card img');
const weatherIcon = document.querySelector('.card div img');
const weatherCard = document.querySelector('.card');


// form.addEventListener('submit', event => {
//   event.preventDefault();

//   const city = form.city.value.trim();
//   console.log(city);
//   form.city.value = '';

  
//   getCityCode(city)
//   .then(data => {
//     const cityDetails = data;
//     console.log(cityDetails);
    
//     cityName.innerHTML = cityDetails.EnglishName;
    
//     getCityWeather(data.Key)
    
//     .then(data => {
//       const cityWeather = data;
//       console.log(data)
      
//       weatherCondition.innerHTML = cityWeather.WeatherText;
//       temp.innerHTML = cityWeather.Temperature.Metric.Value;
      
//       if (cityWeather.IsDayTime) {
//         cardImg.setAttribute('src', 'img/day.svg');
//       } else {
//         cardImg.setAttribute('src', 'img/night.svg');
//       }
      
//       weatherIcon.setAttribute('src', `img/icons/${cityWeather.WeatherIcon}.svg`);
//     })
//   })
//   .catch(error => console.log('oppss!', error));
  
  
//   weatherCard.classList.remove('d-none');
// })


const updateCity = async (city) => {
  const cityDetails = await getCityCode(city);
  const weatherDetails = await getCityWeather(cityDetails.Key);

  return { cityDetails, weatherDetails }
}

const updateUI = (data) => {
  // const cityDetails = data.cityDetails;
  // const weatherDetails = data.weatherDetails;

  const { cityDetails, weatherDetails } = data;

  // console.log(cityDetails);
  // console.log(weatherDetails);

  cityName.innerHTML = cityDetails.EnglishName;

  weatherCondition.innerHTML = weatherDetails.WeatherText;
  temp.innerHTML = weatherDetails.Temperature.Metric.Value;

  if (weatherDetails.IsDayTime) {
    cardImg.setAttribute('src', 'img/day.svg');
  } else {
    cardImg.setAttribute('src', 'img/night.svg');
  }
          
  weatherIcon.setAttribute('src', `img/icons/${weatherDetails.WeatherIcon}.svg`);


  weatherCard.classList.remove('d-none');
}


form.addEventListener('submit', event => {
  event.preventDefault();

  // console.log(event);

  const city = form.city.value.trim();
  // console.log(city);
  form.city.value = '';

  updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error));
});











