
$( document ).ready(function() {

    initialiseForecastLinechart(['temperature'], "temperatureLinechart linechart singleLinechart", "#temperatureForecast", false);

    // TODO put real data in here at some point
    const singleDatapointValue = Math.round(Math.random() * 100, 1);
    $(".currentSingleDatapoint").append(
        "<p>" + singleDatapointValue + "°C</p>"
    ).addClass(generatePercentileClass(singleDatapointValue));

});