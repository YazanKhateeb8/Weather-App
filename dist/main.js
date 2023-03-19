const module = new Models()
const renderer = new Render()



window.onload = function () {
    module.getAllCities()
    .then(() => {
        console.log(module.myData)
        renderer.rendercities(module.myData)
    })
}


$("#search-btn").on('click', function() {
    let inputValue = $('#city-name').val()
    if(inputValue){
        module.getCityData(inputValue)
        .then(() => {
        renderer.rendercities(module.myData)
        })
        $('#city-name').val('')
    }
})


$(".citiesWeather").on('click', '#add-btn', function() {
    const cityName = $(this).closest('.weatherItem').find('.cityName').text()
     module.saveCityData(cityName)
     .then(() => {
        renderer.rendercities(module.myData)
     })
})


$(".citiesWeather").on('click', '#remove-btn', function() {
    const cityName = $(this).closest('.weatherItem').find('.cityName').text()
     module.deleteCityData(cityName)
     .then(() => {
        renderer.rendercities(module.myData)
     })
})

