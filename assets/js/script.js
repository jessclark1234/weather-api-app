function getWeatehrApi() {

    var weatherApiKey = '877db42c219339bc7225168a019787ed'
    var requestUrl = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';

    fetch(requestUrl)
    .then(function (response) {
        return response.json;
    })
    .then(function (data) {
        console.log(data)
        for (var i = 0; i < data.length; i++) {
            var get
        }
    })
}

function dayjs () {
var today = dayjs();
$(currentDay).text(today.format('dddd, M DD, YY'));
}