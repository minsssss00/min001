

const elA=document.querySelectorAll('main .a');
const elS=document.querySelector('.scroll-btn');
const elC=document.querySelector('.main-container02')

window.addEventListener('scroll',contents);

function contents(){
    elA.forEach(function(a,key){
        if(window.pageYOffset + elA[key].getBoundingClientRect().top - (window.innerHeight*0.8)< window.pageYOffset){
            elA[key].classList.add('active');
        }
    });


    if(elC.offsetTop - (window.innerHeight*0.4)< window.pageYOffset){
        elS.style="opacity:1";
    }else if(elC.offsetTop - (window.innerHeight*0.4) > window.pageYOffset){
        elS.style="opacity:0";
    }
}

// 절대높이값 window.pageYOffset + elA[key].getBoundingClientRect().top