new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});


new Swiper('.promotion .swiper', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop : true,
  autoplay: {
    delay: 5000
  },
  pagination:{
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.location .swiper',{
  autoplay: true,
  loop: true,
  spaceBetween :30,
  slidesPerView: 5,
  navigation:{
    prevEl: '.location .swiper-prev',
    nextEl: '.location .swiper-next'
  }
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();