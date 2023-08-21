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
    var calendarItem = document.querySelector('.calendar');

    calendarItem.addEventListener('click', function () {
        calendarItem.classList.add('active');
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
