document.addEventListener('scroll', function() {
    const scrollLeftElements = document.querySelectorAll('.scroll-left');
    const scrollRightElements = document.querySelectorAll('.scroll-right');
    
    scrollLeftElements.forEach(function(element) {
        if (isElementInView(element)) {
            element.classList.add('in-view');
        }
    });
    
    scrollRightElements.forEach(function(element) {
        if (isElementInView(element)) {
            element.classList.add('in-view');
        }
    });
});

function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
}

