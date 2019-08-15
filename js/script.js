$(document).ready(function(){
//
// const number1 = parseInt(prompt("First number:"));
// const number2 = parseInt(prompt("Second number:"));
// const number3 = parseInt(prompt("Third number:"));

function addition(number1, number2){return number1 + number2; };

function subtraction(number1, number2) { return number1 - number2; };

function multiplication(number1, number2) { return number1 * number2; };

// function multiplication(number1, number2) { return number1 * number2; };

// function threeTimes(number1, number2, number3)
// { return number1 * number2 * number3; }
$("#additionButton").click(function(){
    var number1 = parseFloat($("#number1").val());
    var number2 = parseFloat($("#number2").val());

    let additionResult = addition(number1, number2);

    $("#addition").html(additionResult.toFixed(2));
});
$("#subtractButton").click(function(){
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());

    let subtractionResult = subtraction(number1, number2);

    $("#subtraction").html(subtractionResult);
});

$("#multiplicationButton").click(function(){
  var number1 = parseInt($("#number1").val());
  var number2 = parseInt($("#number2").val());

  let multiplicationResult = multiplication(number1, number2);

  $("#multiplication").html(multiplicationResult);
});

$("#divideButton").click(function(){
  var number1 = parseInt($("#number1").val());
  var number2 = parseInt($("#number2").val());

  let divisionResult = (number1/number2);

  $("#division").html(divisionResult);
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
