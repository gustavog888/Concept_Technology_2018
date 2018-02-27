$(document).ready(function(){

	// INIT SCROLLMAGIC
	var controller = new ScrollMagic.Controller();

	//BUILD A SCENE ABOUT
	//BUILD A SCENE ABOUT
	//BUILD A SCENE ABOUT

	var Escena1 = new ScrollMagic.Scene({triggerElement: "#content_about",duration: "50%"})
	.setTween(".img1", {opacity: 1}) 
	.addIndicators({name: "ABOUT"})
	.addTo(controller);

	var Escena12 = new ScrollMagic.Scene({triggerElement: "#content_about",duration: "50%"})
	.setTween(".img2", {scale: 1.2}) 
	.addIndicators({name: "ABOUT"})
	.addTo(controller);

	var Escena12 = new ScrollMagic.Scene({triggerElement: "#content_about",duration: "50%"})
	.setTween(".text_section_1", {opacity: 1}) 
	.addIndicators({name: "ABOUT"})
	.addTo(controller);

	//END A SCENE ABOUT
	//END A SCENE ABOUT
	//END A SCENE ABOUT

	//BUILD A SCENE SERVICES
	//BUILD A SCENE SERVICES
	//BUILD A SCENE SERVICES

	var tween = TweenMax.staggerFromTo(".serv_anim1", 2, {top: -700}, {top: 0, ease: Back.easeOut}, 0.15);

	var scene2 = new ScrollMagic.Scene({triggerElement: "#second_screen", duration: "50%"})
					.setTween(tween)
					.addIndicators({name: "SERVICES"}) // add indicators (requires plugin)
					.addTo(controller);

	var tween2 = TweenMax.staggerFromTo(".serv_anim2", 2, {bottom: -700}, {bottom: 0, ease: Back.easeOut}, 0.15);

	var scene22 = new ScrollMagic.Scene({triggerElement: "#second_screen", duration: "50%"})
					.setTween(tween2)
					.addIndicators({name: "SERVICES"}) // add indicators (requires plugin)
					.addTo(controller);

	//END A SCENE SERVICES	
	//END A SCENE SERVICES	
	//END A SCENE SERVICES	







	var Escena3 = new ScrollMagic.Scene({triggerElement: "#third_screen",duration: "50%"})

	.addIndicators({name: "PROJECT"})
	.addTo(controller);

	var Escena4 = new ScrollMagic.Scene({triggerElement: "#four_screen",duration: "50%"})

	.addIndicators({name: "MISSION"})
	.addTo(controller);


	//BUILD A SCENE NEWS
	//BUILD A SCENE NEWS
	//BUILD A SCENE NEWS
	var tween5 = TweenMax.staggerFromTo("#big_circle_new", 2, {top: -1000}, {top: 0, ease: Back.easeOut}, 0.15);

	var Escena5 = new ScrollMagic.Scene({triggerElement: "#news_screen",duration: "50%"})
		.setTween(tween5)
		.addIndicators({name: "NEWS"})
		.addTo(controller);

	var tween51 = TweenMax.staggerFromTo("#circle_logo", 2, {bottom: -500}, {bottom: 0, ease: Back.easeOut}, 0.15);

	var Escena51 = new ScrollMagic.Scene({triggerElement: "#news_screen",duration: "50%"})
		.setTween(tween51)
		.addIndicators({name: "NEWS"})
		.addTo(controller);
	
					

	//BUILD A SCENE CONTACT
	//BUILD A SCENE CONTACT
	//BUILD A SCENE CONTACT

	var Escena6 = new ScrollMagic.Scene({triggerElement: "#six_screen",duration: "50%"})

	.setTween("#form_div1", {opacity: 1}) 
	.addIndicators({name: "ABOUT"})
	.addTo(controller);

	var Escena61 = new ScrollMagic.Scene({triggerElement: "#six_screen",duration: "50%"})

	.setTween("#form_div", {opacity: 1}) 
	.addIndicators({name: "ABOUT"})
	.addTo(controller);
});