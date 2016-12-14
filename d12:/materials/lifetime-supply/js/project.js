$("button").on("click", function() {

var age = $("#age").val();
var maxAge = $("#max-age").val();
var getKindOfDrink = $("#item").val();
var getNumberDays = $("#num-per-day").val();
var result = (maxAge - age) * 365 * getNumberDays;

$("#solution").text(result);
$("#drink").text(getKindOfDrink);
});

