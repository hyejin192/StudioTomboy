(function () {
  let pTag1 = document.querySelector(".first_parallel");
  let pTag2 = document.querySelector(".second_parallel");

  let textArr1 = "23 SUMMER CAMPAIGN RUN TO YOU 23 SUMMER CAMPAIGN 23 SUMMER CAMPAIGN RUN TO YOU 23 SUMMER CAMPAIGN 23 SUMMER CAMPAIGN RUN TO YOU 23 SUMMER CAMPAIGN".split(' ') // 뛰어쓰기를 기준으로 잘라서 배열
  // console.log(textArrl)
  let textArr2 = "23 SUMMER CAMPAIGN RUN TO YOU 23 SUMMER CAMPAIGN 23 SUMMER CAMPAIGN RUN TO YOU 23 SUMMER CAMPAIGN 23 SUMMER CAMPAIGN RUN TO YOU 23 SUMMER CAMPAIGN  ".split(' ')


  /* let arr=[];
  arr.push(...textArr1) // textArr1의 글자를 글자들을 복사해서 arr에 집어넣음
  console.log(arr) */

  let count1 = 0;
  let count2 = 0;
  // let count2 = 0;

  initTexts(pTag1, textArr1)
  initTexts(pTag2, textArr2)

  function initTexts(element, textArry) {
    // 8개의 배열에 동일한 배열을 복사하여 배열 뒤에 넣음 == 16개
    textArry.push(...textArry)
    // console.log(textArry) 
    for (let i = 0; i < textArry.length; i++) {
      // \u00A0 : 자바스크립트에서 공백을 나타냄(띄어쓰기)
      element.innerHTML += `${textArry[i]}\u00A0\u00A0\u00A0`;
    }
  }

  // -------------- 글자입력
  function animate() {
    count1++;
    count2++;
    // console.log(count1)

    count1 = marqueeText(count1, pTag1, -1)
    count2 = marqueeText(count2, pTag2, 1) // 반대로 움직임

    window.requestAnimationFrame(animate) //setInterval의 업그레이드 버전
    // animate함수를 다시 실행
  }

  function marqueeText(count, element, direction) {
    // .scrollWidth : 보이지 않는 공간일지라도 스크롤해서 확인할 수 있는 공간까지의 넓이
    // console.log(element,scrollWidth)
    //if(count>element)
    if (count > element.scrollWidth / 2) {
      count = 0;
      element.style.transform = `translate(0,0)`
    }
    element.style.transform = `translate(${count * direction}px,0)`
    return count; //count=0

  }

  function scrollHandler() {
    count1 += 25;
    count2 += 25;
  }
  animate();
  window.addEventListener("scroll", scrollHandler)

})();





