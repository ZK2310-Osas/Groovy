document.querySelectorAll('.new-release-container').forEach(item => {
    const audio = item.querySelector('.new-release-song-audio');
    
    // Play audio on hover (attempt to play, fallback on click)
    item.addEventListener('mouseenter', () => {
        audio.muted = false; // Unmute the audio when hovering
        const playPromise = audio.play();
        
        // If autoplay fails, add a click event to start audio
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                item.addEventListener('click', () => {
                    audio.play();
                }, { once: true });
            });
        }
    });

    // Pause and reset the audio on mouse leave
    item.addEventListener('mouseleave', () => {
        audio.pause();
        audio.currentTime = 0;
    });
});

