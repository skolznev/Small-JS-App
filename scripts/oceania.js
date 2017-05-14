var map = AmCharts.makeChart( "chartdiv", {
  type: "map",
  theme: "light",
  dataProvider: {
    map: "worldHigh",
    zoomLevel: 4,
    zoomLongitude: 140,
    zoomLatitude: -33,
    areas: [ {
        id: "AU",
        color: "#f00"
      }, {
        id: "NZ",
        color: "#f00"
      }, {
        id: "VU",
        color: "#f00"
      }, {
        id: "FJ",
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