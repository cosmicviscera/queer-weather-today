const MIN = 50;
const MAX = 80;

const airQualityTypes = ["PM10", "PM25", "NO2", "SO2", "CO", "O3", "AQI"];

$( document ).ready(function() {

    initialiseForecastLinechart(airQualityTypes, MIN, MAX, "aqiLinechart linechart multiLinechart", "#aqiForecast", true);

    function generateBarGraphData(dataPoints) {
        // placeholder data
        const currentForecast = generateRandomForecast(MIN, MAX);
        return {
            labels: dataPoints,
            datasets: [{
                axis: 'y',
                label: "ppm",
                data: currentForecast,
                fill: false,
                backgroundColor: generateBarColors(normaliseNumberArray(currentForecast, MIN, MAX)),
                borderWidth: 1
            }]
        };
    }

    const aqiBarGraphConfig = {
      type: 'bar',
      data: generateBarGraphData(airQualityTypes),
      options: {
          scales: {
              x: {
                  beginAtZero: false,
                  ticks: {
                    beginAtZero: false
                  }
              }
          },
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