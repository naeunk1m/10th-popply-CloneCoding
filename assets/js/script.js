// $(document).ready(function () {
//   $(".slick-slider").slick({
//     dots: true,
//     arrows: true,
//     speed: 500,
//     fade: true,
//     slidesToShow: 2,
//   });
// });

$(document).ready(function () {
  $(".slick-slider").slick({
    slidesToShow: 2, // 화면에 보이는 슬라이드 수
    prevArrow: $(".prev-button"), // 이전 버튼
    nextArrow: $(".next-button"), // 다음 버튼
  });
});




  $(function () {
    window.addEventListener('scroll', function() {
      var header = document.querySelector('.header');
  
      if (window.scrollY > 0) {
          header.classList.add('sticky');
      } else {
          header.classList.remove('sticky');
      }
  });

  var calendars = document.querySelectorAll('.calendar');

calendars.forEach(function(calendar) {
    calendar.addEventListener('click', function() {
        // Remove 'active' class from all calendars
        calendars.forEach(function(c) {
            c.classList.remove('active');
        });

        // Add 'active' class to the clicked calendar
        this.classList.add('active');
    });
});




  })

  $('.popup-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrow: false,
    initialSlide: 0,
    infinite: false,
  });
