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

