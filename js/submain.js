// mouseover changeImg
function changeImage() {
  var img = document.getElementById("img1");
  img.src = "img/page3.jpg";
}

function restoreImage() {
  var img = document.getElementById("img1");
  img.src = "img/page3-2.png";
}

function changeImage_2() {
  var img = document.getElementById("img2");
  img.src = "img/page4.jpg";
}

function restoreImage_2() {
  var img = document.getElementById("img2");
  img.src = "img/page4-2.png";
}

function changeImage_3() {
  var img = document.getElementById("img3");
  img.src = "img/page5.jpg";
}

function restoreImage_3() {
  var img = document.getElementById("img3");
  img.src = "img/page5-2.png";
}

let oneEle = document.querySelector('#one');
oneEle.addEventListener('mousemove', function (e) {
  // 이미지가 마우스 따라 움직임
  document.querySelector('#slidephoto').style.top = `${e.clientY}px`
  document.querySelector('#slidephoto').style.left = `${e.clientX}px`
  document.querySelector('#slidephoto').style.transform = `translate(${-e.clientX * 0.55}px , ${-e.clientY * 0.8}px)`
})


/* 첫번째 이미지 */
document.querySelector('#Denim').addEventListener('mousemove', (e) => {
  document.querySelector('#slidephotos').style.marginTop = "-10%"
  document.querySelector('#Denim').style.color = "#666";


})
document.querySelector('#Denim').addEventListener('mouseleave', (e) => {
  document.querySelector('#Denim').style.color = "#394867";
})
/* 두번째 이미지 */
document.querySelector('#Leather').addEventListener('mousemove', (e) => {
  document.querySelector('#slidephotos').style.marginTop = "-160%"
  document.querySelector('#Leather').style.color = "#666"

})
document.querySelector('#Leather').addEventListener('mouseleave', (e) => {
  document.querySelector('#Leather').style.color = "#394867";
})
/* 세번째 이미지 */
document.querySelector('#Jacket').addEventListener('mousemove', (e) => {
  document.querySelector('#slidephotos').style.marginTop = "-320%"
  document.querySelector('#Jacket').style.color = "#666"

})
document.querySelector('#Jacket').addEventListener('mouseleave', (e) => {
  document.querySelector('#Jacket').style.color = "#394867";
})

/* 마우스가 떠났을 때 */
document.querySelector('#eff').addEventListener('mousemove', function () {
  document.querySelector('#slidephoto').style.display = "initial";
  document.querySelector('#slidephoto').style.opacity = 1;
})
document.querySelector('#eff').addEventListener('mouseleave', function () {
  document.querySelector('#slidephoto').style.display = "none";
  document.querySelector('#slidephoto').style.opacity = 0;
})

const textElement = document.querySelector('.brandtit');
const text2 = textElement.innerHTML;
textElement.innerHTML = '';

function typeWriter() {
  let i = 0;
  const typingInterval = setInterval(function () {
    textElement.innerHTML += text2.charAt(i);
    i++;
    if (i === text2.length) {
      clearInterval(typingInterval);
    }
  }, 100);
}

typeWriter();


document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".slide_img img");
  var currentImageIndex = 0;

  function showNextImage() {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add("active");
  }

  function changeImage() {
    showNextImage();
  }

  // 이미지 클릭 이벤트를 처리합니다.
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
      changeImage();
      clearInterval(interval); // 클릭할 때마다 자동 전환을 중지합니다.
    });
  }

  // 일정한 시간 간격으로 다음 이미지를 보여주는 기능을 추가합니다.
  var interval = setInterval(showNextImage, 2000); // 2초마다 이미지 전환
});

// page3 accordion
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling; //이것의 다음요소(동생)
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;

    } else {
      //화면 바깥으로 삐져나간 부분까지 포함해서 전체 글의 길이를 scrollHeight 라고 비유해볼 수 있겠다.
      panel.style.maxHeight = panel.scrollHeight + "px"
    }
  })
}

var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



VanillaTilt.init(document.querySelectorAll(".humanimg"), {
  max: 15,
  speed: 400
});


const text = document.querySelector(".text p");

text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
  )
  .join("");



// window창
$('#submit').click(function (e) {
  e.preventDefault();
  var myWindow = window.open("submit.html", "Window", "width=600, height=500 , left=500 , top=300");
})


// page4_pano_wrap
let panoWrap = document.querySelector('.page4_pano_wrap');
let listWrap = panoWrap.querySelector('.page4_pano_wrap .page4_list');
let item = listWrap.children; // listWrap의 자식



let listClone = null; // 강제로 비워놓겠다
let itemWidth = 260

let itemLength = item.length
console.log(item[0])
let listWidth = itemWidth * itemLength;
console.log(itemWidth)
let move = 0;
let controls = panoWrap.parentElement.querySelector('.page4_controls'); // 부모 입장에서 controls를 부른다
let timer;


// 셋 다 동일
// function init(){}
// var init =function(){}
// var init =()=>{}
function init() {
    panoWrap.style.width = listWidth * 2 + "px";
    listWrap.style.width = listWidth + "px";
    panoWrap.appendChild(listWrap.cloneNode(true))

    // ul이 두개가 생김
    listClone = panoWrap.children; // listClone에 집어넣음
    console.log(listClone) // 유사배열 (배열처럼 보이지만 한계가 있음 실제 배열처럼 쓸 수 없음
    render();
    add();
    event();

}

let render = () => {
    move += 1;

    Array.from(listClone).forEach(function (clone) {
        clone.style.transform = `translateX(${-move}px)`;
    })

    timer = window.requestAnimationFrame(render)
}

let add = function () {
    setInterval(function () {
        panoWrap.appendChild(listWrap.cloneNode(true));
        listClone = panoWrap.children;
    }, 10000); // 10초마다 ul 전체가 복사

}

let event = function () {
    controls.querySelector('.play_on').addEventListener('click', function (e) {
        e.preventDefault();
        //console.log(this)
        if (this.classList.contains('active')) {
            this.classList.remove('active')
            window.cancelAnimationFrame(timer)
        } else {
            this.classList.add('active')
            render();
        }

    })
}



window.addEventListener('load', function () {
    init();
})