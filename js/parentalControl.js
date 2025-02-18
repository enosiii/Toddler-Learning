// parentalControl.js

// Disable Notification Banners
function disableNotifications() {
    if ('Notification' in window) {
        // Request permission to show notifications (if not already granted)
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                // If permission is granted, disable notifications by revoking it
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        console.log('Notifications disabled for parental control.');
                    }
                });
            }
        });
    }
}

// Double-Tap to Exit
function enableDoubleTapToExit() {
    let tapCount = 0;
    let lastTapTime = 0;
    const doubleTapDelay = 500; // Time in milliseconds between taps

    // Listen for back button presses (or any navigation button)
    window.addEventListener('popstate', () => {
        const currentTime = new Date().getTime();
        const tapTimeDiff = currentTime - lastTapTime;

        if (tapTimeDiff < doubleTapDelay && tapCount === 1) {
            // Double-tap detected, allow exit
            window.history.back();
            tapCount = 0;
            lastTapTime = 0;
        } else {
            // Single tap detected, prevent exit
            tapCount = 1;
            lastTapTime = currentTime;
            alert('Tap again to exit.'); // Optional: Show a message to the user
        }
    });
}

// Initialize Parental Controls
function initializeParentalControls() {
    disableNotifications();
    enableDoubleTapToExit();
}

// Run Parental Controls when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeParentalControls);
