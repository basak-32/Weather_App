const key = 'xNXAsiWveqiYLmwCx53Kgo0sXY1U8lyW';

const getCityCode = async (city) => {
  const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();

  return data[0];
}

const getCityWeather = async (cityCode) => {
  const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const query = `?apikey=${key}`;

  const response = await fetch(baseURL + cityCode + query);
  const data = await response.json();

  return data[0];
}


// getCityCode('kolkata')
//   // .then(data => console.log(data))
//   .then(data => {
//     console.log(data);
//     getCityDetails(data.Key)
//   })
//   .catch(error => console.log('oppss!', error));