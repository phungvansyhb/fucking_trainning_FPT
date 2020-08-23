$("#loading-location").hide();
$("#loading-weather").hide();
const Apikey = "6c186bd312fb6c44839158e1da4c8d1e";
const UrlEntry = `https://api.openweathermap.org/data/2.5/weather?appid=${Apikey}`;

function paddingLeft(n) {
    return n < 10 ? `0${n}` : n;
}
function getCurrentDate() {
    const days = [
        "Sunday",
        "Monday",
        "TuesDay",
        "WednesDay",
        "ThursDay",
        "Friday",
        "SaturDay",
    ];
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const now = new Date();
    return `${days[now.getDay()]} ${months[now.getMonth()]} ${now.getDate()},
                ${paddingLeft(now.getHours())}:${paddingLeft(
        now.getMinutes()
    )}`;
}

function fetchWeather({city = "Hanoi", country = "VietNam", units = "metric"}) {
    return $.ajax(`${UrlEntry}&q=${city},${country}&units=${units}`);
}
function renderWeather(weather) {
    const {icon, description} = weather.weather[0];
    const {temp, humidity, pressure} = weather.main;
    const {name} = weather;
    $("#weather-detail").html(
        `<div>City: ${name}</div>
                        <p class ='text-capitalize'>Weather : ${description}</p>
                        <hr>
                        <div class="weather-detail-container">
                            <div class="item toggle-units"></div>
                            <img src="http://openweathermap.org/img/w/${icon}.png" alt="icon" class="img-lg">
                            <span class="text-lg">${temp}</span>
                            <div class="icon">
                                <i class="wi wi-celsius icon-lg"></i>
                            </div>
                        </div>
                        <div class="item">
                            <p>Humidity: ${humidity}</p>
                            <p>Pressure: ${pressure}</p>
                        </div>

                    `
    );
}

$("#btn-search").click(() => {
    $("#loading-location").show();
    $("#weather-detail").fadeOut();
    setTimeout(() => {
        $.get("http://ip-api.com/json", (data, err) => {
            if (data) {
                $("#loading-location").fadeOut();
                $("#loading-weather").fadeIn();
                setTimeout(() => {
                    $("#loading-weather").fadeOut();
                    $("#current-date").html(getCurrentDate());

                    fetchWeather({
                        city: $("#search").val().replace(/\s+/g, "") || "Hanoi",
                    })
                        .then((data) => {
                            console.log(data);
                            $("#weather-detail").css("color", "unset").fadeIn();
                            renderWeather(data);
                        })
                        .catch((err) => {
                            $("#weather-detail").fadeIn();
                            $("#weather-detail")
                                .css("color", "red")
                                .text(`City not found`);
                        });
                }, 1000);
            }
        });
    }, 1000);
});
