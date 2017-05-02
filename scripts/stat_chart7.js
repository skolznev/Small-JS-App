var chart;

var chartData = [
    {
        "continent": "North America",
        "trucks": 40000,
        "SUVs": 180000,
        "cars": 90000,
        "total": 310000
    },
    {
        "continent": "Asia",
        "trucks": 90000,
        "SUVs": 40000,
        "cars": 110000,
        "total": 240000
    },
    {
        "continent": "Europe",
        "trucks": 30000,
        "SUVs": 50000,
        "cars": 110000,
        "total": 190000
    }
];

AmCharts.ready(function () {
    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData;
    chart.categoryField = "continent";
    chart.plotAreaBorderAlpha = 0.2;

    // AXES
    // category
    var categoryAxis = chart.categoryAxis;
    categoryAxis.gridAlpha = 0.1;
    categoryAxis.axisAlpha = 0;
    categoryAxis.widthField = "total";
    categoryAxis.gridPosition = "start";

    // value
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.stackType = "100% stacked";
    valueAxis.gridAlpha = 0.1;
    valueAxis.unit = "%";
    valueAxis.axisAlpha = 0;
    chart.addValueAxis(valueAxis);


    // GRAPHS
    // first graph
    var graph = new AmCharts.AmGraph();
    graph.title = "Trucks";
    graph.labelText = "[[value]]";
    graph.valueField = "trucks";
    graph.type = "column";
    graph.fillAlphas = 1;
    chart.addGraph(graph);

    // second graph
    graph = new AmCharts.AmGraph();
    graph.title = "SUVs";
    graph.labelText = "[[value]]";
    graph.valueField = "SUVs";
    graph.type = "column";
    graph.fillAlphas = 1;
    chart.addGraph(graph);

    // third graph
    graph = new AmCharts.AmGraph();
    graph.title = "Cars";
    graph.labelText = "[[value]]";
    graph.valueField = "cars";
    graph.type = "column";
    graph.fillAlphas = 1;
    chart.addGraph(graph);

    chart.legend = new AmCharts.AmLegend();


    // WRITE
    chart.write("chartdiv");
});
