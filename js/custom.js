$(document).ready(function() {

	/*
	* Since you are using the same functions, we could combine them into an array and call one function to fire the event
	*/
	var array_names = [ 'gradus', 'nove', 'go2gether', 'vsma', 'engage', 'fortune', 'logo', 'cards', 'misc', 'selfie' ];

	/*
	* Loop through with the names and for each element,  on hover, change image
	*/
	for (var i = 0; i < array_names.length; i++) {
		$('#thumb-' + array_names[i]).on('mouseenter mouseleave', function() { 
			for (var j = 0; j < array_names.length; j++) {
				$(this).parent().find('.tags-' + array_names[j]).slideToggle(500);
			}
		});
	} 
});

/* 

$( document ).ready(function() {

	$('#thumb-gradus').mouseenter(function(){ 
		$('.tags-gradus').slideToggle(500);
	}); 
	$('#thumb-gradus').mouseleave(function(){ 
		$('.tags-gradus').slideToggle(500);
	}); 

	$('#thumb-nove').mouseenter(function(){ 
		$('.tags-nove').slideToggle(500);
	}); 
	$('#thumb-nove').mouseleave(function(){ 
		$('.tags-nove').slideToggle(500);
	}); 

	$('#thumb-go2gether').mouseenter(function(){ 
		$('.tags-go2gether').slideToggle(500);
	}); 
	$('#thumb-go2gether').mouseleave(function(){ 
		$('.tags-go2gether').slideToggle(500);
	}); 

	$('#thumb-vsma').mouseenter(function(){ 
		$('.tags-vsma').slideToggle(500);
	}); 
	$('#thumb-vsma').mouseleave(function(){ 
		$('.tags-vsma').slideToggle(500);
	}); 

	$('#thumb-engage').mouseenter(function(){ 
		$('.tags-engage').slideToggle(500);
	}); 
	$('#thumb-engage').mouseleave(function(){ 
		$('.tags-engage').slideToggle(500);
	}); 

	$('#thumb-fortune').mouseenter(function(){ 
		$('.tags-fortune').slideToggle(500);
	}); 
	$('#thumb-fortune').mouseleave(function(){ 
		$('.tags-fortune').slideToggle(500);
	}); 

	$('#thumb-logo').mouseenter(function(){ 
		$('.tags-logo').slideToggle(500);
	}); 
	$('#thumb-logo').mouseleave(function(){ 
		$('.tags-logo').slideToggle(500);
	}); 	

	$('#thumb-cards').mouseenter(function(){ 
		$('.tags-cards').slideToggle(500);
	}); 
	$('#thumb-cards').mouseleave(function(){ 
		$('.tags-cards').slideToggle(500);
	}); 

	$('#thumb-misc').mouseenter(function(){ 
		$('.tags-misc').slideToggle(500);
	}); 
	$('#thumb-misc').mouseleave(function(){ 
		$('.tags-misc').slideToggle(500);
	}); 	

	$('#thumb-selfie').mouseenter(function(){ 
		$('.tags-selfie').slideToggle(500);
	}); 
	$('#thumb-selfie').mouseleave(function(){ 
		$('.tags-selfie').slideToggle(500);
	}); 	

});

*/