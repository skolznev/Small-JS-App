var map = AmCharts.makeChart( "chartdiv", {
  type: "map",
  theme: "light",
  dataProvider: {
    map: "worldHigh",
    zoomLevel: 2.5,
    zoomLongitude: -100,
    zoomLatitude: 32,
    areas: [ {
        id: "US",
        color: "#f00"
      }, {
        id: "CA",
        color: "#f00"
      }, {
        id: "BZ",
        color: "#f00"
      }, {
        id: "CU",
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