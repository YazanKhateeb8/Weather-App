const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
    cityName : String, 
    temperature : String,  
    condition : String, 
    conditionPic : String 
})

const City = mongoose.model("city", citySchema)
module.exports = City