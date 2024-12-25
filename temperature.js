
$( document ).ready(function() {

    initialiseForecastLinechart(['temperature'], "temperatureLinechart linechart singleLinechart", "#temperatureForecast", false);

    // TODO put real data in here at some point
    $(".currentSingleDatapoint").append("<p>" + Math.round(Math.random() * 100, 1) + "</p>");

});