document.querySelectorAll('.your-forgotten-song-item').forEach(item => {
    const audio = item.querySelector('.ur-forgot-song-audio');

    // Play on hover
    item.addEventListener('mouseenter', () => {
        // Try to play; catch any error if autoplay is blocked
        const playPromise = audio.play();
        
        // Handle any autoplay restrictions gracefully
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // If autoplay is blocked, add a click event to trigger it
                item.addEventListener('click', () => {
                    audio.play();
                }, { once: true });
            });
        }
    });

    // Pause and reset on mouse leave
    item.addEventListener('mouseleave', () => {
        audio.pause();
        audio.currentTime = 0;
    });
});


