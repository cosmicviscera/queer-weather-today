
$( document ).ready(function() {

    initialiseForecastLinechart(['airPressure'], "airPressureLinechart linechart singleLinechart", "#airPressureForecast", false);

    // TODO put real data in here at some point
    $(".currentSingleDatapoint").append("<p>" + Math.round(Math.random() * 100, 1) + "</p>");

});