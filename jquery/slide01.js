function init(){
    var swiper = new Swiper(".mySwiper01", {
        loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // autoplay: {
        //             delay: 3500,
        //             disableOnInteraction: false,
        //         },
      });

      var swiper2 = new Swiper(".container-2 .swiper", {
          pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
          slidesPerView: 1.3,
          autoHeight: true,
          spaceBetween: 20,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1024: {
              slidesPerView: 3,
            }
          }
        });

        var swiper3 = new Swiper(".vegan-container .swiper", {
          autoHeight: true,
          spaceBetween: 0,
          loop: true,
          slidesPerView: 1,
          breakpoints: {
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            }
          }

        });

        var swiper4 = new Swiper(".mySwiper04", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            }
          }
        });
}

window.onload = function () {
  const elD = document.querySelector('.d-box'),
    elDswiper = document.querySelector('.d-box d');

  console.log(
    elD.offsetTop
  )
};

window.onload = init;