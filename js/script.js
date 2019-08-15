$(document).ready(function(){
//
// const number1 = parseInt(prompt("First number:"));
// const number2 = parseInt(prompt("Second number:"));
// const number3 = parseInt(prompt("Third number:"));

//+,-,*,/
function handleClick(callback, operation) {
  var number1 = parseFloat($("#number1").val());
  var number2 = parseFloat($("#number2").val());
  var result = callback(number1, number2);
  $("#"+operation).html(result.toFixed(2)); //<#p>

}
function addition(number1, number2){return number1 + number2; };

function subtraction(number1, number2) { return number1 - number2; };

function multiplication(number1, number2) { return number1 * number2; };

function division(number1, number2) { return number1 / number2; };

// function threeTimes(number1, number2, number3)
// { return number1 * number2 * number3; }
$("#additionButton").click(function(){
  handleClick(addition,"addition");
});
$("#subtractButton").click(function(){
  handleClick(subtraction,"subtraction");
});

$("#multiplicationButton").click(function(){
    handleClick(multiplication,"multiplication");
});

$("#divideButton").click(function(){
    handleClick(division,"division");
});

// const subtraction = alert("Please two numbers to subtract:")
// let subtractionResult = alert("Hi inputtedName, the difference is " + subtractionResult(number1 - number2) + ", have a great day!");
//
// const multiplication = alert("Please enter two numbers to multiply:")
// let multiplicationResult = alert("Hi " + inputtedName + ", the difference is " + multiplicationResult((number1 * number2 *) + number3) + ", have a great day!");
//
// const number3;
// const threeTimes = alert("Three numbers multiplied are "  + (number1, number2, number3);


// function add(number1, number2) { return number1 + number2; };
//
// // front end display
// $(function(){
//   //jQuery().click(functon()
//   $("p").(functon()
//   {
//     $(".subtraction").function(threeTimes){  return result;}
//     $(".threeTimes").function(threeTimes){ return result;}
//     alert("Result is: " + result);
//   });
// });
});
