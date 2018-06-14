$('nav ul li a').click(function(e) {
	e.preventDefault();

	href = $(this).attr('href');

	$('#content').addClass('open');

	$('nav ul li').removeClass('active');
	$(this).parent().addClass('active');

	$('.content').hide();
	$('.content.'+ href).fadeIn();
});