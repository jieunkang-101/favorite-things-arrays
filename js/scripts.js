$(document).ready(function() {
  $("form#favform").submit(function(event) {
    var fav1 = $("input#fav1").val();
    console.log(fav1)
    
    var fav2 = $("#fav2").val();
    console.log(fav2)
    
    var fav3 = $("#fav3").val();
    console.log(fav3)

    var fav4 = $("#fav4").val();
    console.log(fav4)

    var origthings = [fav1, fav2, fav3, fav4];
    console.log(origthings)
    var changeOrigthings = [];
    changeOrigthings.push(origthings[1]);
    changeOrigthings.push(origthings[0]);
    changeOrigthings.push(origthings[2]);
    console.log(changeOrigthings);
    
    $("#favline").append("<li>" + changeOrigthings[0] + "</li>");
    $("#favline").append("<li>" + changeOrigthings[1] + "</li>");
    $("#favline").append("<li>" + changeOrigthings[2] + "</li>");

    event.preventDefault();
  });
});