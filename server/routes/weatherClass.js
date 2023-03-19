class WeatherOfCity {
    constructor(cityName , temp , condition , conditionPic ){
        this.cityName = cityName;
        this.temperature = temp;
        this.condition = condition;
        this.conditionPic = conditionPic;
        this.IsExistInDB = false;
    }

}

// class Weather {
//     constructor(){
//         this._weatherArray = []
//     }

//     get weatherArray(){
//         return this._weatherArray
//     }

//     addWeather(weather){
//         this._weatherArray.push(weather);
//     }
// }

module.exports = {WeatherOfCity }