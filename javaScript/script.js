new Swiper('.swiper', {
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

  });

/*------ Webcam ------*/
const videoBlock = document.querySelector(".opacity-video");
const videoPlay = document.querySelector(".video-play");

videoPlay.addEventListener("click", function() {
    videoBlock.innerHTML = "<iframe width=\"818\" height=\"434\" src=\"https://www.youtube.com/embed/S-3CjLI9qD0?controls=0&amp;autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"

})

/*---- Images Chenge ----*/

const roomContainer = document.querySelector(".images");


const roomAdmiral = document.querySelector(".admiral");
  roomAdmiral.addEventListener("click", function () {
    roomContainer.src = "./images/image2.1.jpg";
    roomContainer.width = 679;
    roomContainer.height = 482;
    roomAdmiral.style.color = "#E3B873";
    roomAdmiral.style.paddingBottom = "6px";
    roomAdmiral.style.borderBottom = "1px solid #E3B873";

    /*--------------*/
    roomThieves.style.color = "rgba(255, 255, 255, 0.3)";
    roomThieves.style.paddingBottom = "";
    roomThieves.style.borderBottom = "none";

    /*------------*/
    roomPatriotic.style.color = "rgba(255, 255, 255, 0.3)";
    roomPatriotic.style.paddingBottom = "";
    roomPatriotic.style.borderBottom = "none";
    console.log(roomAdmiral)
    /*---- Animation ----*/
    document.querySelector(".images").style.animation = "animation1 2s";
})

const roomThieves = document.querySelector(".thieves");
  roomThieves.addEventListener("click", function () {
    roomContainer.src = "./images/image52.png";
    roomContainer.width = 679;
    roomContainer.height = 482;
    roomThieves.style.color = "#E3B873";
    roomThieves.style.paddingBottom = "6px"
    roomThieves.style.borderBottom = "1px solid #E3B873"

    /*--------------*/
    roomAdmiral.style.color = "rgba(255, 255, 255, 0.3)";
    roomAdmiral.style.paddingBottom = "0";
    roomAdmiral.style.borderBottom = "none";
    
    /*------------*/
    roomPatriotic.style.color = "rgba(255, 255, 255, 0.3)";
    roomPatriotic.style.paddingBottom = "0";
    roomPatriotic.style.borderBottom = "none";
    /*---- Animation ----*/
    document.querySelector(".images").style.animation = "animation2 2s";
})

const roomPatriotic = document.querySelector(".patriotic");
    roomPatriotic.addEventListener("click", function () {
    roomContainer.src = "./images/image2.jpg";
    roomContainer.width = 679;
    roomContainer.height = 482;
    roomPatriotic.style.color = "#E3B873";
    roomPatriotic.style.paddingBottom = "6px";
    roomPatriotic.style.borderBottom = "1px solid #E3B873";

    /*--------------*/
    roomAdmiral.style.color = "rgba(255, 255, 255, 0.3)";
    roomAdmiral.style.paddingBottom = "0";
    roomAdmiral.style.borderBottom = "none";
      
    /*------------*/
    roomThieves.style.color = "rgba(255, 255, 255, 0.3)";
    roomThieves.style.paddingBottom = "0";
    roomThieves.style.borderBottom = "none";
    /*---- Animation ----*/
    document.querySelector(".images").style.animation = "animation3 2s";
})


console.dir(document.querySelector(".admiral"))
