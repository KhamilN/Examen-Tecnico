$(document).ready(function () {
    let sitio = 'http://api.weatherstack.com/current';
    let key = "?access_key=60507401d7626be255dd9f62eb35186e";
    let query = "&query=New York";
    let apiQuery = sitio + key + query;
    let data;
    fetch(apiQuery)
        .then(response => response.json())
        .then(json => {
            data = json;
            console.log(data);
            reemplazar("#nube", (data.current.cloudcover+"%"));
            reemplazar("#sensaT", data.current.feelslike+" C°");
            reemplazar("#hume", data.current.humidity+"%");
            reemplazar("#viento", data.current.wind_speed+" Km/h");
            reemplazar("#preci", data.current.precip+" mm");
            reemplazar("#presion", data.current.pressure+" MB");
            reemplazar("#temp", data.current.temperature+"C°");
            reemplazar("#uv", data.current.uv_index);
            reemplazar("#visi", data.current.visibility+"Km");
        })


})

function reemplazar(target, dato) {
    $(target).html(dato);
}

// current:
// cloudcover: 100
// feelslike: 16
// humidity: 42
// is_day: "yes"
// observation_time: "10:50 PM"
// precip: 0
// pressure: 1027
// temperature: 16
// uv_index: 5
// visibility: 16
// weather_code: 122
// weather_descriptions: ["Overcast"]
// weather_icons: ["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"]
// wind_degree: 140
// wind_dir: "SE"
// wind_speed: 9