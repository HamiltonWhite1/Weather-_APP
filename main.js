let apiForm = document.querySelector('#submit_search')
let cityWeather = document.querySelector('#city_weather')
let cloudCoverage = document.querySelector('#cloud_coverage')
let weatherTemps = document.querySelector('#weather_temps')
let windSpeed = document.querySelector('#wind_speed')

apiForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let city = e.target.elements['city_selection'].value
    let temp = e.target.elements['unit_selection'].value
    let data = new FormData(e.target)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${temp}&appid=e383e01fb56002d5114e2e124481c183`)
        .then(response => { return response.json() })
        .then(data => {
            // console.log(data)
            let cloudLi = document.createElement('li')
            let tempLi = document.createElement('li')
            let windSpeedLi = document.createElement('li')

            cloudLi.classList.add('list-group-item')
            cloudLi.innerText = `${data.weather[0].main}`
            cloudCoverage.appendChild(cloudLi)

            tempLi.classList.add('list-group-item')
            tempLi.innerText = `Temperature High: ${data.main.temp_max}\n Temperature Low: ${data.main.temp_min}\n Humidity: ${data.main.humidity}%`
            weatherTemps.appendChild(tempLi)

            windSpeedLi.classList.add('list-group-item')
            windSpeedLi.innerText = `Wind Speed: ${data.wind.speed}\n Gust Speeds: ${data.wind.gust}`
            windSpeed.appendChild(windSpeedLi)
            
        })
})

let clearSearch = document.querySelector('#clear_search')

clearSearch.addEventListener('click', () => {
    cloudCoverage.innerHTML = '';
    weatherTemps.innerHTML = '';
    windSpeed.innerHTML = '';
})
