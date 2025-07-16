// Initialize the Lottie animation
const loadingAnimation = lottie.loadAnimation({
    container: document.getElementById('loading-animation'), // Container for the animation
    renderer: 'svg', // Render as SVG
    loop: true, // Loop animation
    autoplay: true, // Start playing automatically
    path: 'resources/animations/loading.json' // Path to your downloaded JSON file
});
