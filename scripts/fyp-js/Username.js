const currentUsername = localStorage.getItem('currentUsername');

        // Display the profile name if it's set, otherwise default to "Guest"
        if (currentUsername) {
            document.getElementById('profile-name').textContent = currentUsername;
            document.getElementById('profile-profile-name').textContent = currentUsername;
            document.getElementById('fav-song-profile-name').textContent = currentUsername;
            document.getElementById('playlist-profile-name').textContent = currentUsername;
            document.getElementById('follow-artist-profile-name').textContent = currentUsername;
            document.getElementById('friends-profile-name').textContent = currentUsername;
        } else {
            document.getElementById('profile-name').textContent = "Guest"; // Default text if no username is found
            document.getElementById('profile-profile-name').textContent = "Guest";
            document.getElementById('fav-song-profile-name').textContent = "Guest";
            document.getElementById('playlist-profile-name').textContent = "Guest";
            document.getElementById('follow-artist-profile-name').textContent = "Guest";
            document.getElementById('friends-profile-name').textContent = "Guest";
        }

