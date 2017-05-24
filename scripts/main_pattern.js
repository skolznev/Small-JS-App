//Логирование
var passTeam1 = "1";
var passTeam2 = "2";
var passTeam3 = "3";
var passTeam4 = "4";
var passTeam5 = "5";
var passTeam6 = "6";
var passTeam7 = "7";
var passTeam8 = "8";
var passTeam9 = "9";
var passTeam10 = "10";
var passTeam11 = "11";
var passTeam12 = "12";
var passTeam13 = "13";
var passTeam14 = "14";
var passTeam15 = "15";
var passTeam16 = "16";
var passTeam17 = "17";
var passTeam18 = "18";
var passTeam19 = "19";
var passTeam20 = "20";
var passTeam21 = "21";
var passTeam22 = "22";
var passTeam23 = "23";
var passTeam24 = "24";
var passTeam25 = "25";
var passTeam26 = "26";
var passTeam27 = "27";
var passTeam28 = "28";
var passTeam29 = "29";
var passTeam30 = "30";
var passTeam31 = "31";
var passTeam32 = "32";
var pass = prompt("Введите пароль вашей команды:", "");

if (pass == '')  {
  alert('Поле пароля не должно быть пустым');
} else if (
	(window.location.toString().indexOf('1.html')>0) && (pass.toLowerCase() == passTeam1) ||
	(window.location.toString().indexOf('2.html')>0) && (pass.toLowerCase() == passTeam2) ||
	(window.location.toString().indexOf('3.html')>0) && (pass.toLowerCase() == passTeam3) ||
	(window.location.toString().indexOf('4.html')>0) && (pass.toLowerCase() == passTeam4) ||
	(window.location.toString().indexOf('5.html')>0) && (pass.toLowerCase() == passTeam5) ||
	(window.location.toString().indexOf('6.html')>0) && (pass.toLowerCase() == passTeam6) ||
	(window.location.toString().indexOf('7.html')>0) && (pass.toLowerCase() == passTeam7) ||
	(window.location.toString().indexOf('8.html')>0) && (pass.toLowerCase() == passTeam8) ||
	(window.location.toString().indexOf('9.html')>0) && (pass.toLowerCase() == passTeam9) ||
	(window.location.toString().indexOf('10.html')>0) && (pass.toLowerCase() == passTeam10) ||
	(window.location.toString().indexOf('11.html')>0) && (pass.toLowerCase() == passTeam11) ||
	(window.location.toString().indexOf('12.html')>0) && (pass.toLowerCase() == passTeam12) ||
	(window.location.toString().indexOf('13.html')>0) && (pass.toLowerCase() == passTeam13) ||
	(window.location.toString().indexOf('14.html')>0) && (pass.toLowerCase() == passTeam14) ||
	(window.location.toString().indexOf('15.html')>0) && (pass.toLowerCase() == passTeam15) ||
	(window.location.toString().indexOf('16.html')>0) && (pass.toLowerCase() == passTeam16) ||
	(window.location.toString().indexOf('17.html')>0) && (pass.toLowerCase() == passTeam17) ||
	(window.location.toString().indexOf('18.html')>0) && (pass.toLowerCase() == passTeam18) ||
	(window.location.toString().indexOf('19.html')>0) && (pass.toLowerCase() == passTeam19) ||
	(window.location.toString().indexOf('20.html')>0) && (pass.toLowerCase() == passTeam20) ||
	(window.location.toString().indexOf('21.html')>0) && (pass.toLowerCase() == passTeam21) ||
	(window.location.toString().indexOf('22.html')>0) && (pass.toLowerCase() == passTeam22) ||
	(window.location.toString().indexOf('23.html')>0) && (pass.toLowerCase() == passTeam23) ||
	(window.location.toString().indexOf('24.html')>0) && (pass.toLowerCase() == passTeam24) ||
	(window.location.toString().indexOf('25.html')>0) && (pass.toLowerCase() == passTeam25) ||
	(window.location.toString().indexOf('26.html')>0) && (pass.toLowerCase() == passTeam26) ||
	(window.location.toString().indexOf('27.html')>0) && (pass.toLowerCase() == passTeam27) ||
	(window.location.toString().indexOf('28.html')>0) && (pass.toLowerCase() == passTeam28) ||
	(window.location.toString().indexOf('29.html')>0) && (pass.toLowerCase() == passTeam29) ||
	(window.location.toString().indexOf('30.html')>0) && (pass.toLowerCase() == passTeam30) ||
	(window.location.toString().indexOf('31.html')>0) && (pass.toLowerCase() == passTeam31) ||
	(window.location.toString().indexOf('32.html')>0) && (pass.toLowerCase() == passTeam32)
	) {
    document.getElementById('skm_LockPane').className = 'LockOff';
    //Вызов модального окна помощника
	$(document).ready(function() {
	  $("#helperTask").modal('show');
	});
	//Счетчик монет
	var valueCoin = document.getElementById('count_balance').innerHTML;
	var value = document.getElementById('count_balance');
	count = 0;
	var updateTimer = function() {
	  if (count == valueCoin) {
	    return;
	  } else {
	    value.innerHTML = count += 1;
	  }
	};
	setInterval(updateTimer, 8);
} else  {
      alert('Пароль введен с ошибкой, попробуйте еще раз');
}





