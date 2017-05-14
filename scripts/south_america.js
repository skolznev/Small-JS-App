var map = AmCharts.makeChart( "chartdiv", {
  type: "map",
  theme: "light",
  dataProvider: {
    map: "worldHigh",
    zoomLevel: 2.5,
    zoomLongitude: -70,
    zoomLatitude: -32,
    areas: [ {
        id: "AR",
        color: "#f00"
      }, {
        id: "BR",
        color: "#f00"
      }, {
        id: "VE",
        color: "#f00"
      }, {
        id: "PY",
        color: "#f00"
      }
    ]
  },

  areasSettings: {
    rollOverOutlineColor: "#FFFFFF",
    rollOverColor: "#CC0000",
    alpha: 0.8,
    unlistedAreasAlpha: 1, //0 - не показывать остальные страны
    // unlistedAreasColor: "#8dd9ef" //Цвет заблокированных стран
  }

} );