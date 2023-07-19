let myImgSlider = new Swiper('.images-swiper', {

  slidesPerView: 1,
  
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let myTextSlider = new Swiper('.text-swiper', {

  slidesPerView: 1,

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 2000,
  spaceBetween: 330,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      on: {
        init: function () {
        },
      },
  
});

myImgSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImgSlider;

new Swiper (".swiperPopup1", {
  slidesPerView: 1,
  
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  speed: 1000,

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

})

new Swiper (".swiperPopup2", {
  slidesPerView: 1,
  
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  speed: 1000,

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

new Swiper (".swiperPopup3", {
  slidesPerView: 1,
  
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  speed: 1000,

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

new Swiper('.swiper-mobile', {
  // Optional parameters
  direction:'horizontal',
  loop: true,
  speed: 1000,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

/*-------------- Set LinkStyle ------------------*/

const linkAdmiral = document.querySelector('.admiral');
const linkThieves = document.querySelector(".thieves");
const linkPatriotic = document.querySelector(".patriotic");

/*---- links Style with Swiper ----*/
function styleSet () {
  if (document.querySelector('.swiper-pagination-bullet-active').ariaLabel == "Go to slide 1") {
    /*---- Set ------*/
    linkAdmiral.style.color = "#E3B873";
    linkAdmiral.style.paddingBottom = "6px";
    linkAdmiral.style.borderBottom = "1px solid #E3B873";
    linkAdmiral.style.animation = "animation 2s";

    /*------ Reset ------*/
    linkThieves.style.color = "rgba(255, 255, 255, 0.3)";
    linkThieves.style.paddingBottom = "";
    linkThieves.style.borderBottom = "none";
    linkThieves.style.animation = "none";
    
    /*------ Reset ------*/
    linkPatriotic.style.color = "rgba(255, 255, 255, 0.3)";
    linkPatriotic.style.paddingBottom = "";
    linkPatriotic.style.borderBottom = "none";
    linkPatriotic.style.animation = "none";
  }

if (document.querySelector('.swiper-pagination-bullet-active').ariaLabel == "Go to slide 2") {
    /*---- Set ------*/
    linkThieves.style.color = "#E3B873";
    linkThieves.style.paddingBottom = "6px"
    linkThieves.style.borderBottom = "1px solid #E3B873"
    linkThieves.style.animation = "animation 2s";

    /*------ Reset ------*/
    linkAdmiral.style.color = "rgba(255, 255, 255, 0.3)";
    linkAdmiral.style.paddingBottom = "0";
    linkAdmiral.style.borderBottom = "none";
    linkAdmiral.style.animation = "none";
    
    /*------ Reset ------*/
    linkPatriotic.style.color = "rgba(255, 255, 255, 0.3)";
    linkPatriotic.style.paddingBottom = "0";
    linkPatriotic.style.borderBottom = "none";
    linkPatriotic.style.animation = "nonw";
  }

if (document.querySelector('.swiper-pagination-bullet-active').ariaLabel == "Go to slide 3"){
    /*---- Set ------*/
    linkPatriotic.style.color = "#E3B873";
    linkPatriotic.style.paddingBottom = "6px";
    linkPatriotic.style.borderBottom = "1px solid #E3B873";
    linkPatriotic.style.animation = "animation 2s";

    /*----- Reset---------*/
    linkAdmiral.style.color = "rgba(255, 255, 255, 0.3)";
    linkAdmiral.style.paddingBottom = "0";
    linkAdmiral.style.borderBottom = "none";
    linkAdmiral.style.animation = "none";

      
    /*------ Reset ------*/
    linkThieves.style.color = "rgba(255, 255, 255, 0.3)";
    linkThieves.style.paddingBottom = "0";
    linkThieves.style.borderBottom = "none";
    linkThieves.style.animation = "none";

  }
}

/*-- Swiper Events --*/
myTextSlider.on('slideChange', function () {
  styleSet ();
})

/*------------- links Hover JS -----------------*/
linkAdmiral.addEventListener("mouseout", function () {
  styleSet ();
})

linkThieves.addEventListener("mouseout", function () {
  styleSet ();
})

linkPatriotic.addEventListener("mouseout", function () {
  styleSet ();
})

linkAdmiral.addEventListener("mouseover", function () {
  /*---- Set ------*/
  linkAdmiral.style.color = "#E3B873";
  linkAdmiral.style.paddingBottom = "6px";
  linkAdmiral.style.borderBottom = "1px solid #E3B873";
  linkAdmiral.style.animation = "animation 2s";

  /*------ Reset ------*/
  linkThieves.style.color = "rgba(255, 255, 255, 0.3)";
  linkThieves.style.paddingBottom = "";
  linkThieves.style.borderBottom = "none";
  linkThieves.style.animation = "none";
  
  /*------ Reset ------*/
  linkPatriotic.style.color = "rgba(255, 255, 255, 0.3)";
  linkPatriotic.style.paddingBottom = "";
  linkPatriotic.style.borderBottom = "none";
  linkPatriotic.style.animation = "none";
});

linkThieves.addEventListener("mouseover", function () {
  /*---- Set ------*/
  linkThieves.style.color = "#E3B873";
  linkThieves.style.paddingBottom = "6px"
  linkThieves.style.borderBottom = "1px solid #E3B873"
  linkThieves.style.animation = "animation 2s";

  /*------ Reset ------*/
  linkAdmiral.style.color = "rgba(255, 255, 255, 0.3)";
  linkAdmiral.style.paddingBottom = "0";
  linkAdmiral.style.borderBottom = "none";
  linkAdmiral.style.animation = "none";
  
  /*------ Reset ------*/
  linkPatriotic.style.color = "rgba(255, 255, 255, 0.3)";
  linkPatriotic.style.paddingBottom = "0";
  linkPatriotic.style.borderBottom = "none";
  linkPatriotic.style.animation = "nonw";
});

linkPatriotic.addEventListener("mouseover", function () {
    /*---- Set ------*/
    linkPatriotic.style.color = "#E3B873";
    linkPatriotic.style.paddingBottom = "6px";
    linkPatriotic.style.borderBottom = "1px solid #E3B873";
    linkPatriotic.style.animation = "animation 2s";

    /*----- Reset---------*/
    linkAdmiral.style.color = "rgba(255, 255, 255, 0.3)";
    linkAdmiral.style.paddingBottom = "0";
    linkAdmiral.style.borderBottom = "none";
    linkAdmiral.style.animation = "none";

      
    /*------ Reset ------*/
    linkThieves.style.color = "rgba(255, 255, 255, 0.3)";
    linkThieves.style.paddingBottom = "0";
    linkThieves.style.borderBottom = "none";
    linkThieves.style.animation = "none";
});


/*------ Webcam ------*/
const videoBlock = document.querySelector(".opacity-video");
const videoPlay = document.querySelector(".video-play");

videoPlay.addEventListener("click", function() {
    videoBlock.innerHTML = "<iframe width=\"818\" height=\"434\" src=\"https://www.youtube.com/embed/S-3CjLI9qD0?controls=0&amp;autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"

})

 