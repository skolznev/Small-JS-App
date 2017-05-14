var map = AmCharts.makeChart( "chartdiv", {
  type: "map",
  theme: "light",
  dataProvider: {
    map: "worldHigh",
    zoomLevel: 3.5,
    zoomLongitude: 80,
    zoomLatitude: 30,
    areas: [ {
        id: "KH",
        color: "#f00"
      }, {
        id: "CN",
        color: "#f00"
      }, {
        id: "SA",
        color: "#f00"
      }, {
        id: "IR",
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