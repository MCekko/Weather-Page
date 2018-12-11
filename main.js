var app = new Vue({
    el: '#app',
    data: {
        data2: [],
        data3: [],
        data4: [],
        City: "",
        Weather1: "Clouds",
        Weather2: "Rain",
        Weather3: "Clear",
    },
    created: function () {
        this.FilterCity()
    },
    methods: {

        FilterCity: function () {
            var insertCity = document.getElementById("Search").value;

            this.City = insertCity;


        },

        getData: function () {

            fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + this.City + "&APPID=ea57fff84e4d4b31a172c402b7b66440", {
                method: "GET",

            }).then(function (response) {
                if (response.ok) {


                    return response.json();
                }

            }).then(function (json) {
                app.data2 = json.list[0].main
                app.data3 = json.list[0].wind
                app.data4 = json.list[3].weather[0].main
                app.filtergif();
                console.log(app.data2)
                console.log(json)
                console.log(app.data4)

            }).catch(function (error) {
                console.log("Request failed:" + error.message);
            })
        },

        filtergif: function () {
            var PrincipalValue = this.data4;
            var PrincipalGif = document.getElementById("Gif");
            if (PrincipalValue == this.Weather1) {
                PrincipalGif.src = "Gif/13.gif"

            }

            if (PrincipalValue == this.Weather2) {

                PrincipalGif.src = "Gif/cloud_rain_drops_falling_lg_clr.gif"
            }

            if (PrincipalValue == this.Weather3) {
                PrincipalGif.src = "Gif/giphy.gif"
            }


        },

    }
});
