
$(document).ready(function () {

    $('body').on('click', '.more', function () {

        var button = $(this);

        //------------- контейнер для вставки статей
        var container = $('.article-holder');

        //------------- ссылка на бэкэнд для запроса "Больше статей"
        var postLink = '/';

        if (!button.hasClass('working')){
            button.addClass('working');

            //------------- атрибуты для передачи на бэкэнд
            var data = {};
            data.action = 'more';

            //------------- ajax-запрос
            $.ajax({
                url: postLink,
                type: 'POST',
                dataType: 'json',
                data: data,
                success: function(data) {
                },
                error: function(data){
                    button.removeClass('working');
                }
            }).done(function(data){
                    //---------------- результаты с бэкэнда
                    //---------------- data.html - массив статей для вставки
                    //---------------- data.last - нужна ли кнопка Больше
                    container.append(data.html);
                    if (data.last){
                        button.removeClass('working');
                    } else {
                        button.remove();
                    }
                });
        }
    });
});

$(window).load(function(){
	var windowHeight = $(document).height(),
		steps = 4,
		speed = windowHeight / steps;
		$('.scrolltop').on('click', function(){
			$('html, body').animate({
				scrollTop: 0
			}, speed);
		});
});