const start=new Swiper('.start__swiper',{
	
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
		
	},
	initialSlide:1,
	centeredSlides:true,
	loop:true,
	slidesPerView: 2,
	autoplay:{
		delay:1000,
		desableOnInteraction:false,
	},
	speed:800,
	effect:'coverflow',
	coverflowEffect:{
		rotate:5,
		slideShadows:true,
		stretch:100,
	},
});

const recom=new Swiper('.recomendation__swiper',{
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
		
	},
	slidesPerView: 4,
});

var menuOpen=document.querySelectorAll(".header__ham");
var contentLeft=document.querySelector(".content__left");

menuOpen.forEach(function(button){
	button.addEventListener("click", toggleMenu);
	});

function toggleMenu() {

	  contentLeft.classList.toggle("showMenu");
	
 }

