

// Prevent accidental navigation
document.addEventListener('DOMContentLoaded', () => {
    let lastClickTime = 0;
    const doubleClickDelay = 500; // Time in milliseconds for double-click

    // Disable back button navigation
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

    // Detect keypress for Back button (on physical keyboards)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' || e.key === 'Escape') {
            handleNavButtonPress();
            e.preventDefault();
        }
    });

    // Handle app losing focus (for Home & Recent apps)
    let lastBlurTime = 0;
    window.addEventListener('blur', () => {
        const currentTime = new Date().getTime();
        if (currentTime - lastBlurTime < doubleClickDelay) {
            console.log("Double-tap detected: Allow app to lose focus");
        } else {
           // showToast("Tap again to exit or switch apps");
            setTimeout(() => {
                window.focus();
            }, 100);
        }
        lastBlurTime = currentTime;
    });

    function handleNavButtonPress() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime < doubleClickDelay) {
            console.log("Double-tap detected: Allow navigation");
            window.removeEventListener('beforeunload', () => {});
        } else {
            showToast("Tap again to navigate");
        }
        lastClickTime = currentTime;
    }

    // Toast message function
    function showToast(message) {
        let toast = document.createElement("div");
        toast.textContent = message;
        toast.style.position = "fixed";
        toast.style.bottom = "20px";
        toast.style.left = "50%";
        toast.style.transform = "translateX(-50%)";
        toast.style.backgroundColor = "#333";
        toast.style.color = "#fff";
        toast.style.padding = "10px 20px";
        toast.style.borderRadius = "5px";
        toast.style.zIndex = "9999";
        toast.style.opacity = "0.9";
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 1500);
    }
});

// Prevent exiting fullscreen mode
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
});

// Ensure fullscreen mode on load
document.documentElement.requestFullscreen();
