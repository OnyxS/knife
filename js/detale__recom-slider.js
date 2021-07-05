const recom=new Swiper('.recomendation__swiper',{
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
		
	},
	slidesPerView: 3,
	slidesPerGroup:3,
	breakpoints:{
		992:{
			slidesPerView: 4,
	slidesPerGroup:4,
		}
	}
});
