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
const videoCont = document.querySelector(".video")
const videoBlock = document.querySelector(".opacity-video");
const videoPlay = document.querySelector(".video-play");

videoPlay.addEventListener("click", function() {
    videoBlock.innerHTML = "<iframe width=\"818\" height=\"434\" src=\"https://www.youtube.com/embed/S-3CjLI9qD0?controls=0&amp;autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"

})
