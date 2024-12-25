
$( document ).ready(function() {

    initialiseForecastLinechart(['airPressure'], "airPressureLinechart linechart singleLinechart", "#airPressureForecast", false);

    // TODO put real data in here at some point
    const singleDatapointValue = getRandomInt(900, 1035);

    $(".currentSingleDatapoint").append(
        "<p>" + singleDatapointValue + " hPa</p>"
    ).addClass(generatePercentileClass(singleDatapointValue));

    let bgColor = $(".currentSingleDatapoint").css("background-color");
    $(".currentSingleDatapoint").addClass(generateAppropriateFgColor(bgColor));

});