// app.js

// Data for each activity
const activities = {
    colors: [
        { name: 'Red', image: 'assets/images/red.png', sound: 'assets/sounds/red.mp3' },
        { name: 'Blue', image: 'assets/images/blue.png', sound: 'assets/sounds/blue.mp3' },
        { name: 'Green', image: 'assets/images/green.png', sound: 'assets/sounds/green.mp3' },
        { name: 'Yellow', image: 'assets/images/yellow.png', sound: 'assets/sounds/yellow.mp3' }
    ],
    shapes: [
        { name: 'Circle', image: 'assets/images/circle.png', sound: 'assets/sounds/circle.mp3' },
        { name: 'Square', image: 'assets/images/square.png', sound: 'assets/sounds/square.mp3' },
        { name: 'Triangle', image: 'assets/images/triangle.png', sound: 'assets/sounds/triangle.mp3' },
        { name: 'Star', image: 'assets/images/star.png', sound: 'assets/sounds/star.mp3' }
    ],
    animals: [
        { name: 'Cat', image: 'assets/images/cat.png', sound: 'assets/sounds/cat.mp3' },
        { name: 'Dog', image: 'assets/images/dog.png', sound: 'assets/sounds/dog.mp3' },
        { name: 'Rooster', image: 'assets/images/rooster.png', sound: 'assets/sounds/rooster.mp3' },
        { name: 'Cow', image: 'assets/images/cow.png', sound: 'assets/sounds/cow.mp3' }
    ],
    numbers: [
        { name: 'One', image: 'assets/images/1.png', sound: 'assets/sounds/one.mp3' },
        { name: 'Two', image: 'assets/images/2.png', sound: 'assets/sounds/two.mp3' },
        { name: 'Three', image: 'assets/images/3.png', sound: 'assets/sounds/three.mp3' },
        { name: 'Four', image: 'assets/images/4.png', sound: 'assets/sounds/four.mp3' },
        { name: 'Five', image: 'assets/images/5.png', sound: 'assets/sounds/five.mp3' },
        { name: 'Six', image: 'assets/images/6.png', sound: 'assets/sounds/six.mp3' },
        { name: 'Seven', image: 'assets/images/7.png', sound: 'assets/sounds/seven.mp3' },
        { name: 'Eight', image: 'assets/images/8.png', sound: 'assets/sounds/eight.mp3' },
        { name: 'Nine', image: 'assets/images/9.png', sound: 'assets/sounds/nine.mp3' },
        { name: 'Ten', image: 'assets/images/10.png', sound: 'assets/sounds/ten.mp3' }
    ]
};

// Variable to keep track of the currently playing audio
let currentAudio = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-btn');
    menuButtons.forEach(button => {
        button.addEventListener('pointerdown', () => {
            const activityName = button.getAttribute('data-activity');
            startActivity(activityName);
        });
    });
});

// Function to start an activity
function startActivity(activityName) {
    const activity = document.getElementById('activity');
    activity.innerHTML = ''; // Clear previous content

    activities[activityName].forEach(item => {
        const button = document.createElement('button');
        button.className = 'item-btn';
        button.innerHTML = `<img src="${item.image}" alt="${item.name}"><br>${item.name}`;
        button.addEventListener('pointerdown', () => playSound(item.sound));
        activity.appendChild(button);
    });
}

// Function to play sound
function playSound(soundSrc) {
    // Stop the current audio if it's playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Create a new audio object and play it
    currentAudio = new Audio(soundSrc);
    currentAudio.play();
}