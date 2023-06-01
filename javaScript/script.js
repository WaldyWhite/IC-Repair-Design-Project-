const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function () {
        console.log('swiper initialized');
      },
    },

  });

  /*-------------- Set LinkStyle ------------------*/

  let slidenumber = 1;

  /*-- Swiper Events --*/
  swiper.on('slideNextTransitionStart', function () {
    slidenumber++;
    if (slidenumber > 3){
      slidenumber = 1;
    }
    styleSet ()
    console.log(slidenumber);
  });

  swiper.on('slidePrevTransitionStart', function () {
    slidenumber--;
    if(slidenumber < 1) {
      slidenumber = 3;
    }
    styleSet ()
    console.log(slidenumber);
  });

/*---- links Style  ----*/

const linkAdmiral = document.querySelector('.admiral');
const linkThieves = document.querySelector(".thieves");
const linkPatriotic = document.querySelector(".patriotic");

function styleSet () {
  if (slidenumber == 1) {
    linkAdmiral.style.color = "#E3B873";
    linkAdmiral.style.paddingBottom = "6px";
    linkAdmiral.style.borderBottom = "1px solid #E3B873";

    /*--------------*/
    linkThieves.style.color = "rgba(255, 255, 255, 0.3)";
    linkThieves.style.paddingBottom = "";
    linkThieves.style.borderBottom = "none";

    /*------------*/
    linkPatriotic.style.color = "rgba(255, 255, 255, 0.3)";
    linkPatriotic.style.paddingBottom = "";
    linkPatriotic.style.borderBottom = "none";
    console.log("roomAdmiral")
}

if (slidenumber == 2) {
    linkThieves.style.color = "#E3B873";
    linkThieves.style.paddingBottom = "6px"
    linkThieves.style.borderBottom = "1px solid #E3B873"

    /*--------------*/
    linkAdmiral.style.color = "rgba(255, 255, 255, 0.3)";
    linkAdmiral.style.paddingBottom = "0";
    linkAdmiral.style.borderBottom = "none";
    
    /*------------*/
    linkPatriotic.style.color = "rgba(255, 255, 255, 0.3)";
    linkPatriotic.style.paddingBottom = "0";
    linkPatriotic.style.borderBottom = "none";

}

if (slidenumber == 3){
    console.log("Patriot");
    linkPatriotic.style.color = "#E3B873";
    linkPatriotic.style.paddingBottom = "6px";
    linkPatriotic.style.borderBottom = "1px solid #E3B873";

    /*--------------*/
    linkAdmiral.style.color = "rgba(255, 255, 255, 0.3)";
    linkAdmiral.style.paddingBottom = "0";
    linkAdmiral.style.borderBottom = "none";
      
    /*------------*/
    linkThieves.style.color = "rgba(255, 255, 255, 0.3)";
    linkThieves.style.paddingBottom = "0";
    linkThieves.style.borderBottom = "none";
  }
}

/*------ Webcam ------*/
const videoBlock = document.querySelector(".opacity-video");
const videoPlay = document.querySelector(".video-play");

videoPlay.addEventListener("click", function() {
    videoBlock.innerHTML = "<iframe width=\"818\" height=\"434\" src=\"https://www.youtube.com/embed/S-3CjLI9qD0?controls=0&amp;autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"

})

 