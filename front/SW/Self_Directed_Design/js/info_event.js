// 계절 정보 객체 생성
var seasonsInfo = {
  spring: {
    images: ['./images copy/계절별축제/봄축제/나주배축제.jpeg', './images copy/계절별축제/봄축제/yesu.jpg'
  ,'./images copy/계절별축제/봄축제/mokpow.jpg','./images copy/계절별축제/봄축제/담양 대나무.jpeg'
  ,'./images copy/계절별축제/봄축제/여수 거북선.png',],
    texts: ['일시 : 2023년 4월 10일 <br> 행사이름 : 나주배축제<br> 주최 : 국립원예특착과학원',
     '일시 : 2024년 3월 23일 ~ 2024년 3월 24일 <br>행사 이름: 여수 진달래축제 <br> 주최: 원 두 일'
    ,'일시 : 2024년 3월 30일 ~ 2024년 3월 31일 <br>행사 이름: 유달산 봄축제 <br> 주최: 목포시/목포시축제추진위원회'
    ,'일시 : 2024년 5월 11일 ~ 2024년 5월 15일 <br>행사 이름: 담양 대나무 축제 <br> 주최: 담양군/(사)담양대나무축제위원회'
    ,'일시 : 2024년 5월 03일 ~ 2024년 5월 06일 <br>행사 이름: 제 58회 여수 거북선 축제 <br> 주최: 여수시, (사)여수거북선축제보존회/여수거북선축제추진위원회'],
    links: [
    '#'
    ,'#'
    ,'https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=140736'
    ,'https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=506480'
    ,'https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do;jsessionid=B539E81F9DE133CF3FB41FC4C3CCD712.instance1?cmsCntntsId=553315&Flag=Y'
  ]
  },
  summer: {
    images: ['summer_image.jpg'],
    texts: ['여름에 대한 내용']
  },
  fall: {
    images: ['fall_image.jpg'],
    texts: ['가을에 대한 내용']
  },
  winter: {
    images: ['winter_image.jpg'],
    texts: ['겨울에 대한 내용']
  }
};

// 계절 클릭 이벤트 핸들러 설정
document.querySelectorAll('.season_menu th').forEach(function(season) {
  season.addEventListener('click', function() { //클릭하면 showContent 실행
    var seasonName = this.id; // 클릭된 요소의 id를 계절 이름으로 사용
    showContent(seasonName);
  });
});

// 계절 내용을 변경하는 함수
function showContent(season) {
  var contentDiv = document.querySelector('.season_content');
  var seasonInfo = seasonsInfo[season]; // 해당 계절에 대한 정보 가져오기

  if (seasonInfo) {
    // 계절 정보가 있다면 이미지와 텍스트 업데이트
    var contentHTML = '';
    for (var i = 0; i < seasonInfo.images.length; i++) {
      contentHTML += '<div class="content-item">' +
                        '<div class="image-container">' +
                        '<a href="' + seasonInfo.links[i] + '">'+
                          '<img src="' + seasonInfo.images[i] + '" alt="' + season + ' 이미지">' +
                          '</a>'+
                        '</div>' +
                        '<div class="text-container">' +
                          '<p>' + seasonInfo.texts[i] + '</p>' +
                        '</div>' +
                      '</div>';
    }
    contentDiv.innerHTML = contentHTML;
  } else {
    // 계절 정보가 없다면 메시지 출력
    contentDiv.innerHTML = '해당 계절 정보 없음';
  }
}
