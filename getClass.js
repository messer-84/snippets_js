$(function(){
	$('body').append('<ul class="listClass"></ul>');
	$('.listClass').css({
	width:"780px",
	padding: "50px",
	margin: "20px auto",
	background: "#fff"
});
	$('*[class]').each(function(){
		nameClass = $(this).attr("class");
		$('.listClass').append('<li> .'+nameClass+'</li>')
	});
	});
