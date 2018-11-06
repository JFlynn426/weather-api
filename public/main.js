const currentCity = () => {
  return document.getElementById('place').value
}

const doSearch = event => {
  event.preventDefault()

  let cityURL
  if (isNaN(currentCity())) {
    cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity()}&units=imperial&APPID=1dea439c0612bd850d27d1cfda4844cc`
  } else {
    cityURL = `https://api.openweathermap.org/data/2.5/weather?zip=${currentCity()}&units=imperial&APPID=1dea439c0612bd850d27d1cfda4844cc`
  }

  let weather = fetch(cityURL)
    .then(response => {
      return response.json()
    })
    .then(weather => {
      newLI = document.createElement('li')
      document.querySelector('.conditions').appendChild(newLI)
      newLI.textContent = `Temperature: ${weather.main.temp}°F`
      newLI2 = document.createElement('li')
      document.querySelector('.conditions').appendChild(newLI2)
      newLI2.textContent = `Humidity: ${weather.main.humidity} %`
      newLI3 = document.createElement('li')
      document.querySelector('.conditions').appendChild(newLI3)
      newLI3.textContent = `Wind: ${weather.wind.speed} MPH`
    })
}

const main = () => {
  document.querySelector('.search').addEventListener('click', doSearch)
}

document.addEventListener('DOMContentLoaded', main)
