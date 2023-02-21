$(document).ready(function(){
	$(".btn").click(function(){
		var attr = $(this).attr("data-li");

		$(".btn").removeClass("active");
		$(this).addClass("active");

		$(".single-card").hide();

		if(attr == "design"){
			$("." + attr).show();
		}
		else if(attr == "dev"){
			$("." + attr).show();
		}
		else if(attr == "cms"){
			$("." + attr).show();
		}
		else{
			$(".single-card").show();
		}
	});
});