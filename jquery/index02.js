$('body').prepend('<header>');


$('header').load('./basic-header.html header>div',head);

function head(){
    $('header a').click(function(){
        alert('명령')
    })
}