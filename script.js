$(".press").click(function(){
    var nombre2= $(".nombre").val();
    var age2=$(".age").val();
    var food2=$(".food").val();
    var times2=$(".times").val();
    var result= 31*52*times2;
 $(".results").append("Hello "+nombre2+ " I hear you are " +age2 + " years old and love " +food2+ " and that you eat it " +times2+" times a week."+ " By the time 2050 you will have eaten " +food2+" "+ result + " times.");
 
console.log(result);
});