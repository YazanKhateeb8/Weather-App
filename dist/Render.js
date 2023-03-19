class Render {
  
    constructor() {}
  
    rendercities(cities) {
      
      const source = $('#cities-template').html();
      const template = Handlebars.compile(source);
      const city = template({cities});
      $('.citiesWeather').empty().append(city);
    }
  }