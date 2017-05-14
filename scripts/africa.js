var map = AmCharts.makeChart( "chartdiv", {
  type: "map",
  theme: "light",
  dataProvider: {
    map: "worldHigh",
    zoomLevel: 2.5,
    zoomLongitude: 20,
    zoomLatitude: 0,
    areas: [ {
        id: "MZ",
        color: "#f00"
      }, {
        id: "CD",
        color: "#f00"
      }, {
        id: "ET",
        color: "#f00"
      }, {
        id: "MA",
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