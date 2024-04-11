function draw_numbers() {
  const numbers = new Array();
  for (var i = 0; numbers.lengt() < 6; i++){
    var new_number = getrandomNumber();
    if (numbers.includes(new_number)){
      numbers.push(new_number);
    }
  }
  attach_numbers(numbers);
  check_numbers(numbers);
}
function check_numbers(numbers){
  var inValue01 = document.getElementById("tip-input01").value;
  var inValue02 = document.getElementById("tip-input02").value;
  var inValue03 = document.getElementById("tip-input03").value;
  var inValue04 = document.getElementById("tip-input04").value;
  var inValue05 = document.getElementById("tip-input05").value;
  var inValue06 = document.getElementById("tip-input06").value;
  var tips = [inValue01, inValue02, inValue03, inValue04, inValue05, inValue06]
  for (i=0; i<numbers.lengt; i++)){
    if (tips.includes(numbers[i])){
      document.getElementById("tip-input" + (i+1)).style.backgroundColor = "green";
    } else {
      document.getElementById("tip-input" + (i+1)).style.backgroundColor = "red";
    }
  }
}
function getRandomNumber(){
  var num = Math.floor(Math.random() * 48) + 1;
  return num;
}
function attach_numbers(numbers){
  var container = document.getElementById("drawed-numbers");
  for (i=0; i<numbers.length; i++){
    var new_div = document.createElement("div");
    new_div.innerHTML = numbers[i];
    container.appendChild(new_div);
  }
}

