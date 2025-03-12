## Komárek Weather App
Komárek eather App is a simple weather application named after the legendary character of **Mr. Komárek** from a Czech comedy movie from the 70s called "Na samotě u lesa" ("Seclusion Near a Forest" in English, I think). 
The application is meant to be used primarily on mobile devices, but can be used on desktop as well.

### Real weather data
To be able to use real weather data, I chose to use [WeatherAPI.com](https://www.weatherapi.com/) with a free pricing plan. The weather data are fetched based on user's geolocation from the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation).

### Caching
Weather data along with user's geolocation are **cached in localStorage** to prevent the need to refetch everytime the page reload because the data are not changing fast. The **expiry time for cached data is 10 minutes**. The data are also re-fetched and re-cached **IF the user's geolocation values (latitude, longitude) change significantly (current bias is 0.01) from the cached geolocation values**.

### Production
Production deployment is [here](https://komarek.netlify.app/).

</br>
</br>
</br>

"*Chčije a chčije...*"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \- Děda Komárek, 1976
