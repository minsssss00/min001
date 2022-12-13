$('body').prepend('<header>');
$('body').append('<footer>');


$('header').load('./basic-header.html header>div',head);
$('footer').load('./basic-header.html footer>div');

let idx = localStorage.idx || 0;


function head(){

  console.log($('header .header-container02 .menu01 ul li').eq(idx).find('a'));
    $('header .header-container02 .menu01 ul li').eq(idx).find('a').addClass('active');


    $('header .header-container02 .menu01 ul li').click(function(){
        let idx = $(this).index();
        
        localStorage.idx = idx;
        
    })
}