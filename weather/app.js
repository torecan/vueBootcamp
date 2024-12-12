const vm = Vue.createApp({
    data() {
        return {
            city: "",
            weather: null,
            apiKey: "2c7879fb9c5a77b56ce198bf205c6fc2", // OpenWeatherMap'ten aldığın API anahtarını buraya koy
            // apiKey2: "daa31566a0edb15dec9205b8e1471fa1", // OpenWeatherMap'ten aldığın API anahtarını buraya koy
        };
    },
    methods: {
        async fetchWeather() {
            if (!this.city) {
                alert("Please enter a city name.");
                return;
            }
            try {
                
                // 1. Şehirden enlem ve boylam al


                

                // const geoResponse = await fetch(
                //     `https://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=1&appid=${this.apiKey1}`
                // );
                // const geoData = await geoResponse.json();
                // if (geoData.length === 0) throw new Error("City not found");

                // console.log(geoData);

                // const { lat, lon } = geoData[0];

                // // 2. One Call API ile hava durumunu al
                const weatherResponse = await fetch(
                    `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`
                );
                const weatherData = await weatherResponse.json();
                console.log(weatherData);
                this.weather = weatherData;
            } catch (error) {
                alert(error.message);
                this.weather = null;
            }
            this.updateBackgroundColor();
        },
        updateBackgroundColor() {

            const card = this.$refs.weatherCard;
            // console.log(card);
            if(this.weather.main.temp > 20) {
                card.style.backgroundColor = "red";
            } else if(this.weather.main.temp >= 10) {
                card.style.backgroundColor = "blue";
            } else if(this.weather.main.temp < 10) {
                card.style.backgroundColor = "white";
            }
        },
    },
}).mount("#app");
