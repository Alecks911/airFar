// Search form

const cityListener = document.getElementById("city-search");

cityListener.addEventListener("submit", function (event) {
    event.preventDefault();

    const city = document.getElementById("city-name").value;
    // console.log(city);

    const cleanCity = city.trim().toLowerCase();
    // console.log(cleanCity);

    //Search rules - to hoide all cards if the search term matches the city value and add the one that it matches back
    if (cleanCity === "amsterdam") {
        const element = document.querySelectorAll(".city-card");

        for (var i = 0; i < element.length; i += 1) {
            element[i].style.display = 'none';
        }

        const searchElement = document.querySelector(".amsterdam");
        searchElement.style.display = "flex";

    } else if (cleanCity === "barcelona") {
        const element = document.querySelectorAll(".city-card");

        for (var i = 0; i < element.length; i += 1) {
            element[i].style.display = 'none';
        }

        const searchElement = document.querySelector(".barcelona");
        searchElement.style.display = "flex";
    } else if (cleanCity === "bangkok") {
        const element = document.querySelectorAll(".city-card");

        for (var i = 0; i < element.length; i += 1) {
            element[i].style.display = 'none';
        }

        const searchElement = document.querySelector(".bangkok");
        searchElement.style.display = "flex";
    } else if (cleanCity === "beijing") {
        const element = document.querySelectorAll(".city-card");

        for (var i = 0; i < element.length; i += 1) {
            element[i].style.display = 'none';
        }

        const searchElement = document.querySelector(".beijing");
        searchElement.style.display = "flex";
    } else if (cleanCity === "berlin") {
        const element = document.querySelectorAll(".city-card");

        for (var i = 0; i < element.length; i += 1) {
            element[i].style.display = 'none';
        }

        const searchElement = document.querySelector(".berlin");
        searchElement.style.display = "flex";
    } else if (cleanCity === "bucharest") {
        const element = document.querySelectorAll(".city-card");

        for (var i = 0; i < element.length; i += 1) {
            element[i].style.display = 'none';
        }

        const searchElement = document.querySelector(".bucharest");
        searchElement.style.display = "flex";
    } else if (cleanCity === "budapest") {
        const element = document.querySelectorAll(".city-card");

        for (var i = 0; i < element.length; i += 1) {
            element[i].style.display = 'none';
        }

        const searchElement = document.querySelector(".budapest");
        searchElement.style.display = "flex";
    } else if (cleanCity === "delhi") {
        const element = document.querySelectorAll(".city-card");

        for (var i = 0; i < element.length; i += 1) {
            element[i].style.display = 'none';
        }

        const searchElement = document.querySelector(".delhi");
        searchElement.style.display = "flex";
    } else if (cleanCity === "london") {
        const element = document.querySelectorAll(".city-card");

        for (var i = 0; i < element.length; i += 1) {
            element[i].style.display = 'none';
        }

        const searchElement = document.querySelector(".london");
        searchElement.style.display = "flex";
    } else if (cleanCity === "los angeles" || cleanCity === "la") {
        const element = document.querySelectorAll(".city-card");

        for (var i = 0; i < element.length; i += 1) {
            element[i].style.display = 'none';
        }

        const searchElement = document.querySelector(".los-angeles");
        searchElement.style.display = "flex";
    } else if (cleanCity === "mexico city" || cleanCity === "mexico") {
        const element = document.querySelectorAll(".city-card");

        for (var i = 0; i < element.length; i += 1) {
            element[i].style.display = 'none';
        }

        const searchElement = document.querySelector(".mexico-city");
        searchElement.style.display = "flex";
    } else if (cleanCity === "new york" || cleanCity === "ny") {
        const element = document.querySelectorAll(".city-card");

        for (var i = 0; i < element.length; i += 1) {
            element[i].style.display = 'none';
        }

        const searchElement = document.querySelector(".new-york");
        searchElement.style.display = "flex";
    } else if (cleanCity === "paris") {
        const element = document.querySelectorAll(".city-card");

        for (var i = 0; i < element.length; i += 1) {
            element[i].style.display = 'none';
        }

        const searchElement = document.querySelector(".paris");
        searchElement.style.display = "flex";
    } else if (cleanCity === "tokyo") {
        const element = document.querySelectorAll(".city-card");

        for (var i = 0; i < element.length; i += 1) {
            element[i].style.display = 'none';
        }

        const searchElement = document.querySelector(".tokyo");
        searchElement.style.display = "flex";
    }

    // Search rules section endshere

    cityListener.reset();
});


