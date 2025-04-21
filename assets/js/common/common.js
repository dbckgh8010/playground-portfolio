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

    const apiKey = "nbYhWPlb5QvBDwUFGnZfH12pbPlzG3hyq14bgx%2F5B6CahkaMsj1C9QIeG8Q9oxps242SP1n%2FYln%2B5d6YMQr0Mg%3D%3D";
    const apiUrl = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0";
    const weatherInner = $(".weather");
    const error = $(".error");
    const searchBox = $(".weather-search input");
    const searchBtn = $(".weather-search button");
    const weatherIcon = $(".weather-icon");
    const weatherIconMapping = {
        Clouds: "clouds",
        Clear: "clear",
        Rain: "rain",
        Drizzle: "drizzle",
        Mist: "mist",
        Snow: "snow",
        Wind: "wind",
    };

    async function checkWeather(city) {
        const response = await fetch(
            apiUrl + encodeURIComponent(city) + `&appid=${apiKey}&lang=kr`
        );

        if(response.status === 404) {
            weatherInner.style.display = "none";
            error.style.display = "block";
        } else {
            error.style.display = "none";

            const data = await response.json();

            $(".city").innerHTML = data.name;
            $(".status").innerHTML = data.weather[0].description;
            $(".temp").innerHTML = 
            Math.round(date.main.temp) + "˚C";
            $(".humidity").innerHTML = data.main.humidity + "%";
            $(".wind").innerHTML = data.wind.speed + "km/h";

            const mainWeather = data.weather[0].main;
            if (mainWeather in weatherIconMapping) {
                weatherIcon.src = `assets/img/common/${weatherIconMapping[mainWeather]}.png`;
            }

            weatherInner.style.dsiplay = "block";
        }
    }
    weatherInner.style.maxHeight = 0;
    weatherInner.style.overflow = "hidden";
    searchBox.on('keypress', function (event) {
        if (event.key === 'Enter') {
            checkWeather(searchBox.value);
            
            gsap.to(weatherInner, {
            maxHeight: "100vh",
            duration: 1,
            ease: "power2.inOut",
            });
        }
    });
    
    searchBtn.on('click', () => {
        checkWeather(searchBox.value);

        gsap.to(weatherInner, {
            maxHeight: "100vh",
            duration: 1,
            ease: "power2.inOut",
        });
    });

    const weatherId = data.weather[0].id;
    const koreanDescription = weatherDescKo.find((entry) => entry[weatherId]);
})