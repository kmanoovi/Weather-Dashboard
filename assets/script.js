var weatherAPIKey = "12996bf19be251eb85850d90fc1b3859";
var city;



function getInfo() {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherAPIKey;
  
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
        }
      });
  }
  searchButton.addEventListener('click', getInfo);