const container = document.querySelector('.container');
let scrollAmount = 0;
let scrollMax = container.scrollWidth - container.clientWidth;
let direction = 1; 

function autoScroll() {
    container.scrollLeft += direction * 5; 
    scrollAmount += direction * 5;
    if (scrollAmount >= scrollMax || scrollAmount <= 0) {
        direction *= -1; 
}

setInterval(autoScroll, 50);
}