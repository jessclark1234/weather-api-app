function getWeatherApi() {
    var weatherApiKey = '877db42c219339bc7225168a019787ed'
    var cityName = document.getElementById('searchBar').value
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=' + weatherApiKey
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            for (var i = 0; i < data.list.length; i=i+8)  {
                var day = data.list[i]
                // document.getElementById('day' + (i/8+1)).textContent = day.dt_txt
                document.getElementById('temp' + (i/8+1)).textContent = 'Temperature: ' + day.main.temp + '*F'
                // localStorage.setItem("Temp",Temp)
                document.getElementById('wind' + (i/8+1)).textContent = 'Wind Speed: ' + day.wind.speed + 'mph'
                document.getElementById('humidity' + (i/8+1)).textContent = 'Humidity: ' +day.main.humidity + '%'
            }
        })
};

   document.getElementById("searchBtn") .addEventListener('click', function () {
    getWeatherApi();
   })


