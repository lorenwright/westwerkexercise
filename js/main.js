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
	// Create json variable
	var employeeList = [
    {
        "name": {
            "first": "John",
            "last": "Smith"
        },
        "position": "Owner/CEO",
        "image": "m-1.jpg"
    },
    {
        "name": {
            "first": "Jane",
            "last": "Smith"
        },
        "position": "Owner/CFO",
        "image": "f-1.jpg"
    },
    {
        "name": {
            "first": "Eric",
            "last": "O'Brien"
        },
        "position": "Tech Lead",
        "image": "m-2.jpg"
    },
    {
        "name": {
            "first": "Alexis",
            "last": "Hughes"
        },
        "position": "Lead Developer",
        "image": "f-2.jpg"
    },
    {
        "name": {
            "first": "Sally",
            "last": "Johnson"
        },
        "position": "Head of Operations",
        "image": "f-3.jpg"
    },
    {
        "name": {
            "first": "Andrew",
            "last": "Moore"
        },
        "position": "Developer",
        "image": "m-3.jpg"
    },
    {
        "name": {
            "first": "Robert",
            "last": "Macklin"
        },
        "position": "QA",
        "image": "m-4.jpg"
    },
    {
        "name": {
            "first": "Christie",
            "last": "Jones"
        },
        "position": "Designer",
        "image": "f-4.jpg"
    },
    {
        "name": {
            "first": "Ray",
            "last": "Smith"
        },
        "position": "Lead Strategist",
        "image": "m-5.jpg"
    },
    {
        "name": {
            "first": "Greg",
            "last": "Johnson"
        },
        "position": "Designer",
        "image": "m-6.jpg"
    },
    {
        "name": {
            "first": "Ron",
            "last": "Gregson"
        },
        "position": "Designer",
        "image": "m-7.jpg"
    },
    {
        "name": {
            "first": "Alex",
            "last": "Knight"
        },
        "position": "Owner/CEO",
        "image": "f-5.jpg"
    },
    {
        "name": {
            "first": "Beth",
            "last": "Lowe"
        },
        "position": "Owner/CEO",
        "image": "f-6.jpg"
    }
];
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