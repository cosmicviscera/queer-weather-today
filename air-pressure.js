const MIN = 900;
const MAX = 1035;

$( document ).ready(function() {

    // TODO parameterise min and max into this function
    initialiseForecastLinechart(['airPressure'], MIN, MAX,"airPressureLinechart linechart singleLinechart", "#airPressureForecast", false);

    // TODO put real data in here at some point
    const singleDatapointValue = getRandomInt(MIN, MAX);
    const normalisedValue = normaliseNumberRange(singleDatapointValue, MIN, MAX);

    $(".currentSingleDatapoint").append(
        "<p>" + singleDatapointValue + " hPa</p>"
    ).addClass(generatePercentileClass(normalisedValue));

    let bgColor = $(".currentSingleDatapoint").css("background-color");
    $(".currentSingleDatapoint").addClass(generateAppropriateFgColor(bgColor));

});