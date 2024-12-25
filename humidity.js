
$( document ).ready(function() {

    initialiseForecastLinechart(['humidity'], "humidityLinechart linechart singleLinechart", "#humidityForecast", false);
    
    // TODO put real data in here at some point
    const singleDatapointValue = Math.round(Math.random() * 100, 1);
    $(".currentSingleDatapoint").append(
        "<p>" + singleDatapointValue + "</p>"
    ).addClass(generatePercentileClass(singleDatapointValue));
});