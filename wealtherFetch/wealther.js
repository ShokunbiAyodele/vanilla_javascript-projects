class Weather{

  constructor(state, city){
    this.apiKey = '22345566789064';
    this.state = state;
    this.city  = city;
  }


  //fetch weather from the API 
  async getWeather(){
    const weatherResponse = await fetch();

    const response = await weatherResponse.json();

    return response.current_observation;

  }

  changeLocation(city,state){
    this.city = city;
    this.state = state;
  }
}