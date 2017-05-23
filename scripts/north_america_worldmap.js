var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

AmCharts.ready(function() {
    var map = new AmCharts.AmMap();

    map.areasSettings = {
        autoZoom: true,
        rollOverOutlineColor: "#40403d", //Цвет границ
        selectedColor: "#fc0", //Цвет выбранной территории
        color: "#EEEEEE", //Цвет стран по умолчанию
    };
    
    //Глобальные настройки объектов на карте
    map.imagesSettings = {
      color: "#585869", //Цвет объектов
      rollOverColor: "#f00", //Цвет объекта при наведении
      selectedColor: "#f00", //Цвет объекта при нажатии
      pauseDuration: 0.2, //Время остановки транспорта
      animationDuration:13.5, //Скорость движения транспорта
      adjustAnimationSpeed:true //Регулировка скорости анимации
    };
    //Настройки линий передвижения
    map.linesSettings = {
        color: "#585869",
        alpha: 0.4
    };

    //Вектора для соединительных линий
    var lines = [{
        id: "line1",
        arc: -0.85,
        alpha: 0.3,
        latitudes: [38.9071923, 23.1135925],
        longitudes: [-77.03687070000001, -82.36659559999998]
    }, {
        id: "line2",
        alpha: 0,
        color: "#000000",
        latitudes: [38.9071923, 23.1135925],
        longitudes: [-77.03687070000001, -82.36659559999998]
    }];

    //Города и другие объекты карты
    var mapObjects = [{
        imageURL: "../../images/map_objects/washington.png",
        width: 40,
        height: 100,
        url: "",
        title: "Вашингтон",
        latitude: 38.9071923,
        longitude: -77.03687070000001,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis voluptatibus nesciunt porro aut distinctio nihil." + " Lorem: ".bold() + "50$"
    }, {
        imageURL: "../../images/map_objects/ottawa.png",
        width: 40,
        height: 100,
        url: "",
        title: "Оттава",
        latitude: 45.4215296,
        longitude: -75.69719309999999,
        description: "Lorem aipsum dolor sit amet, consectetur adipisicing elit. Odit eius nostrum repudiandae odio fugit corporis." + " Lorem: ".bold() + "50$"
    }, {
        imageURL: "../../images/map_objects/belmopan.png",
        width: 40,
        height: 100,
        url: "",
        title: "Бельмопан",
        latitude: 17.2510114,
        longitude: -88.75902009999999,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, eum. Nostrum neque doloribus voluptates minus." + " Lorem: ".bold() + "50$"
    }, {
        imageURL: "../../images/map_objects/havana.png",
        width: 40,
        height: 100,
        url: "",
        title: "Гавана",
        latitude: 23.1135925,
        longitude: -82.36659559999998,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id doloribus aliquid expedita incidunt alias!" + " Lorem: ".bold() + "50$"
    },{
        svgPath: planeSVG,
        positionOnLine: 0,
        color: "#000000",
        alpha: 0.1,
        animateAlongLine: true,
        lineId: "line2",
        flipDirection: true,
        loop: true,
        scale: 0.03,
        positionScale: 1.3
    }, {
        svgPath: planeSVG,
        positionOnLine: 0,
        color: "#585869",
        animateAlongLine: true,
        lineId: "line1",
        flipDirection: true,
        loop: true,
        scale: 0.03,
        positionScale: 1.8
    }];

    var dataProvider = {
        mapVar: AmCharts.maps.worldLow,
        // zoomControlEnabled: true,
        getAreasFromMap:false, //Не показываем остальные страны
        zoomLevel: 3,
        zoomLongitude: -100,
        zoomLatitude: 35,
    };

    dataProvider.areas = [
          {
              id: "US",
              color: "#B2FF59",
              title: "США:".bold() + " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem illum officiis, doloribus. Cupiditate, expedita, autem."},
          {
              id: "CA",
              color: "#FFD740",
              title: "Канада:".bold() + " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem illum officiis, doloribus. Cupiditate, expedita, autem."},
          {
              id: "BZ",
              color: "#FFD740",
              title: "Белиз:".bold() + " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem illum officiis, doloribus. Cupiditate, expedita, autem."},
          {
              id: "CU",
              color: "#FFD740",
              title: "Куба:".bold() + " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem illum officiis, doloribus. Cupiditate, expedita, autem."}
    ];

    map.dataProvider = dataProvider;

    var zoomControl = map.zoomControl;
        zoomControl.panControlEnabled = true;
        zoomControl.zoomControlEnabled = true;
        zoomControl.left = 280;
        zoomControl.top = 120;

    // map.smallMap = new AmCharts.SmallMap();
    dataProvider.images = mapObjects;
    dataProvider.lines = lines;

    map.write("mapdiv");
});