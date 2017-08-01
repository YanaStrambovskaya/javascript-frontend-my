
//================================================================//
//*********** error.js
//*********** © Aida Drogan - #BlondieCode
//*********** Функционал окна с сообщением об ошибке (<div class="error-holder">)
//*********** Присутствует на всех страницах админ-панели
//=========== ВЫЗОВ
//*********** showError(text, top) - сообщеие об ошибке
//*********** showSuccess(text, top) - сообщеие об успешном завершении
//=========== ПАРАМЕТРЫ
//*********** text - сообщение в окне
//*********** top - отступ от верха страницы (px)
//================================================================//

//==============================================================//
//*********** hideError - скрыть сообщение об ошибке ***********//
//==============================================================//

function ShowError (text, top){
    alert('htrht');
    var $errorHolder = $('.error-holder')
    $errorHolder.removeClass('error-holder-success').css('top', top + 'px');
    $errorHolder.find('span').text(text);

    $errorHolder.fadeIn();
};


function ShowSuccess (text, top){
    var $errorHolder = $('.error-holder')
    $errorHolder.addClass('error-holder-success').css('top', top + 'px');
    $errorHolder.find('span').text(text);

    $errorHolder.fadeIn();
};

$('.b-login').on('click', ShowError('some', 50));