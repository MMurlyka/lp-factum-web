$(window).ready(function() {
	$('.slider').slick({
		dots: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false
			}
		}]
	});


	$('form').formValidation({
		framework: 'bootstrap',
		icon: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		err: {
			container: 'popover'
		}
	});

	 $(".in-phone").mask("+7 (999) 999-99-99");

	$(".in-phone").keydown(function() {
		$('form').formValidation('updateStatus', $(this), 'NOT_VALIDATED')
       .formValidation('validateField', $(this));
	});


	 $('form').ajaxForm({
	 	action: "mail.php",

		success: function(responseText, statusText, xhr, $form) {
			if(statusText == 'success') {
				$form.find('button').text('Заявка отправлена');
			}

			if($form.data('popup')) {
				$.fancybox.close();
			}
			
			$form.trigger('reset');
		}
	});

/*
	$.magnificPopup.open({
		items: {
			src: "#form"
		},
		type: 'inline'

		// You may add options here, they're exactly the same as for $.fn.magnificPopup call
		// Note that some settings that rely on click event (like disableOn or midClick) will not work here
	}, 0);
*/
	$('.open-popup').click(function() {
		$('.fancy').click();
	});

	$('.fancy').fancybox({
		padding: 0,
		helpers: {
			overlay: {
				locked: false // отключаем блокировку overlay
			}
		}
	});

	$('.gallery-link').fancybox({
		helpers: {
			overlay: {
				locked: false // отключаем блокировку overlay
			}
		}
	});

	$('.Nav_container a, .Nav_collapse a').click(function() {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 1100 );
		return false;
	});

	if(!isMobile.any) {
		$video = $(
			'<video class="Main_bg-video" width="100%" height="auto" preload="auto" autoplay="autoplay" loop="loop" poster="images/bg-video.jpg">' +
			'	<source src="video-homepage.mp4" type="video/mp4"></source>' +
			'	<source src="video-homepage.webm" type="video/webm"></source>' +
			'	<source src="video-homepage.ogg" type="video/ogg"></source>' +
			'</video>' +
			'<div class="Main_filter-video">&nbsp;</div>'
			);
		$('.Main').append($video);
	}
});


