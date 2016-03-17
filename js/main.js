$(function () {
    /******  Our Values Accordion Panels *****/
	//Accordian
	$('.valuesAccordion').each(function () {
	    var $valuesAccordian = $(this);
	    $valuesAccordian.find('.valuesTitle').on('click', function () {
            $(this).parent().find(".valuesTitle").removeClass('open close');
            $(this).removeClass('open').addClass('close');
	        $valuesAccordian.find('.valuesText').slideUp();
	        if (!$(this).next().is(':visible')) {
                $(this).removeClass('close').addClass('open');
	            $(this).next().slideDown();
	        }
	    });
	});
	
	/******  Mobile Navigation *****/
	$(".mobile-nav-button").on("click", function(){
		var toggleWidth = $("nav ul").width() == 0 ? "200px" : "0";
		$("nav ul").toggleClass("active-nav").animate({ width: toggleWidth }, "fast");
	});
	
	/******  Load Employees *****/
	
	function getJson(url) {
		 return JSON.parse($.ajax({
		 type: 'GET',
		 url: url,
		 dataType: 'json',
		 global: false,
		 async:false,
		 success: function(data) {
			 return data;
		 }
	 }).responseText);
	}
 
	var employeeList = getJson('js/Employees.json');
	
	// create function that will load employees
	$(function () {
		$.each(employeeList, function (i, employee) {
			var list = "<div class='singleEmployee hidden'><img src='img/" + employee.image + "' />" + "<div class='overlay'><span class='name'>" + employee.name.first + " " + employee.name.last + "</span>" + "<br>" + "<span class='position'>" + employee.position + "</span></div></div>";
			$('.employeeContainer').append(list);
		});
		function initialLoad(){
			$(".employeeContainer .hidden").slice(0,8).removeClass("hidden");
		}
		initialLoad();
		function loadMore(){
			$("#btnLoadMore").hide();
			$(".employeeContainer .hidden").slice(0,8).removeClass("hidden");
		}
	
		$("#btnLoadMore").on("click",loadMore);
	
	});
	
});