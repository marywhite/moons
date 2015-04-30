
$(document).ready(function() {
	$('.day').click(function(){
		$(this).children().toggleClass('hidden');
	});

	$('.heart').click(function(){
		$('h5').addClass('hidden');
		$('.moon').removeClass('hidden');
	});

    setInterval(function() {
        $('.terminal').children().toggleClass('cya');
    }, 800);
});


