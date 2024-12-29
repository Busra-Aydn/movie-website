const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const ball=document.querySelector(".toggle")
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title")

arrows.forEach((arrow, i) => {
    const widthRatoi = Math.floor(window.innerWidth/300);
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        clickCounter++;
        if (imageItem - (4 + clickCounter) + (4-widthRatoi) >= 0) {
           movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0; 
        }
    })
});


// DARK MODE
ball.addEventListener("click",function (){
    items.forEach((item) => item.classList.toggle("active"));    
})