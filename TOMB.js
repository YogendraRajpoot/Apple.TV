
    // carousel for movies
const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction;

next.addEventListener('click', function() {
  direction = -1;
  carousel.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(-20%)';  
});

prev.addEventListener('click', function() {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.style.justifyContent = 'flex-end';    
  slider.style.transform = 'translate(20%)';  
  
});

slider.addEventListener('transitionend', function() {  
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  } else {
    slider.appendChild(slider.firstElementChild);
  }
  
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'all 0.5s';
  })
}, false);

let avatar = document.querySelector(".cast-img")
avatar.addEventListener("click",borderChange)

function borderChange(){
    avatar.style.border = '4px solid #0288D1'
}



        //Movie Modal
function viewModal(){
  let modal = document.getElementById("myModal");
    console.log("clicked")
    modal.style.display = "block"
}

function hideModal(){
  let modal = document.getElementById("myModal")
  modal.style.display = "none"
}




        

    // Share Button
function viewShareBtn(){
    var share = document.querySelector(".share")
    share.style.visibility ="visible"
    console.log("clicked")
}

function hideContent(){
    var share = document.querySelector(".share")
    share.style.visibility ="hidden"
    console.log("clicked2")
}


// Carousel for Cast and Crew
const castCarousel = document.querySelector('.cast-carousel');
const castSlider = document.querySelector('.cast-slider');
const castNext = document.querySelector('.cast-next');
const castPrev = document.querySelector('.cast-prev');
let flag;

castNext.addEventListener('click', function() {
  flag = -1;
  castCarousel.style.justifyContent = 'flex-start';
  castSlider.style.transform = 'translate(-20%)';  
});

castPrev.addEventListener('click', function() {
  if (flag === -1) {
    flag = 1;
    castSlider.appendChild(castSlider.firstElementChild);
  }
  castCarousel.style.justifyContent = 'flex-end';    
  castSlider.style.transform = 'translate(20%)';  
  
});

castSlider.addEventListener('transitionend', function() {  
  if (flag === 1) {
    castSlider.prepend(castSlider.lastElementChild);
  } else {
    castSlider.appendChild(castSlider.firstElementChild);
  }
  
  castSlider.style.transition = 'none';
  castSlider.style.transform = 'translate(0)';
  setTimeout(() => {
    castSlider.style.transition = 'all 0.5s';
  })
}, false);