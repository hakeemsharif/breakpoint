function updateClass() {
    var element = document.getElementById('cardmain');
    
    if (window.innerWidth <= 700) { // Adjust the width as needed
        element.classList.add('swiper');
        element.classList.add('mySwiper');
    } else {
        element.classList.remove('swiper');
        element.classList.remove('mySwiper');
    }
}


// Initial class update on page load
updateClass();

// Event listener for window resize
window.addEventListener('resize', updateClass);