$(window).load(function(){
	
	var maxImageHeight=0;
	var imageHeight=0;
	var productHeight=0;
	var maxProductHeight=0;
	var maxWrapperHeight =0;
	var wrapperHeight = 0;
	var imageHeight2 = 0;
	var amountOfPadding = 0;

	// Find the height of the tallest image wrapper
	$('.home-image-wrapper').each(function(){
		wrapperHeight = $(this).height();
		if(wrapperHeight > maxWrapperHeight){
			maxWrapperHeight = wrapperHeight;
		}
	});
	
	// Find the height of the tallest product description
	$('.product-title').each(function(){
		productHeight = $(this).height();
		if(productHeight > maxProductHeight){
			maxProductHeight = productHeight;	
		}
	})

	// Find the height of the tallest image
	$('img').each(function(){
		imageHeight = $(this).height();
		if(imageHeight > maxImageHeight){
			maxImageHeight = imageHeight;
		}
	})

	// Set the heights of all li elements holding pictures to the 
	// height of the tallest li element
	$('.first').each(function(){
		$('.first').height((maxImageHeight+maxProductHeight));
	})

	// Calculate the margin needed for each li element 
	//to line up the product descriptions
	$('img').each(function(){
		imageHeight2 =$(this).height();
		amountOfPadding = ((maxWrapperHeight+maxProductHeight)-(imageHeight2+maxProductHeight))+'px';
		$(this).css('margin-bottom', amountOfPadding);	
	})
})