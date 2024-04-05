const imgs = document.querySelector("#imgs");
const bg = ["bg1.jpeg","bg2.jpeg","bg3.jpeg","bg4.jpeg"];
const button_pev = document.querySelector(".button-pev");
const button_next = document.querySelector(".button-next");
const pages_current = document.querySelector("#current");
let imgs_index = 0;
imgs.src = `../img/${bg[0]}`;
let timer = null; // 타이머 변수를 전역으로 선언합니다.

function initializeProgressBar() {
  const bar = document.querySelector('#bar');

  // bar 요소의 애니메이션을 제거합니다.
  bar.style.animation = 'none';

  // 간격을 주어 애니메이션을 제거한 후에 다시 시작합니다.
  setTimeout(() => {
    bar.style.animation = 'progressBar 3s linear infinite';
  }, 10); // 적절한 시간을 선택하여 애니메이션을 제거한 후에 다시 시작합니다.
}


// 함수를 정의하여 다음 이미지로 전환하는 기능을 수행
function nextImage() {
  if (imgs_index === bg.length - 1) {
    imgs_index = 0;
  } else {
    imgs_index++;
  }
  pages_current.innerHTML = imgs_index < 9 ? "0" + (imgs_index + 1) : imgs_index + 1;
  imgs.src = `../img/${bg[imgs_index]}`;

}

// Next 버튼 클릭 이벤트 핸들러
button_next.addEventListener("click", (e) => {
  clearInterval(timer); // 현재 타이머를 제거합니다.
  nextImage();
  timer = setInterval(nextImage, 3000); // 새로운 타이머를 설정합니다.
  initializeProgressBar();
});

// Previous 버튼 클릭 이벤트 핸들러
button_pev.addEventListener("click", (e) => {
  clearInterval(timer); // 현재 타이머를 제거합니다.
  if (imgs_index === 0) {
    imgs_index = bg.length - 1;
  } else {
    imgs_index--;
  }
  pages_current.innerHTML = imgs_index < 9 ? "0" + (imgs_index + 1) : imgs_index + 1;
  imgs.src = `../img/${bg[imgs_index]}`; // 이미지 변경 후 progress bar 애니메이션을 재시작합니다.
  timer = setInterval(nextImage, 3000); // 새로운 타이머를 설정합니다.
  initializeProgressBar();
});

// 초기 타이머 설정
timer = setInterval(nextImage, 3000);
