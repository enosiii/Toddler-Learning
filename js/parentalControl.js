document.addEventListener("DOMContentLoaded", function () {
    let lastPressTime = 0;
    const doublePressInterval = 500; // 500ms for double-tap detection

    // Prevent accidental navigation away (Home, Back, Recent Apps)
    function preventAccidentalExit(event) {
        const currentTime = new Date().getTime();
        if (currentTime - lastPressTime < doublePressInterval) {
            // If second press is within 500ms, allow exit
            return;
        }
        lastPressTime = currentTime;
        event.preventDefault(); // Block the action on first press
        alert("Double-tap to exit"); // Alert user
    }

    // Detect Android navigation buttons (Back, Home, Recents)
    document.addEventListener("keydown", function (event) {
        if (event.key === "Backspace" || event.key === "Escape") {
            preventAccidentalExit(event);
        }
    });

    // Fullscreen mode check (prevents accidental exits)
    function enableFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.warn("Fullscreen mode not supported:", err);
            });
        }
    }
    
    document.body.addEventListener("click", enableFullScreen); // Enable on click

    // Attempt to block notification banners (May not be 100% effective)
    function blockNotifications() {
        if (Notification.permission === "granted") {
            Notification.requestPermission().then(permission => {
                if (permission !== "granted") {
                    console.log("Notifications blocked");
                }
            });
        }
    }

    blockNotifications(); // Call on load
});
