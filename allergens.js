const allergenTypes = [
    "Grass", "Alternaria", "Plantain",
    "Birch", "Cypress", "Myrtle", "Olive", "Plane"
];

$( document ).ready(function() {

    initialiseMultiForecast(allergenTypes, "allergensLinechart linechart multiLinechart", "#allergensForecast", true);

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

    const allergensBarGraphConfig = {
      type: 'bar',
      data: generateBarGraphData(allergenTypes),
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

    new Chart(document.getElementById('allergensBarChart'), allergensBarGraphConfig);

    // initialise "current weather" datapoints with dummy data
    // TODO put real data in here at some point
    $(".currentSingleDatapoint").each(function() {
            $(this).append("<p>" + Math.round(Math.random() * 100, 1) + "</p>");
        }
    );

});