//Hamburger menu

const menuController = document.getElementById('menu-hamburger');
menuController.addEventListener('click', function () {

    document.querySelector('.menu').classList.toggle('menu-open');
});

document.getElementById('menu-close').addEventListener('click', function () {
    document.querySelector('.menu').classList.remove('menu-open');
});

// Temperature on city cards

// ---------- V1 Function - works

window.addEventListener("load", handleWeatherRequest);

async function handleWeatherRequest(event) {
    event.preventDefault();

    const city = document.getElementById("weather-city").innerText;

    const urlString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=870b1b10b58578f725b70b13aff6c357`;

    const response = await fetch(urlString);

    const data = await response.json();

    const readableTemp = (data.main.temp - 273.15).toFixed(1);

    document.querySelector("#weather-result").innerText = `${readableTemp}°C`;
}



//Objects 

const cityDetails = [{
        "city": "Amsterdam",
        "country": "Netherlands",
        "💵 Cost": "3,376£",
        "📡 Internet": "Fast: 25Mbps",
        "😝 Fun": "Good",
        "⛅️ Temperature": "7C",
        "💨 Air quality": "Great",
        "👌 Safety": "Good",
        "👮‍♀️ Lack of crime": "Great",
        "🤝 Lack of racism": "Good",
        "🎓 Education level": "High",
        "💰 Income level": "2,957£ / mo",
        "🙊 English speaking": "Great",
        "😤 People density": "Low density",
        "🚶 Walkability": "Great",
        "🚦 Traffic safety": "Okay",
        "🏥 Hospitals": "Great",
        "😄 Happiness": "Great",
        "🍸 Nightlife": "Good",
        "📶 Free WiFi in city": "Good",
        "😁 Friendly to foreigners": "Good",
        "👩 Female friendly": "Good",
        "🌈 LGBTQ+ friendly": "Good"
    },
    {
        "city": "Barcelona",
        "country": "Spain",
        "💵 Cost": "2,176£",
        "📡 Internet": "Fast: 35Mbps",
        "😝 Fun": "Great",
        "⛅️ Temperature": "13C",
        "💨 Air quality": "Great",
        "👌 Safety": "Good",
        "👮‍♀️ Lack of crime": "Good",
        "🤝 Lack of racism": "Bad",
        "🎓 Education level": "High",
        "💰 Income level": "1,657£ / mo",
        "🙊 English speaking": "Okay",
        "😤 People density": "Dense",
        "🚶 Walkability": "Great",
        "🚦 Traffic safety": "Okay",
        "🏥 Hospitals": "Great",
        "😄 Happiness": "Good",
        "🍸 Nightlife": "Great",
        "📶 Free WiFi in city": "Okay",
        "😁 Friendly to foreigners": "Okay",
        "👩 Female friendly": "Good",
        "🌈 LGBTQ+ friendly": "Great"
    },
    {
        "city": "Bangkok",
        "country": "Thailand",
        "💵 Cost": "2,176£",
        "📡 Internet": "Fast: 35Mbps",
        "😝 Fun": "Great",
        "⛅️ Temperature": "13C",
        "💨 Air quality": "Great",
        "👌 Safety": "Good",
        "👮‍♀️ Lack of crime": "Good",
        "🤝 Lack of racism": "Bad",
        "🎓 Education level": "High",
        "💰 Income level": "1,657£ / mo",
        "🙊 English speaking": "Okay",
        "😤 People density": "Dense",
        "🚶 Walkability": "Great",
        "🚦 Traffic safety": "Okay",
        "🏥 Hospitals": "Great",
        "😄 Happiness": "Good",
        "🍸 Nightlife": "Great",
        "📶 Free WiFi in city": "Okay",
        "😁 Friendly to foreigners": "Okay",
        "👩 Female friendly": "Good",
        "🌈 LGBTQ+ friendly": "Great"
    },
    {
        "city": "Beijing",
        "country": "China",
        "💵 Cost": "2,176£",
        "📡 Internet": "Fast: 35Mbps",
        "😝 Fun": "Great",
        "⛅️ Temperature": "13C",
        "💨 Air quality": "Great",
        "👌 Safety": "Good",
        "👮‍♀️ Lack of crime": "Good",
        "🤝 Lack of racism": "Bad",
        "🎓 Education level": "High",
        "💰 Income level": "1,657£ / mo",
        "🙊 English speaking": "Okay",
        "😤 People density": "Dense",
        "🚶 Walkability": "Great",
        "🚦 Traffic safety": "Okay",
        "🏥 Hospitals": "Great",
        "😄 Happiness": "Good",
        "🍸 Nightlife": "Great",
        "📶 Free WiFi in city": "Okay",
        "😁 Friendly to foreigners": "Okay",
        "👩 Female friendly": "Good",
        "🌈 LGBTQ+ friendly": "Great"
    },
    {
        "city": "Berlin",
        "country": "Germany",
        "💵 Cost": "2,176£",
        "📡 Internet": "Fast: 35Mbps",
        "😝 Fun": "Great",
        "⛅️ Temperature": "13C",
        "💨 Air quality": "Great",
        "👌 Safety": "Good",
        "👮‍♀️ Lack of crime": "Good",
        "🤝 Lack of racism": "Bad",
        "🎓 Education level": "High",
        "💰 Income level": "1,657£ / mo",
        "🙊 English speaking": "Okay",
        "😤 People density": "Dense",
        "🚶 Walkability": "Great",
        "🚦 Traffic safety": "Okay",
        "🏥 Hospitals": "Great",
        "😄 Happiness": "Good",
        "🍸 Nightlife": "Great",
        "📶 Free WiFi in city": "Okay",
        "😁 Friendly to foreigners": "Okay",
        "👩 Female friendly": "Good",
        "🌈 LGBTQ+ friendly": "Great"
    },
    {
        "city": "Bucharest",
        "country": "Romania",
        "💵 Cost": "2,176£",
        "📡 Internet": "Fast: 35Mbps",
        "😝 Fun": "Great",
        "⛅️ Temperature": "13C",
        "💨 Air quality": "Great",
        "👌 Safety": "Good",
        "👮‍♀️ Lack of crime": "Good",
        "🤝 Lack of racism": "Bad",
        "🎓 Education level": "High",
        "💰 Income level": "1,657£ / mo",
        "🙊 English speaking": "Okay",
        "😤 People density": "Dense",
        "🚶 Walkability": "Great",
        "🚦 Traffic safety": "Okay",
        "🏥 Hospitals": "Great",
        "😄 Happiness": "Good",
        "🍸 Nightlife": "Great",
        "📶 Free WiFi in city": "Okay",
        "😁 Friendly to foreigners": "Okay",
        "👩 Female friendly": "Good",
        "🌈 LGBTQ+ friendly": "Great"
    },
    {
        "city": "Budapest",
        "country": "Hungary",
        "💵 Cost": "2,176£",
        "📡 Internet": "Fast: 35Mbps",
        "😝 Fun": "Great",
        "⛅️ Temperature": "13C",
        "💨 Air quality": "Great",
        "👌 Safety": "Good",
        "👮‍♀️ Lack of crime": "Good",
        "🤝 Lack of racism": "Bad",
        "🎓 Education level": "High",
        "💰 Income level": "1,657£ / mo",
        "🙊 English speaking": "Okay",
        "😤 People density": "Dense",
        "🚶 Walkability": "Great",
        "🚦 Traffic safety": "Okay",
        "🏥 Hospitals": "Great",
        "😄 Happiness": "Good",
        "🍸 Nightlife": "Great",
        "📶 Free WiFi in city": "Okay",
        "😁 Friendly to foreigners": "Okay",
        "👩 Female friendly": "Good",
        "🌈 LGBTQ+ friendly": "Great"
    },
    {
        "city": "Delhi",
        "country": "India",
        "💵 Cost": "2,176£",
        "📡 Internet": "Fast: 35Mbps",
        "😝 Fun": "Great",
        "⛅️ Temperature": "13C",
        "💨 Air quality": "Great",
        "👌 Safety": "Good",
        "👮‍♀️ Lack of crime": "Good",
        "🤝 Lack of racism": "Bad",
        "🎓 Education level": "High",
        "💰 Income level": "1,657£ / mo",
        "🙊 English speaking": "Okay",
        "😤 People density": "Dense",
        "🚶 Walkability": "Great",
        "🚦 Traffic safety": "Okay",
        "🏥 Hospitals": "Great",
        "😄 Happiness": "Good",
        "🍸 Nightlife": "Great",
        "📶 Free WiFi in city": "Okay",
        "😁 Friendly to foreigners": "Okay",
        "👩 Female friendly": "Good",
        "🌈 LGBTQ+ friendly": "Great"
    },
    {
        "city": "London",
        "country": "United Kingdom",
        "💵 Cost": "2,176£",
        "📡 Internet": "Fast: 35Mbps",
        "😝 Fun": "Great",
        "⛅️ Temperature": "13C",
        "💨 Air quality": "Great",
        "👌 Safety": "Good",
        "👮‍♀️ Lack of crime": "Good",
        "🤝 Lack of racism": "Bad",
        "🎓 Education level": "High",
        "💰 Income level": "1,657£ / mo",
        "🙊 English speaking": "Okay",
        "😤 People density": "Dense",
        "🚶 Walkability": "Great",
        "🚦 Traffic safety": "Okay",
        "🏥 Hospitals": "Great",
        "😄 Happiness": "Good",
        "🍸 Nightlife": "Great",
        "📶 Free WiFi in city": "Okay",
        "😁 Friendly to foreigners": "Okay",
        "👩 Female friendly": "Good",
        "🌈 LGBTQ+ friendly": "Great"
    },
    {
        "city": "Los Angeles",
        "country": "United States",
        "💵 Cost": "2,176£",
        "📡 Internet": "Fast: 35Mbps",
        "😝 Fun": "Great",
        "⛅️ Temperature": "13C",
        "💨 Air quality": "Great",
        "👌 Safety": "Good",
        "👮‍♀️ Lack of crime": "Good",
        "🤝 Lack of racism": "Bad",
        "🎓 Education level": "High",
        "💰 Income level": "1,657£ / mo",
        "🙊 English speaking": "Okay",
        "😤 People density": "Dense",
        "🚶 Walkability": "Great",
        "🚦 Traffic safety": "Okay",
        "🏥 Hospitals": "Great",
        "😄 Happiness": "Good",
        "🍸 Nightlife": "Great",
        "📶 Free WiFi in city": "Okay",
        "😁 Friendly to foreigners": "Okay",
        "👩 Female friendly": "Good",
        "🌈 LGBTQ+ friendly": "Great"
    },
    {
        "city": "Mexico City",
        "country": "Mexico",
        "💵 Cost": "2,176£",
        "📡 Internet": "Fast: 35Mbps",
        "😝 Fun": "Great",
        "⛅️ Temperature": "13C",
        "💨 Air quality": "Great",
        "👌 Safety": "Good",
        "👮‍♀️ Lack of crime": "Good",
        "🤝 Lack of racism": "Bad",
        "🎓 Education level": "High",
        "💰 Income level": "1,657£ / mo",
        "🙊 English speaking": "Okay",
        "😤 People density": "Dense",
        "🚶 Walkability": "Great",
        "🚦 Traffic safety": "Okay",
        "🏥 Hospitals": "Great",
        "😄 Happiness": "Good",
        "🍸 Nightlife": "Great",
        "📶 Free WiFi in city": "Okay",
        "😁 Friendly to foreigners": "Okay",
        "👩 Female friendly": "Good",
        "🌈 LGBTQ+ friendly": "Great"
    },
    {
        "city": "New York",
        "country": "United States",
        "💵 Cost": "2,176£",
        "📡 Internet": "Fast: 35Mbps",
        "😝 Fun": "Great",
        "⛅️ Temperature": "13C",
        "💨 Air quality": "Great",
        "👌 Safety": "Good",
        "👮‍♀️ Lack of crime": "Good",
        "🤝 Lack of racism": "Bad",
        "🎓 Education level": "High",
        "💰 Income level": "1,657£ / mo",
        "🙊 English speaking": "Okay",
        "😤 People density": "Dense",
        "🚶 Walkability": "Great",
        "🚦 Traffic safety": "Okay",
        "🏥 Hospitals": "Great",
        "😄 Happiness": "Good",
        "🍸 Nightlife": "Great",
        "📶 Free WiFi in city": "Okay",
        "😁 Friendly to foreigners": "Okay",
        "👩 Female friendly": "Good",
        "🌈 LGBTQ+ friendly": "Great"
    },
    {
        "city": "Paris",
        "country": "France",
        "💵 Cost": "2,176£",
        "📡 Internet": "Fast: 35Mbps",
        "😝 Fun": "Great",
        "⛅️ Temperature": "13C",
        "💨 Air quality": "Great",
        "👌 Safety": "Good",
        "👮‍♀️ Lack of crime": "Good",
        "🤝 Lack of racism": "Bad",
        "🎓 Education level": "High",
        "💰 Income level": "1,657£ / mo",
        "🙊 English speaking": "Okay",
        "😤 People density": "Dense",
        "🚶 Walkability": "Great",
        "🚦 Traffic safety": "Okay",
        "🏥 Hospitals": "Great",
        "😄 Happiness": "Good",
        "🍸 Nightlife": "Great",
        "📶 Free WiFi in city": "Okay",
        "😁 Friendly to foreigners": "Okay",
        "👩 Female friendly": "Good",
        "🌈 LGBTQ+ friendly": "Great"
    }, {
        "city": "Tokyo",
        "country": "Japan",
        "💵 Cost": "2,176£",
        "📡 Internet": "Fast: 35Mbps",
        "😝 Fun": "Great",
        "⛅️ Temperature": "13C",
        "💨 Air quality": "Great",
        "👌 Safety": "Good",
        "👮‍♀️ Lack of crime": "Good",
        "🤝 Lack of racism": "Bad",
        "🎓 Education level": "High",
        "💰 Income level": "1,657£ / mo",
        "🙊 English speaking": "Okay",
        "😤 People density": "Dense",
        "🚶 Walkability": "Great",
        "🚦 Traffic safety": "Okay",
        "🏥 Hospitals": "Great",
        "😄 Happiness": "Good",
        "🍸 Nightlife": "Great",
        "📶 Free WiFi in city": "Okay",
        "😁 Friendly to foreigners": "Okay",
        "👩 Female friendly": "Good",
        "🌈 LGBTQ+ friendly": "Great"
    }
];

// console.log(cityDetails[0]["🏥 Hospitals"]);