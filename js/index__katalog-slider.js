const katalog=new Swiper('.katalog__slider',{
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
		
	},
	
	spaceBetween:15,
	slidesPerView: 2,
	slidesPerGroup:2,
	breakpoints:{
		576:{
			slidesPerView: 3,
			slidesPerGroup:3,
		},
		767:{
			slidesPerView: 5,
		slidesPerGroup:5
		},
	}
});