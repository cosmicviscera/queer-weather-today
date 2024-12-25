
$( document ).ready(function() {


    const locations = ["Melbourne CBD", "Ivanhoe", "Northcote", 
        "Footscray", "Frankston", "Dandenong", "Reservoir", "Preston"];
    const airQualityTypes = ["PM10", "PM25", "NO2", "SO2", "CO", "O3", "AQI"];
    const allergenTypes = [
        "Grass", "Alternaria mould", "Plantain",
        "Birch", "Cypress", "Myrtle", "Olive", "Plane"
    ];
    const horizontalLabels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
    const CHART_COLORS = {
        "ten": "#31309c", 
        "twenty": "#25afe4", 
        "thirty": "#24bbdb",
        "fifty": "#2be79d",
        "seventy": "#ddd62a",
        "eighty": "#fc9a28",
        "ninety": "#d1260b",
        "hundred": "#650005"
    };

    let width, height, gradient;
    function getGradient(ctx, chartArea) {
      const chartWidth = chartArea.right - chartArea.left;
      const chartHeight = chartArea.bottom - chartArea.top;
      if (!gradient || width !== chartWidth || height !== chartHeight) {
        // Create the gradient because this is either the first render
        // or the size of the chart has changed
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, CHART_COLORS["ten"]);
        gradient.addColorStop(0.2, CHART_COLORS["twenty"]);
        gradient.addColorStop(0.3, CHART_COLORS["thirty"]);
        gradient.addColorStop(0.5, CHART_COLORS["fifty"]);
        gradient.addColorStop(0.7, CHART_COLORS["seventy"]);
        gradient.addColorStop(0.8, CHART_COLORS["eighty"]);
        gradient.addColorStop(0.9, CHART_COLORS["ninety"]);
        gradient.addColorStop(1, CHART_COLORS["hundred"]);
      }

      return gradient;
    }

    function initialiseMultiForecast(dataPoints, canvasClass) {
        for (let i = 0; i < dataPoints.length; i++) {

            // Only show labels for the last graph in the set
            var lastItem = i == dataPoints.length - 1;
            var horizontalLabelDisplay = false;
            var height = "70px";
            if (lastItem) {
                horizontalLabelDisplay = true;
                height = "90px";
            }

            // create canvases for each AQI metric

            const canvasId = dataPoints[i] + "Chart";

            $("#aqiForecast").append(
                "<div style='height: " + height + "' class='" + canvasClass + "'><h4>"
                + dataPoints[i] + "</h4><canvas id='"
                + canvasId
                + "'></canvas></div>"
            );

            const currentCanvas = $("#" + canvasId);

            // set up chart 
            const lineConfig = {
              type: 'line',
              data: {
                  labels: horizontalLabels,
                  // uncomment this to see a version combined into a single graph
                  // datasets: generateAqiDatasets()
                  datasets: [{
                    label: "ppm", data: generateRandomForecast(), 
                    borderColor: function(context) {
                            const chart = context.chart;
                            const {ctx, chartArea} = chart;

                            if (!chartArea) {
                              // This case happens on initial chart load
                              return;
                            }
                            return getGradient(ctx, chartArea);
                    },
                  }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false // hide the annoying label
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: true
                            },
                            ticks: {
                                display: horizontalLabelDisplay
                            }
                        },
                        y: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                display: false
                            }
                        }
                    }
                }
            };
            new Chart(currentCanvas, lineConfig);
        };

    };

    initialiseMultiForecast(airQualityTypes, "aqiLinechart");


    // add our list of locations to the search dropdown
    function initialiseLocationPicker() {
        $.each(locations, function() {
            $("#locationList").append("<option value='" + this + "'>"+ this + "</option>");

            // make melbs the default
            if (this == "Melbourne CBD") {
                $("#locationList option").prop('selected', true);
            }
        });

        var options = {searchable: true};
        NiceSelect.bind(document.getElementById("locationList"), options);
    }

    initialiseLocationPicker();

    // Code for sidebar links
    $(".sidebar > a").on("click", function() {
        $(window).scrollTop(0);

        var sectionClass = $(this).attr("class");
        $(".weather-category").addClass("hidden");
        $(".weather-category."+sectionClass).removeClass("hidden");

        $(".sidebar > a").removeClass("active");
        $(this).addClass("active");
    });


    // Update forecasts - TODO placeholder for when we have real data to update
    function updateForecasts(location) {
        console.log("Current location has been changed to: " + location);
    }

    function generateBarColors(values) {
        var barColors = [];
        for (let i = 0; i < values.length; i++) {
            if (values[i] < 10) {
                barColors[i] = CHART_COLORS["ten"];
            } else if (values[i] < 20) {
                 barColors[i] = CHART_COLORS["twenty"];               
            } else if (values[i] < 30) {
                barColors[i] = CHART_COLORS["thirty"];
            } else if (values[i] < 50) {
                barColors[i] = CHART_COLORS["fifty"];
            } else if (values[i] < 70) {
                barColors[i] = CHART_COLORS["seventy"];
            } else if (values[i] < 80) {
                barColors[i] = CHART_COLORS["eighty"];
            } else if (values[i] < 90) {
                barColors[i] = CHART_COLORS["ninety"];
            } else {
                barColors[i] = CHART_COLORS["hundred"];               
            }
        }

        console.log(barColors)
        return barColors;
    }


    // placeholder code for bar chart

    const currentAQ = generateRandomForecast();
    const barData = {
      labels: airQualityTypes,
      datasets: [{
        axis: 'y',
        label: "ppm",
        data: currentAQ,
        fill: false,
        backgroundColor: generateBarColors(currentAQ),
        borderWidth: 1
      }]
    };

    const barConfig = {
      type: 'bar',
      data: barData,
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

    new Chart(document.getElementById('aqiBarChart'), barConfig);




    // TODO this is boilerplate config, in the future it will use real data specific to the air quality metric in question
    function generateRandomForecast() {
        const numbers = [];
        for (let i = 0; i < 28; i++) {
            numbers.push(Math.random() * 100);
        };
        return numbers;
    };

    function generateAqiDatasets() {
        dataset = [];
        for (let i = 0; i < airQualityTypes.length; i++) {
            var forecast = generateRandomForecast();
            dataset.push({label: airQualityTypes[i], data: forecast});
        }
        return dataset;
    };

});