
$( document ).ready(function() {

    initialiseForecastLinechart(['temperature'], "temperatureLinechart linechart singleLinechart", "#temperatureForecast", false);

    // TODO put real data in here at some point
    const singleDatapointValue = getRandomInt(0, 50);

    $(".currentSingleDatapoint").append(
        "<p>" + singleDatapointValue + "°C</p>"
    ).addClass(generatePercentileClass(singleDatapointValue));

    let bgColor = $(".currentSingleDatapoint").css("background-color");
    $(".currentSingleDatapoint").addClass(generateAppropriateFgColor(bgColor));

});