//SCRIPT DEVELOPER BY GUSTAVO GUAITA  NOV 2016
//GUAITA1988@GMAIL.COM

/*$(window).on('load', function() { // makes sure the whole site is loaded 
            $('#preloader').delay(3000).slideToggle(2000);
            $('#logo_pp').hide(); // will fade out the white DIV that covers the website.
            $('#logo_pp').show(2000);
            $('.loader').delay(1000).fadeOut(1500); // will first fade out the loading animation  
        }); */

$(document).ready(function()
{
	tabs();
	var height = $(window).height();
	ini();
	services();
	var scrollTop = $(this).scrollTop();
	var $win =$(window);
	$win.on('scroll', function(){
		console.log($win.scrollTop());
	}); //MEDIR SCROLLTOP POR CONSOLA



	//VALORES INICIALES DEL WEBSITE

	function ini() {
		var text_1a = $(".text_center").height();
		var text_1b = $('#tabs').height();


		$("section#cover1").css({
			"height": height +"px"
		})

		$("section#content").css({
			"height": height +"px"
		});

		$("section#second_screen").css({
			"height": height +"px"
		});

		$("section#third_screen").css({
			"height": height +"px"
		});

		$("section#four_screen").css({
			"height": height +"px"
		});

		$("section#five_screen").css({
			"height": height +"px"
		});

		$("section#news_screen").css({
			"height": height +"px"
		});

		$("section#six_screen").css({
			"height": height +"px"
		});

		$(".text_center").css({
			"margin-top": (height/2)-(text_1a + text_1b)/2+"px"
		});

		$("#circle").css({
			"margin": (height/2)-150 +"px auto"
		});

		 var height_form = $(".form").height();
		$("#form_div").css({
			"margin": (height_form/2)-100+"px auto"
		});

		$("#form_div1").css({
			"margin": (height_form/2)-100+"px auto"
		});
		
	}

	
	// SCRIPT TABS CULTURE NY ELECTRIC SERVICES
	function tabs(){
		$("#contenido div").hide();
        $("#tab li:first").attr("id","current");
        $("#contenido div:first").fadeIn();
 
    $('#tab a').click(function(e) {
        e.preventDefault();
        $("#contenido div").hide();
        $("#tab li").attr("id","");
        $(this).parent().attr("id","current");
        $('#' + $(this).attr('title')).fadeIn();
    });
	}




	// BUTTOM SERVICES
	function services() {
		if (true) {}
		$(".circle_small").hover(function(){
			$(this).css({
				"box-shadow": "0 0 25px white"

			});
			$(this).find('img').css({
				"top":"75px"
			});
			$(this).find('p').css({
				"margin": "20px auto"
			});
		},function(){
			$(this).css({
				"box-shadow": "0 0 25px black"
			});
			$(this).find('img').css({
				"top":"25px"
			});
			$(this).find('p').css({
				"margin": "135px auto"
			})

		});
	}


	

	// 	SCRIPT PARA DESPLAZAR A CADA UNA DE LAS SECCIONES 
	$('.nav').click(function(e){
			e.preventDefault();
		    enlace  = $(this).attr('href');
		    $('html, body').animate({
		        scrollTop: $(enlace).offset().top
		    }, 1000);
			});


	//


		/*$img.waypoint(function (direction) {
		if (direction == 'down') 
		{
			$img.addClass('js_img_animate');
			$text1.css({
			"right": 400 +"px"
		});
			

		}else 
		{
			$img.removeClass('js_img_animate');
			$text1.removeClass('text_right');
		}

		}, { offset:'50%'});*/








		// --------------SCROLL FUNCTION --------------------

	$(window).scroll(function()
	{
		// PARALLAX EFECT
		var scrollTop = $(this).scrollTop();
		var pix = scrollTop / 80;
		var height = $(window).height();
		var height2 = $(window).height()-80;
		menu_stick();

		if (scrollTop < height) 
		{
			$("section#background").css({
				"background-position": "center -" + pix * 20 + "px"
			});

		}

		// MENU STICK
		
		function menu_stick() {
			if (scrollTop > height2 ){
			$("section#down").css({
				"position": "fixed", "top": "0"
			})
		} else {
			$("section#down").css({
				"position": "relative"
			})
		}
		}


		var container_pos = $("section#content").position();  //  posicion desde el top hasta el inicio del contenedor
		var container_height = $("section#content").height();	// alto del contenedor
		var half_container = container_height/2; // alto del contenedor dividivo entre 2


		if (scrollTop >= (container_pos.top - half_container)) {
			$("section#content .text_section_1").addClass("slide");
		}else{
			$("section#content .text_section_1").removeClass("slide");
		}



	});





	


});