const form = document.querySelector('form');
const cityName = document.querySelector('.city-name');
const weatherCondition = document.querySelector('.weather-condition');
const temp = document.querySelector('.temp');
const cardImg = document.querySelector('.card img');
const weatherIcon = document.querySelector('.card div img');
const weatherCard = document.querySelector('.card');



form.addEventListener('submit', event => {
  event.preventDefault();

  const city = form.city.value.trim();
  console.log(city);
  form.city.value = '';

  
  getCityCode(city)
  .then(data => {
    const cityDetails = data;
    console.log(cityDetails);
    
    cityName.innerHTML = cityDetails.EnglishName;
    
    getCityWeather(data.Key)
    
    .then(data => {
      const cityWeather = data;
      console.log(data)
      
      weatherCondition.innerHTML = cityWeather.WeatherText;
      temp.innerHTML = cityWeather.Temperature.Metric.Value;
      
      if (cityWeather.IsDayTime) {
        cardImg.setAttribute('src', './img/day.svg');
      } else {
        cardImg.setAttribute('src', './img/night.svg');
      }
      
      weatherIcon.setAttribute('src', `./img/icons/${cityWeather.WeatherIcon}.svg`);
    })
  })
  .catch(error => console.log('oppss!', error));
  
  
  weatherCard.classList.remove('d-none');
})