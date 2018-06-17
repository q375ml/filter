$(function(){
	$('.datebox .title').on('click',function(){
		$('.datemobile').slideToggle();
		$(this).find('i').toggleClass('fa-minus').toggleClass('fa-plus');
		
	})

	$('.categoriesbox .title').on('click',function(){
		$('.categoriesmobile').slideToggle();
		$(this).find('i').toggleClass('fa-minus').toggleClass('fa-plus');
	})
	
});

