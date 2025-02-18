// parentalControl.js

// Prevent accidental navigation
document.addEventListener('DOMContentLoaded', () => {
    // Disable back button
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = () => {
        window.history.pushState(null, null, window.location.href);
    };

    // Disable context menu (right-click)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // Disable swipe gestures (for touch devices)
    document.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });

    // Double-click requirement for navigation buttons (Android)
    let lastClickTime = 0;
    const doubleClickDelay = 500; // Time in milliseconds for double-click

    // Intercept back button
    window.addEventListener('beforeunload', (e) => {
        e.preventDefault();
        e.returnValue = ''; // Required for Chrome
    });

    // Double-click logic for navigation buttons
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' || e.key === 'Escape') {
            const currentTime = new Date().getTime();
            if (currentTime - lastClickTime < doubleClickDelay) {
                // Allow navigation if double-clicked
                window.removeEventListener('beforeunload', () => {});
            } else {
                e.preventDefault();
            }
            lastClickTime = currentTime;
        }
    });
});

// Prevent accidental app closure
window.addEventListener('blur', () => {
    window.focus(); // Refocus the window if it loses focus
});

// Prevent exiting fullscreen mode
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
});

// Ensure fullscreen mode on load
document.documentElement.requestFullscreen();
