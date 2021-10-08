//ini storage object
const storage = new Storage();

weatherLocation = storage.getLocationData()

//Init Weather Object
const weather = new Weather(weatherLocation.state,weatherLocation.city);

  //Init UI object
  const ui = new UI();

//LOAD the weather the browser reloaded
document.addEventListener('DOMContentLoaded',getWeather);

//change location event lister
document.getElementById('w-change-btn').addEventListener('click', (e)=> {
  
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  //change location
  changeLocation(city,state);

  //set location
  storage.setLocationData(city,state);

  //get weather agaain
  getWeather();

  $('#locModal').modal('hide');
})

function getWeather(){
  weather.getWeather().
then(result => ui.paint(result)).
catch(error => console.log(error));
}
