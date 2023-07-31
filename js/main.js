AOS.init();

$('.animate').scrolla({
  // default
  mobile: true, // 모바일버전 활성화 유무
  once: false, // 스크롤시 한 번 실행(true) 또는 반복 실행(false)
  animateCssVersion: 4 // scrolla animate.css version (3 or 4)
});


// header bg
window.addEventListener('scroll', function () {
  let header = document.querySelector('#header');
  let banner = document.querySelector('#banner');
  let bannerHeight = banner.offsetHeight - 200;

  if (window.pageYOffset > bannerHeight) {
    header.classList.add('headerbg');
  } else {
    header.classList.remove('headerbg');
  }
});


// nav mousehover mouseover
let navList = document.querySelectorAll(".h_center>ul>li");

// 각 요소에 대해 반복문을 사용
navList.forEach(function (item) {
  // 마우스를 올렸을 때 이벤트 리스너 추가
  item.addEventListener("mouseover", function () {
    // 클래스명 "active" 추가
    this.classList.add("active");
  });

  // 마우스를 벗어났을 때 이벤트 리스너 추가
  item.addEventListener("mouseout", function () {
    // 클래스명 "active" 제거
    this.classList.remove("active");
  });
});

// navWrap open and close

function menuclick(e) {
  let navWrap = document.querySelector(".navWrap");
  let menuIcon = document.querySelector(".menu");

  menuIcon.classList.toggle("open");
  // 조건문 ? 을 사용해 클래스명 open의 유무를 확인하고 그에 따라 opacity 값이 1 또는 0으로 바뀐다
  navWrap.style.display = menuIcon.classList.contains("open") ?
    "block" :
    "none";
  // pointEvents를 사용해 메뉴 창이 투명한 상태일 때는 사용자의 클릭 이벤트를 무시하도록 한다
  // auto 또는 none의 값을 설정 : 메뉴창이 열려있을 때만 클릭 이벤트를 처리하거나 무시할 수 있다
  // navWrap.style.pointerEvents = menuIcon.classList.contains('open') ? 'auto' : 'none';
}

// tabmenu
function openPage(evt, pageneme) {
  let tabcontent = document.getElementsByClassName("tabcontent");
  // console.log(tabcontent);

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }
  let tablinks = document.getElementsByClassName('tablinks');

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('add')

  }
  // console.log(evt.currentTarget);
  // 클릭한 요소를 가져와 클래스명 active를 추가 == this
  evt.currentTarget.classList.add('add');

  document.getElementById(pageneme).style.display = "block";

}

document.getElementById('defaultOpen').click();



// page1의 box1의 cont2 mouseover scale효과
const imageContainer = document.querySelector(".mhover_img");
const zoomOverlay = document.querySelector(".zoom_img");
const zoomOverlayImg = document.createElement("img");
zoomOverlayImg.src =
  "img/pro.png"; /* 돋보기 확대 영역에 표시할 이미지의 URL */

zoomOverlay.appendChild(zoomOverlayImg);

imageContainer.addEventListener("mousemove", function (e) {
  e.preventDefault();
  const containerRect = imageContainer.getBoundingClientRect();
  const xPos = e.clientX - containerRect.right - zoomOverlay.offsetWidth / 1;
  const yPos = e.clientY - containerRect.top - zoomOverlay.offsetHeight / 1;

  zoomOverlay.style.transform = `translate(${xPos}px, ${yPos}px)`;
});

// cubeslide
var swiper = new Swiper(".cubeslide", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 30,
      shadowScale: 0.8,
  },
});



// clickbook
let slideIndex = 1;

function openBook() {
  document.getElementById("myBook").style.display = "block";
}

function closeBook() {
  document.getElementById("myBook").style.display = "none";
}

function plusSlide(n) {
  showSlide((slideIndex += n));
}

function currentSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[slideIndex - 1].classList.add("active");

  captionText.innerHTML = dots[slideIndex - 1].alt;
}












