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
    images: ['./images/문화재/증심사.jpg',
      './images/문화재/선교사사택.jpg'
    ],
    texts: [
     '<strong>증심사 </strong> <br>광주광역시 동구 무등산 서쪽 기슭에 자리한 불교 절입니다.  <br> 이 절은 신라 시대에 철감선사 도윤에 의해 9세기 중엽에 처음 세워졌으며, 고려 선종 때 혜조국사가 중수했습니다. ',
     '<strong>우일선 선교사 사택</strong> <br>광주광역시 동구 무등산 서쪽 기슭에 자리한 불교 절입니다.  <br> 이 절은 신라 시대에 철감선사 도윤에 의해 9세기 중엽에 처음 세워졌으며, 고려 선종 때 혜조국사가 중수했습니다.'
    
    ],
    links: [
      
    ]
  },
  dam: {
    images: [
      './images/문화재/창평향교.jpg',
      './images/문화재/선교사사택.jpg'
    ],
  
    texts: [
      '<strong>창평향교 </strong><br>향교는 훌륭한 유학자를 제사하고 지방민의 유학교육과 교화를 위하여 나라에서 지은 교육기관입니다. <br> 성종 10년 (1479)**에 지금의 자리로 옮겼으며, 임진왜란 (1592) 때 불타 없어진 것을 그 후에 다시 지었습니다.',
      '<strong>우일선 선교사 사택</strong> <br>광주광역시 동구 무등산 서쪽 기슭에 자리한 불교 절입니다.  <br> 이 절은 신라 시대에 철감선사 도윤에 의해 9세기 중엽에 처음 세워졌으며, 고려 선종 때 혜조국사가 중수했습니다.'
    ],
    links: [
      
    ]
  },

  gogs: {
    images: ['./images/문화재/태안사 일주문.jpg',
      './images/문화재/선교사사택.jpg'
    ],
    texts: [
     '<strong>태안사 일주문 </strong> <br>곡성 태안사 일주문(谷城 泰安寺 一柱門)는 대한민국 전라남도 곡성군 죽곡면 원달리, 태안사에 있는 일주문이다. 1981년 10월 20일 전라남도의 유형문화재 제83호로 지정되었다.  <br> 태안사 일주문은 위로 갈수록 좁아지는 두 개의 굵은 기둥 위에 앞면 1칸의 규모로 세웠으며, 지붕 옆면이 사람 인(人)자 모양인 단순한 맞배지붕이다.  ',
     '<strong>우일선 선교사 사택</strong> <br>광주광역시 동구 무등산 서쪽 기슭에 자리한 불교 절입니다.  <br> 이 절은 신라 시대에 철감선사 도윤에 의해 9세기 중엽에 처음 세워졌으며, 고려 선종 때 혜조국사가 중수했습니다.'
    
    ],
    links: [
      
    ]
  },
};

var regioncolor = {
  ga: {
    colors: ['linear-gradient(0deg, rgba(255,227,227,1) 0%, rgba(254,250,239,1) 100%)'],
  },
  dam: {
    colors: [
      'linear-gradient(0deg, rgba(227,255,240,1) 0%, rgba(254,250,239,1) 100%)'
    ], 
  },

  gogs: {
    colors: ['linear-gradient(0deg, rgba(0,144,214,0.8184523809523809) 0%, rgba(254,250,239,1) 100%)'],
  },
  
};


document.querySelectorAll('.swiper-slide img').forEach(function(region) {
  region.addEventListener('click', function(event) { //클릭하면 showContent 실행
    var regionName = this.id; 
    
    showContent(regionName);
    
    btnClick();
    changecolor(regionName);
  });
});



function changecolor(region){
  var sections = document.getElementsByTagName("article");
  var colors = regioncolor[region].colors;

  
  for (var i = 0; i < 10; i++) {
      sections[i].style.background = colors[i % colors.length];
  }
}



function showContent(region) {
  var contentDiv = document.querySelector('.region_content');
  var regionData = regionInfo[region]; 

  if (regionData) {
    var contentHTML = '';
    for (var i = 0; i < regionData.images.length; i++) {
      contentHTML += '<div class = "content-item">'+
                        '<div class="image-container">'+
                          '<img src="' + regionData.images[i] + '" alt="' + ' 이미지">' +                          
                        '</div>' +

                        '<div class="text-container">' +
                          '<a href="'+ regionData.links[i] +  '">'+
                          '<p>' + regionData.texts[i] + '</p>' +
                          '</a>'+
                        '</div>' +
                      '</div>';
    }
    contentDiv.innerHTML = contentHTML;
  } else {
    
    contentDiv.innerHTML = '해당 지역 정보 없음';
  }
}

function btnClick() {
  const defaults = document.getElementById('defaults');
  const real = document.getElementById('real');
  if(defaults.style.display != 'none') {
    defaults.style.display = 'none';
    real.style.display = 'block';
  }
}