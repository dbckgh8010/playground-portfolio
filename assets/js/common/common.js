$(function() {
    setInterval(function() {
        var dateInfo = new Date();
        var hour = String(dateInfo.getHours()).padStart(2, '0');  // 2자리로 맞추기
        var min = String(dateInfo.getMinutes()).padStart(2, '0'); // 2자리로 맞추기
        var sec = String(dateInfo.getSeconds()).padStart(2, '0'); // 2자리로 맞추기
        var year = dateInfo.getFullYear();
        var month = dateInfo.getMonth() + 1;
        var date = dateInfo.getDate();
        var daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
        var dayOfweek = daysOfWeek[dateInfo.getDay()];
        
        $(".year").html(year + "년&nbsp;")
        $(".day").html( month + "월&nbsp;" + date + "일&nbsp;" + dayOfweek + "요일");
        $(".time").html(hour + ":" + min + ":" + sec);
    }, 1000);

    gsap.registerPlugin(ScrollToPlugin);

    $(".item-btn").on('click', function() {
        let target = $(this).data("target");

        gsap.to(window, {
            duration: 1.2,
            scrollTo: target,
            escape: "power2.inOut"
        });
    });

    /*날씨 부분 수정중 */
    const apiKey = "9e53e7c5a722510c71657586b087812d";
    const geoUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

    const weatherIconMapping = {Clouds: "clouds", Clear: "clear", Rain: "rain", Drizzle: "drizzle", Mist: "mist", Snow: "snow", Wind: "wind"};
    $(".weather-btn").on('click', function() {
        $(".weather-pop").fadeIn();
    });
    $(".close-weather").on('click', function() {
        $(".weather-pop").fadeOut();
    });

    function getWeather(city) {
        $.ajax({
            url: apiUrl + encodeURIComponent(city) + `&appid=${apiKey}&lang=kr`,
            method: "GET",
            success: function (data) {
                $(".weather-error").hide();
                $(".weather").show();
                
                $(".city").text(data.name);
                
                const tempCelsius = Math.round(data.main.temp - 273.15);
                $(".temp").text(tempCelsius + "°C");
                $(".humidity").text(`습도 ${data.main.humidity}%`);
                $(".wind").text(`풍속 ${data.wind.speed} m/s`);
                
                const mainWeather = data.weather[0].main;
                const iconName = weatherIconMapping[mainWeather] || "default";
                $(".weather-icon").attr("src", `assets/img/common/${iconName}.png`);
                $(".status").text(data.weather[0].description);
            },
            error: function () {
                $(".weather-error").show();
                $(".weather").hide();
                $(".weather-btn").show(); 
            }
        });
    };
    $(".weather-search button").on("click", function () {
        const city = $(".weather-search input").val();
        if (city !== "") {
            getWeather(city);
        }
    });
    $(".weather-search input").on("keypress", function (e) {
        if (e.key === "Enter") {
            const city = $(this).val();
            if (city !== "") {
                getWeather(city);
            }
        }
    });
})