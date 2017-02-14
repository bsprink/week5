//my scripts

$(document).scroll(function(){
	console.log(
			$(document).scrollTop()
		);

	$("#frontClouds").css("left",String($(document).scrollTop() -70) + "px" );
	$("#middleClouds").css("left",String($(document).scrollTop() * .5) + "px" );
	$("#backClouds").css("left",String($(document).scrollTop() * .2) + "px" );
	$("#me").css("left",String($(document).scrollTop() * .2) + "px" );
});

$(document).mousemove(function(p){
	console.log(p.pageX + "," +p.pageY);
	if(p.pageX > 100 && p.pageX < 900){
		$("#frontClouds").css("left",String(p.pageX * -.1) + "px" );
		$("#middleClouds").css("left",String(p.pageX * .0 ) + "px" );
		$("#backClouds").css("left",String(p.pageX * .0) + "px" );
		$("#me").css("left",String(p.pageX * .100) + "px" );
	}
});