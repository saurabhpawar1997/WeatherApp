let data;
    let key = "26012a1e0249e8d9be60c9fffe02ff70"
    async function getWeather() {
        try {
            let city = document.getElementById("city").value;
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
            data = await res.json();
            appendData(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    function appendData(data) {
        let container = document.getElementById("container");
        container.innerHTML = null;
        let name = document.createElement("p");
        name.innerText = `Name :- ${data.name} (${data.sys.country})`
        let humidity = document.createElement("p");
        humidity.innerText = `Humidity :- ${data.main.humidity} %`;
        let pressure = document.createElement("p");
        pressure.innerText = `Pressure :- ${data.main.pressure} Pa`;
        let temp = document.createElement("p");
        temp.innerText = `Temp :- ${data.main.temp} 'C`;
        let visibility = document.createElement("p");
        visibility.innerText = `Visibility :- ${data.visibility} %`;
        let windspeed = document.createElement("p");
        windspeed.innerText = `Wind speed :- ${data.wind.speed} km/h`;
        let description = document.createElement("p");
        // rain.innerText = `Rain :- ${data.rain['1h']} mm (${data.weather['0'].description})`;
        description.innerText = `Description :- ${data.weather['0'].description}`;

        container.append(name, humidity, pressure, temp, visibility, windspeed, description);
    }
