
$( document ).ready(function() {

    initialiseForecastLinechart(['humidity'], "humidityLinechart linechart singleLinechart", "#humidityForecast", false);

    // TODO put real data in here at some point
    const singleDatapointValue = getRandomInt(0, 100);

    $(".currentSingleDatapoint").append(
        "<p>" + singleDatapointValue + "%</p>"
    ).addClass(generatePercentileClass(singleDatapointValue));

    let bgColor = $(".currentSingleDatapoint").css("background-color");
    $(".currentSingleDatapoint").addClass(generateAppropriateFgColor(bgColor));

});