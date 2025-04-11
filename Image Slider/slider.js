
const slides = document.querySelectorAll(".slide");
const prev = document.getElementById('prev-btn');
const next = document.getElementById('nxt-btn');

let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
});

prev.addEventListener('click', function(){
    counter--;
    slideImage();
})

next.addEventListener('click', function(){
    counter++;
    if(counter === slides.length){
        counter = 0;
        slideImage();
    }
    else{
        slideImage();
    }
})

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter*100}%)`;
        
    })
}