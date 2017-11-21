$(document).ready(function(){
	// $('.sub-menu').hide();


	$('li.sidebar > a').click(function(el){
		el.preventDefault();
		$(this).closest('li').addClass('submenu-open').siblings().removeClass('submenu-open');
		$('body').addClass('submenu-is-open');
	});
	$('ul.sub-menu a').click(function() {
		$('.submenu-open').removeClass('submenu-open');
		$('body').removeClass('submenu-is-open');
	});
	$('ul.sub-menu li').click(function() {
		//$('ul.sub-menu li').removeClass('active');
		$(this).addClass('active');
	});

	$('.navbar li.sidebar:first-child').click(function(el){
		$('body').removeClass('submenu-is-open');
	});
});