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
    var lines = [];

    //Города и другие объекты карты
    var mapObjects = [{
        imageURL: "../../images/map_objects/secret.png",
        width: 40,
        height: 100,
        url: "",
        title: "Антананариву",
        latitude: -18.8791902,
        longitude: 47.50790549999999,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis voluptatibus nesciunt porro aut distinctio nihil."
    },{
        imageURL: "../../images/map_objects/salut.gif",
        width: 150,
        height: 120,
        url: "",
        title: "Антананариву",
        latitude: -18.8791902,
        longitude: 47.50790549999999,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis voluptatibus nesciunt porro aut distinctio nihil."
    }, {
        imageURL: "../../images/map_objects/shop.png",
        width: 50,
        height: 50,
        url: "",
        title: "Магазин",
        latitude: -21,
        longitude: 46.3,
        description: "Теперь в главном меню Вам доступен магазин с игровыми товарами."
    }];

    var dataProvider = {
        mapVar: AmCharts.maps.worldLow,
        // zoomControlEnabled: true,
        getAreasFromMap:false, //Не показываем остальные страны
        zoomLevel: 6,
        zoomLongitude: 40,
        zoomLatitude: -20,
    };

    dataProvider.areas = [
          {
              id: "MG",
              color: "#B2FF59",
              title: "Мадагаскар:".bold() + " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem illum officiis, doloribus. Cupiditate, expedita, autem."},
          ];

    map.dataProvider = dataProvider;

    var zoomControl = map.zoomControl;
        zoomControl.panControlEnabled = true;
        zoomControl.zoomControlEnabled = true;
        zoomControl.left = 50;
        zoomControl.top = 150;

    // map.smallMap = new AmCharts.SmallMap();
    dataProvider.images = mapObjects;
    dataProvider.lines = lines;

    map.write("mapdiv");
});