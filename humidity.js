
$( document ).ready(function() {

    initialiseForecastLinechart(['humidity'], "humidityLinechart linechart singleLinechart", "#humidityForecast", false);

    // TODO put real data in here at some point
    $(".currentSingleDatapoint").append("<p>" + Math.round(Math.random() * 100, 1) + "</p>");

});