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
        latitudes: [-35.2809368, -41.1864603],
        longitudes: [149.13000920000002, 175.1]
    }, {
        id: "line2",
        alpha: 0,
        color: "#000000",
        latitudes: [-35.2809368, -41.1864603],
        longitudes: [149.13000920000002, 175.1]
    }];

    //Города и другие объекты карты
    var mapObjects = [{
        imageURL: "../../images/map_objects/canberra.png",
        width: 40,
        height: 100,
        url: "",
        title: "Канберра",
        latitude: -35.2809368,
        longitude: 149.13000920000002,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis voluptatibus nesciunt porro aut distinctio nihil." + " Lorem: ".bold() + "50$"
    }, {
        imageURL: "../../images/map_objects/wellington.png",
        width: 40,
        height: 100,
        url: "",
        title: "Веллингтон",
        latitude: -41.1864603,
        longitude: 175.1,
        description: "Lorem aipsum dolor sit amet, consectetur adipisicing elit. Odit eius nostrum repudiandae odio fugit corporis." + " Lorem: ".bold() + "50$"
    }, {
        imageURL: "../../images/map_objects/port_vila.png",
        width: 40,
        height: 100,
        url: "",
        title: "Порт-Вила",
        latitude: -16.1332512,
        longitude: 167.42732450000003,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, eum. Nostrum neque doloribus voluptates minus." + " Lorem: ".bold() + "50$"
    }, {
        imageURL: "../../images/map_objects/suva.png",
        width: 40,
        height: 100,
        url: "",
        title: "Сува",
        latitude: -18,
        longitude: 178.4500789,
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
        zoomLongitude: 140,
        zoomLatitude: -30,
    };

    dataProvider.areas = [
          {
              id: "AU",
              color: "#B2FF59",
              title: "Австралия:".bold() + " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem illum officiis, doloribus. Cupiditate, expedita, autem."},
          {
              id: "NZ",
              color: "#FFD740",
              title: "Новая Зеландия:".bold() + " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem illum officiis, doloribus. Cupiditate, expedita, autem."},
          {
              id: "VU",
              color: "#FFD740",
              title: "Вануату:".bold() + " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem illum officiis, doloribus. Cupiditate, expedita, autem."},
          {
              id: "FJ",
              color: "#FFD740",
              title: "Фиджи:".bold() + " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem illum officiis, doloribus. Cupiditate, expedita, autem."}
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