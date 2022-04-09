
$(document).ready(function(event){
	 	$('.dropdown-btn').on("click", function() {
        $('.backet-dropdown').slideToggle(400);
        $(this).toggleClass("dowm");
        
    });
 	 $('#mega-1').dcVerticalMegaMenu({
	 rowItems: '3',
	 speed: 'fast',
	 effect: 'show',
	 direction: 'right'
	 });
	$("#featured > ul").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 5000, true);
});
