const express = require("express");
const router = express.Router();
const axios = require('axios')
const City = require('../model/City');
const {WeatherOfCity} = require('../routes/weatherClass.js')



router.get('/city/:cityName', function(req, res) {
    let cityName = req.params.cityName

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=a5a6bc0074c40e5cfa3172ea10c1b016&units=metric`)
    .then((result) => {
        const dataWeather = new WeatherOfCity(result.data.name , Math.round(result.data.main.temp) , result.data.weather[0].main , result.data.weather[0].icon)
        res.status(200).send(dataWeather)
    })
    .catch((err) => {
        res.status(400).send(err);
      });
    
})


router.get('/city' , function(req, res) {
    City.find({})
    .then((mydata) => {
      res.status(200).send(mydata);
    })
    .catch((err) => {
        res.status(400).send(err);
      });
    
})


router.post('/city' , function (req, res) {
        
        const cityName = req.body.cityName
        const temperature = req.body.temperature
        const condition = req.body.condition
        const conditionPic = req.body.conditionPic
        const data = new City({cityName , temperature , condition , conditionPic})
        data.save()
        .then(() =>{
            res.status(200).send("the Data is saved successfully")
        })
        .catch((err) => {
            res.status(400).send(err);
          });
})


router.delete('/city/:cityName' , function (req, res) {
    let name = req.params.cityName
    City.findOneAndDelete({cityName : name})
    .then(() =>{
        res.status(200).send("The Data is deleted successfully")
    })
    .catch((err) => {
        res.status(400).send(err);
      });
})


module.exports = router;