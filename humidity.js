const MIN = 0;
const MAX = 100;

$( document ).ready(function() {

    initialiseForecastLinechart(['humidity'], MIN, MAX,"humidityLinechart linechart singleLinechart", "#humidityForecast", false);

    // TODO put real data in here at some point
    const singleDatapointValue = getRandomInt(MIN, MAX);

    $(".currentSingleDatapoint").append(
        "<p>" + singleDatapointValue + "%</p>"
    ).addClass(generatePercentileClass(singleDatapointValue));

    let bgColor = $(".currentSingleDatapoint").css("background-color");
    $(".currentSingleDatapoint").addClass(generateAppropriateFgColor(bgColor));

});