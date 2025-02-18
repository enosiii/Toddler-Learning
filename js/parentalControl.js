document.addEventListener('DOMContentLoaded', () => {
    // Prevent Back Button Navigation
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = () => {
        window.history.pushState(null, null, window.location.href);
    };

    // Prevent context menu (right-click)
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Prevent swipe gestures (touch devices)
    document.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

    // Enforce Fullscreen Mode
    function requestFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.warn("Fullscreen request failed:", err);
            });
        }
    }
    requestFullScreen();
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) requestFullScreen();
    });

    // Double-click requirement for exiting the app
    let lastClickTime = 0;
    const doubleClickDelay = 500; // 500ms delay for double-click

    function handleExit() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime < doubleClickDelay) {
            console.log("Exiting app");
            window.removeEventListener('beforeunload', () => {});
        } else {
            console.log("Press again to exit");
            lastClickTime = currentTime;
        }
    }

    // Detect Home, Recent, and Back Button Press
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            handleExit();
        }
    });

    // Prevent accidental app closure
    window.addEventListener('blur', () => {
        setTimeout(() => {
            if (document.hidden) {
                console.log("Trying to close the app.");
                window.focus();
            }
        }, 100);
    });

    // Intercept Back Button Press
    window.addEventListener('beforeunload', (e) => {
        e.preventDefault();
        e.returnValue = ''; // Required for Chrome
    });

    console.log("Parental Control Enabled");
});
