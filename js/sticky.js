let scrollBody = document.querySelector('.fix_motion');
let scrollHeight; // 스크롤의 높이
let sectionOffsetTop; // sticky가 시작되기 전 섹션의 높이 (.fix_motion이 천장에 닿을 때)
let sectionScrollTop; 
let scrollRealHeight; // 실제로 스크롤해야 할 높이
let winScrollTop; // 스크롤바의 높이를 담을 변수
let scrollPercent; // 스크롤 백분율값
let percent;

let isMobile;

function scrollFuc(){
    setProperty();
    if(isMobile){
        contentInMobile();
    }else{
        contentIn();
    }
}

function setProperty(){
    isMobile = window.innerWidth<=1024?true:false;
    scrollHeight = scrollBody.offsetHeight; // .fix_motion의 높이값
    sectionOffsetTop = scrollBody.offsetTop; // 문서에서 .fix_motion 전 섹션까지의 높이 값
    scrollRealHeight = scrollHeight - window.innerHeight; // 실제로 스크롤 해야할 높이값
    winScrollTop = pageYOffset; 
    sectionScrollTop = winScrollTop - sectionOffsetTop; // 내 영역안에 스크롤이 얼마나 내려왔는지 계산
    scrollPercent = sectionScrollTop/scrollRealHeight;
    console.log(percent)
    percent=scrollPercent*100;

}

function contentIn(){
    let deviceImg=document.querySelectorAll('.slide figure');
    let imgWidth=deviceImg[0].offsetWidth;
   

    if(percent>=1 && percent < 20){
        document.querySelector('.text_box p.text01').classList.add('active')
        imageChange(imgWidth*0)
    }
    if(percent>=21 && percent < 53){
        document.querySelector('.text_box p.text02').classList.add('active')
        imageChange(imgWidth*1)
    }

    if(percent>=54 && percent < 80){
        document.querySelector('.text_box p.text03').classList.add('active')
        imageChange(imgWidth*2)
    }
    if(percent>=90){
        document.querySelector('.text_box p.text04').classList.add('active')
        imageChange(imgWidth*3)
    }

    if(percent<0){
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
    }

}

function contentInMobile(){
    let deviceImg=document.querySelectorAll('.slide figure');
    let imgWidth=deviceImg[0].offsetWidth;
   

    if(percent>= 1 && percent < 20){
        document.querySelector('.text_box p.text01').classList.add('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
        imageChange(imgWidth*0)
    }
    if(percent>=30 && percent < 53){
        document.querySelector('.text_box p.text02').classList.add('active')
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
        imageChange(imgWidth*1)
    }

    if(percent>=62 && percent < 80){
        document.querySelector('.text_box p.text03').classList.add('active')
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')

        imageChange(imgWidth*2)
    }
    if(percent>=90){
        document.querySelector('.text_box p.text04').classList.add('active')
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')

        imageChange(imgWidth*3)
    }

    if(percent<0){
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
    }

}

function imageChange(moveX){
    let img=document.querySelector('.slide_wrap .slide');
    img.style.transform=`translateX(${-moveX}px)`;
}


window.addEventListener('scroll',function(){
    scrollFuc() 
})
window.addEventListener('resize',function(){
    scrollFuc()  
})

scrollFuc()