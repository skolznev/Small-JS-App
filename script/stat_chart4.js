var chart;

var chartData = [
    {
        "country": "USA",
        "visits": 3025,
        "color": "#FF0F00"
    },
    {
        "country": "China",
        "visits": 1882,
        "color": "#FF6600"
    },
    {
        "country": "Japan",
        "visits": 1809,
        "color": "#FF9E01"
    },
    {
        "country": "Germany",
        "visits": 1322,
        "color": "#FCD202"
    },
    {
        "country": "UK",
        "visits": 1122,
        "color": "#F8FF01"
    },
    {
        "country": "France",
        "visits": 1114,
        "color": "#B0DE09"
    },
    {
        "country": "India",
        "visits": 984,
        "color": "#04D215"
    },
    {
        "country": "Spain",
        "visits": 711,
        "color": "#0D8ECF"
    },
    {
        "country": "Netherlands",
        "visits": 665,
        "color": "#0D52D1"
    },
    {
        "country": "Russia",
        "visits": 580,
        "color": "#2A0CD0"
    },
    {
        "country": "South Korea",
        "visits": 443,
        "color": "#8A0CCF"
    },
    {
        "country": "Canada",
        "visits": 441,
        "color": "#CD0D74"
    }
];


AmCharts.ready(function () {
    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData;
    chart.categoryField = "country";
    chart.startDuration = 1;

    // AXES
    // category
    var categoryAxis = chart.categoryAxis;
    categoryAxis.labelRotation = 45; // this line makes category values to be rotated
    categoryAxis.gridAlpha = 0;
    categoryAxis.fillAlpha = 1;
    categoryAxis.fillColor = "#FAFAFA";
    categoryAxis.gridPosition = "start";

    // value
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.dashLength = 5;
    valueAxis.title = "Visitors from country";
    valueAxis.axisAlpha = 0;
    chart.addValueAxis(valueAxis);

    // GRAPH
    var graph = new AmCharts.AmGraph();
    graph.valueField = "visits";
    graph.colorField = "color";
    graph.balloonText = "<b>[[category]]: [[value]]</b>";
    graph.type = "column";
    graph.lineAlpha = 0;
    graph.fillAlphas = 1;
    chart.addGraph(graph);

    // CURSOR
    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.cursorAlpha = 0;
    chartCursor.zoomable = false;
    chartCursor.categoryBalloonEnabled = false;
    chart.addChartCursor(chartCursor);

    chart.creditsPosition = "top-right";

    // WRITE
    chart.write("chartdiv");
});