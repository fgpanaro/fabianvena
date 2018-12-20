
$(document).on('click touch', '#menuButton', function() {
	$('#menuButton').toggleClass("change");
	if(!$('#hidden-navbar').hasClass('show')) {
		$('#hidden-navbar').animate({width:'50%'},200).addClass('show');
	}else{
		$('#hidden-navbar').animate({width:'0%'},200).removeClass('show');
	}
});