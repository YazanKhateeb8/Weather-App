class Models {
  constructor() {
    this._cityData = [];
  }

  get myData() {
    return this._cityData;
  }

  getCityData(cityName) {
    return $.get(`/city/${cityName}`)
      .then((city) => {
        city.IsExistInDB = false;
        this._cityData.push(city);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  getAllCities() {
    return $.get(`/city`)
      .then((cities) => {
        cities.forEach((city) => {
          city.IsExistInDB = true;
        });
        cities.forEach((c) => {
          this._cityData.push(c);
        });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  saveCityData(cityName) {
    const city = this._cityData.find(c => c.cityName === cityName)
    const saveCity = {
      cityName: city.cityName,
      temperature: city.temperature,
      condition: city.condition,
      conditionPic: city.conditionPic
    }
    return $.post("/city", saveCity)
    .then(() => {
      city.IsExistInDB = true;
    })

    .catch((error) => {
      console.log(error);
    });
  }

  deleteCityData(cityName) {
    const city = this._cityData.find(c => c.cityName === cityName)
    city.IsExistInDB = false;
    return $.ajax({
      url: `/city/${cityName}`,
      type: "DELETE",
      success: function () {},
    });
    
  }

}
