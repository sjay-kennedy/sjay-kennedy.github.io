
$( "#add" ).click(function(e) {

	e.preventDefault();


	var xNum = $("#calc-form #x").val();
	var yNum = $("#calc-form #y").val();


	var xyAdd = parseInt(xNum) + parseInt(yNum);

	if(isNaN(xyAdd)){

        $("#error-show").css("display" , "block");
        $("#answer-show").css("display" , "none");

    } else {

    	$("#answer-show").css("display" , "block");
    	$("#error-show").css("display" , "none");
    	$("#operator").text("plus");
    	$("#answer").text(xyAdd);

    }

	console.log("x " + xNum );
	console.log("y " + yNum );
	console.log("xyAdd " + xyAdd)

	

});

$( "#minus" ).click(function(e) {

	e.preventDefault();

	var xNum = $("#calc-form #x").val();
	var yNum = $("#calc-form #y").val();


	var xySub = parseInt(xNum) - parseInt(yNum);

	if(isNaN(xySub)){

        $("#error-show").css("display" , "block");
        $("#answer-show").css("display" , "none");

    } else {

    	$("#answer-show").css("display" , "block");
    	$("#error-show").css("display" , "none");
    	$("#operator").text("minus");
    	$("#answer").text(xySub);

    }

	console.log("x " + xNum );
	console.log("y " + yNum );
	console.log("xySub " + xySub)

	

});

