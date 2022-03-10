// var video = document.querySelector("#LA-upper-section-video");
// var flag = true;
// video.addEventListener("canplay", function () {
//   setTimeout(function () {
//       if(flag===true){
//           flag=false
//           video.play();
//       }
//     video.play();
//     console.log("1");
//   }, 5000);
// });

// *******************************************************

// var btn1 = document.querySelector(".LA-lower-section-inner-1-btn-1");
// var btn2 = document.querySelector(".LA-lower-section-inner-1-btn-2");
// var item = document.querySelector(".LA-lower-section-inner-2");

// let x = -1;
// btn2.onclick = () => {
//   if (x === -1) {
//     console.log(item.length);
//     item.style.marginLeft = "-90vw";
//     item.style.transition = ".5s";
//   }
// };
// btn1.onclick = () => {
//   item.style.marginLeft = "-2vw";
//   item.style.transition = ".5s";
// };

// ***************************************************************************


const productContainers = [...document.querySelectorAll('.LA-lower-section-inner-2')];
const preBtn = [...document.querySelectorAll('.LA-lower-section-inner-1-btn-1')];
const nxtBtn = [...document.querySelectorAll('.LA-lower-section-inner-1-btn-2')];



productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    console.log(item,i);
    

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// ******************************************************************************
 
const pc = [...document.querySelectorAll('.LA-lower-section-inner-8')];
const pre = [...document.querySelectorAll('.LA-lower-section-inner-8-btn-1')];
const nxt = [...document.querySelectorAll('.LA-lower-section-inner-8-btn-2')];



pc.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    // console.log(item,i);
    

    nxt[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        
    })

    pre[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})