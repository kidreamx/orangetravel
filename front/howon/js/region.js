new Swiper('.location .swiper',{
  autoplay: true,
  loop: true,
  spaceBetween :30,
  slidesPerView: 5,
  navigation:{
    prevEl: '.location .swiper-prev',
    nextEl: '.location .swiper-next'
  },
  autoplay: {
    delay: 10000
  }
});




var regionInfo = {
  ga: {
    images: ['./images/지역로고/광주.jpg'],
    texts: [
     '증심사 <br>광주광역시 동구 무등산 서쪽 기슭에 자리한 불교 절입니다.  <br> 이 절은 신라 시대에 철감선사 도윤에 의해 9세기 중엽에 처음 세워졌으며, 고려 선종 때 혜조국사가 중수했습니다. '],
  },
  dam: {
    images: [
      './images/지역로고/담양.jpg'
    ],
  
    texts: [
      '창평향교 <br>향교는 훌륭한 유학자를 제사하고 지방민의 유학교육과 교화를 위하여 나라에서 지은 교육기관입니다. <br> 성종 10년 (1479)**에 지금의 자리로 옮겼으며, 임진왜란 (1592) 때 불타 없어진 것을 그 후에 다시 지었습니다.'
      
    ],
  },
  
};


document.querySelectorAll('.swiper-slide img').forEach(function(region) {
  region.addEventListener('click', function(event) { //클릭하면 showContent 실행
    var regionName = this.id; 
    showContent(regionName);
  });
});


function showContent(region) {
  var contentDiv = document.querySelector('.region_content');
  var regionData = regionInfo[region]; 

  if (regionData) {

    
    var contentHTML = '<div class = "content-item">'+
                        '<div class="image-container">'+
                        '<img src="' + regionData.images[0] + '" alt="' + ' 이미지">' +
                        '</a>'+
                        '</div>' +
                        '<div class="text-container">' +
                          '<p>' + regionData.texts[0] + '</p>' +
                        '</div>' +
                      '</div>';
    
    contentDiv.innerHTML = contentHTML;
  } else {
    
    contentDiv.innerHTML = '해당 지역 정보 없음';
  }
}

