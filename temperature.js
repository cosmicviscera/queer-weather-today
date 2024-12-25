const MIN = 0;
const MAX = 50;

$( document ).ready(function() {

    initialiseForecastLinechart(['temperature'], MIN, MAX,"temperatureLinechart linechart singleLinechart", "#temperatureForecast", false);

    // TODO put real data in here at some point
    const singleDatapointValue = getRandomInt(MIN, MAX);
    const normalisedValue = normaliseNumberRange(singleDatapointValue, MIN, MAX);

    $(".currentSingleDatapoint").append(
        "<p>" + singleDatapointValue + "°C</p>"
    ).addClass(generatePercentileClass(normalisedValue));

    let bgColor = $(".currentSingleDatapoint").css("background-color");
    $(".currentSingleDatapoint").addClass(generateAppropriateFgColor(bgColor));

});