document.addEventListener("DOMContentLoaded", () => {
    class WeatherApp {
        constructor() {
            this.weatherInfo = document.getElementById('weather-info');
            this.fetchWeatherData();
        }

        async fetchWeatherData() {
            try {
                const response = await fetch('api.php');
                const data = await response.json();
                this.displayWeatherData(data);
            } catch (error) {
                this.weatherInfo.innerHTML = `<p>Error loading data.</p>`;
                console.error('Error fetching the weather data:', error);
            }
        }

        displayWeatherData(data) {
            const coord = `Coordinates : Lon ${data.coord.lon}, Lat ${data.coord.lat}`;
            const weather = `${data.weather[0].main} - ${data.weather[0].description}`;
            const temp = `${data.main.temp}°C`;
            const tempMax = `Max Temp :<br> ${data.main.temp_max}°C`;
            const tempMin = `Min Temp :<br> ${data.main.temp_min}°C`;
            const pressure = `Pressure :<br> ${data.main.pressure} hPa`;
            const humidity = `Humidity :<br> ${data.main.humidity}%`;
            const visibility = `Visibility :<br> ${data.visibility} meters`;
            const wind = `Wind :<br> ${data.wind.speed} m/s at ${data.wind.deg}°`;
            const feelsLike = `Feels Like :<br> ${data.main.feels_like}°C`;
            const sunrise = `Sunrise :<br> ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
            const sunset = `Sunset :<br> ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
            const country = `Country :<br> ${data.sys.country}`;
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            this.weatherInfo.innerHTML = `
                <div class="d-flex">
                    <h6 class="flex-grow-1">${data.name}, ${country}</h6>
                    <h6>${new Date().toLocaleTimeString()}</h6>
                </div>
                <div class="d-flex flex-column text-center mt-3 mb-4">
                <h6><img src="${iconUrl}" width="100px"></h6>
                    <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;">${temp}</h6>
                    <span class="small" style="color: #868B94">${weather}</span>
                </div>
                <div>
                </div>
                <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem;">
                        <div><i class="fas fa-map-marker-alt fa-fw" style="color: #868B94;"></i> <span class="ms-1">${coord}</span></div>
                        <div class="row mb-3">
                            <div class="col-sm-4">
                                <div class="card">
                                    <div><i class="fas fa-eye fa-fw" style="color: #868B94;"></i> <span class="ms-1">${sunset}</span></div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">${sunrise}</span></div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">${wind}</span></div>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-sm-4">
                                <div class="card">
                                    <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1">${tempMax}</span></div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">${tempMin}</span></div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">${feelsLike}</span></div>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-sm-4">
                                <div class="card">
                                    <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1">${visibility}</span></div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">${humidity}</span></div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">${pressure}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    new WeatherApp();
});
