$('body').prepend('<header>');
$('body').append('<footer>');


$('header').load('./aaa.html header>div',head);
$('footer').load('./aaa.html footer>div');

function head(){
    $('header a').click(function(){
        alert('명령')
    })
}