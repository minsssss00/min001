$('body').prepend('<header>');
$('body').append('<div class="footerC">');

$('header').load('./header.html header>div', head);
$('.footerC').load('./header.html footer', footer);


let idx = localStorage.idx || 0;

function head() {

  // console.log($('header .header-container02 .menu01 ul li').eq(idx).find('a'));
  //   $('header .header-container02 .menu01 ul li').eq(idx).find('a').addClass('active');


  $('header .header-container02 .menu01 ul li').click(function () {
    let idx = $(this).index();

    localStorage.idx = idx;

  })

  const Mo = document.querySelector('.header-container02 .mo-menu')
  const Menu = document.querySelector('.popmenu')
  Mo.addEventListener('click', function () {
    Menu.style = "display:block"
  });





}

function footer() {
  const acc = document.querySelector('.aco-cs-box .cs')
  const P = document.querySelector('.panel')

  acc.addEventListener('click', function () {
    P.classList.toggle('on');

  });


}

