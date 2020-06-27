
	//drop down mobile toggle
	jQuery('#mobile-demo .menu-item-has-children a').on('click', function(){
		
		jQuery('.sub-menu').removeClass('d-block');		
		jQuery(this).siblings('.sub-menu').toggleClass('d-block');		
		
	});

	