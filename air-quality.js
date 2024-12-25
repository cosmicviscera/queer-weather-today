
$( document ).ready(function() {

    initialiseForecastLinechart(airQualityTypes, "aqiLinechart linechart multiLinechart", "#aqiForecast", true);

    function generateBarGraphData(dataPoints) {
        // placeholder data
        const currentForecast = generateRandomForecast();
        return {
            labels: dataPoints,
            datasets: [{
                axis: 'y',
                label: "ppm",
                data: currentForecast,
                fill: false,
                backgroundColor: generateBarColors(currentForecast),
                borderWidth: 1
            }]
        };
    }

    const aqiBarGraphConfig = {
      type: 'bar',
      data: generateBarGraphData(airQualityTypes),
      options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false
            }
        }
      },
    };

    new Chart(document.getElementById('aqiBarChart'), aqiBarGraphConfig);

});