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