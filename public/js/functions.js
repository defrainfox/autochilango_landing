(function( $ ) {
	$(document).ready(function(){

        
        //ITEMS
        $('.item').on('click',function(){
        	var image = $(this).attr('tag');
        	var text = $('span',this).text();
        	$('.item').removeClass('active');
        	$(this).addClass('active');
        	$('.content').html(text);
        	$('#screen').css({
        		'background':'url('+image+')',
        		'background-size':'cover'
        	});
        })
        


	})
})( jQuery );