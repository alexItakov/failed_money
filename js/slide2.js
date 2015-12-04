$(document).ready(function(){ 

	$('.bxslider li').click(function(){ 

		var targ1 = $(this).index();
		var targ2 = $('.slider_box').eq(targ1);

		$('.slider_box').slideUp();
		$(targ2).slideDown();



	}); 

	jQuery('.slider_box').eq(6).slideDown();
	 //сюрприз


	 setTimeout(function () {

	 	alert("Что то пошло не так. =\ Возможно вы кому-то не доплатили??, чтобы все  нормально работало....;)");

	 }, 9000); 
	 




	// jQuery('.slider_block_massive').click(function() {
	// 	jQuery('.slider_block_massive').css("border", "3px solid orange");

	// });



	// /*Добавление удаление класса на фоне Черного Опасити*/	
	jQuery('.slider_block_1, .slider_block_2, .slider_block_3, .slider_block_4, .slider_block_5, .slider_block').prepend ('<div class="black_block"></div>');
	jQuery('.slider_block_1').find('.black_block').css('display', 'none');



	jQuery('.bxslider li').click(function() {

		jQuery('.bxslider li').find('.black_block').css('display', 'block');

		jQuery(this).find('.black_block').css('display', 'none');

	});

	/*Добавление удаление класса на фоне Черного Опасити*/








	// Движок для ТАбоВ..........\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


	jQuery('.cont_wrap').hide();
	jQuery('.cont_wrap:first').show();
	jQuery('.tabs li:first').addClass('active_tab');

	jQuery('.tabs li').click(function(){
		jQuery('.tabs li').removeClass('active_tab');
		jQuery(this).addClass('active_tab');
		jQuery('.cont_wrap').hide();


		var selectTab =  jQuery(this).find('a').attr('href');
		jQuery(selectTab).fadeIn();

		


	});



    // Движок для ТАбоВ..........\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



    jQuery('.cont_wrap1').hide();
    jQuery('.cont_wrap1:first').show();
    jQuery('.tabs2 li:first').addClass('active_tab');

    jQuery('.tabs2 li').click(function(){
    	jQuery('.tabs2 li').removeClass('active_tab');
    	jQuery(this).addClass('active_tab');
    	jQuery('.cont_wrap1').hide();


    	var selectTab =  jQuery(this).find('a').attr('href');
    	jQuery(selectTab).fadeIn();






    });











	// jQuery('.slider_block_massive').click(function() {
	// 	jQuery('.slider_block_massive').removeClass('black');

	// });




}); 
