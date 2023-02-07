
function aa(){
const Bug = document.querySelector('header .header-container02 .menu-trigger')
const Cl = document.querySelector('.popmenu .closeBtn');
const Menu = document.querySelector('.popmenu');
console.log(Cl);

Bug.addEventListener('click',function(){
  Menu.style = "display:block;"
})

Cl.addEventListener('click', function () {
    Menu.style = "display:none;"
});
};

window.onload = aa;
