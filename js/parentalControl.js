// js/parentalControl.js

// Prevent back button navigation (Android) - Double click
let lastBackPress = 0;
document.addEventListener('backbutton', (e) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastBackPress < 300) { // Adjust delay as needed
        e.preventDefault(); // Prevent default back action
        // Optionally, you could minimize the app here instead of exiting
        if (navigator.app) {
            navigator.app.exitApp();
        } else if (typeof(cordova) !== 'undefined') {
            cordova.plugins.backgroundMode.moveToBackground();
        }
    } else {
        lastBackPress = currentTime;
        // Optionally, show a toast/message to indicate double tap is needed
        alert("Press back again to exit."); // Or use a less intrusive method
    }
});

// Disable navigation buttons (iOS - might not be fully reliable)
document.addEventListener('touchstart', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        e.preventDefault();
    }
});


// Fullscreen mode (prevent status bar/navigation bar interaction)
function requestFullscreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
      document.documentElement.msRequestFullscreen();
    }
  }

  // Call this function when your app is ready to go fullscreen, e.g., on a button click or app load
  requestFullscreen();


// Prevent accidental clicks outside the game area (optional)
document.addEventListener('click', (event) => {
    const gameContainer = document.querySelector('.game-container'); // Adjust selector as needed
    if (!gameContainer.contains(event.target)) {
        event.preventDefault(); // Prevent clicks outside the container
        // Optionally, provide feedback to the user
    }
});


// Disable Notification Banner (Android - might not be possible without native code)
//  This is very limited and unreliable with PWA. Native Android code is typically needed for this.
//  There is no direct way to disable the notification banner from a PWA.

// Parental Control Lock (Example - simple prompt)
let isLocked = false;

function toggleLock() {
    isLocked = !isLocked;
    if (isLocked) {
        const password = prompt("Enter parental control password:");
        if (password !== "your_password") { // Replace with your actual password logic
            alert("Incorrect password!");
            isLocked = false;
            return;
        }
        // Lock the interface (e.g., disable buttons, prevent navigation)
        disableInteractions();
    } else {
        // Unlock the interface
        enableInteractions();
    }
}

function disableInteractions() {
    // Disable buttons, links, etc.
    const elements = document.querySelectorAll('button, a'); // Select relevant elements
    elements.forEach(el => {
        el.disabled = true;
    });
}

function enableInteractions() {
    const elements = document.querySelectorAll('button, a'); // Select relevant elements
    elements.forEach(el => {
        el.disabled = false;
    });
}

// Add a button or other UI element to trigger the parental lock
const lockButton = document.createElement('button');
lockButton.textContent = "Toggle Parental Lock";
lockButton.onclick = toggleLock;
document.body.appendChild(lockButton); // Or add it to a specific location in your HTML

