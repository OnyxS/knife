const start=new Swiper('.start__swiper',{
	
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
		
	},
	effect:'coverflow',
	coverflowEffect:{
		rotate:20,
		stretch:50,
		slideShadows:true,


	},
	
	slidesPerView: 3,
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

