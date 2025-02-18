// app.js

// Data for each activity
const activities = {
    colors: [
        { name: 'Red', image: '/Toddler-Learning/assets/images/red.png', sound: '/Toddler-Learning/assets/sounds/Red.mp3' },
        { name: 'Blue', image: '/Toddler-Learning/assets/images/blue.png', sound: '/Toddler-Learning/assets/sounds/Blue.mp3' },
        { name: 'Green', image: '/Toddler-Learning/assets/images/green.png', sound: '/Toddler-Learning/assets/sounds/Green.mp3' },
        { name: 'Yellow', image: '/Toddler-Learning/assets/images/yellow.png', sound: '/Toddler-Learning/assets/sounds/Yellow.mp3' }
    ],
    shapes: [
        { name: 'Circle', image: '/Toddler-Learning/assets/images/circle.png', sound: '/Toddler-Learning/assets/sounds/Circle.mp3' },
        { name: 'Square', image: '/Toddler-Learning/assets/images/square.png', sound: '/Toddler-Learning/assets/sounds/Square.mp3' },
        { name: 'Triangle', image: '/Toddler-Learning/assets/images/triangle.png', sound: '/Toddler-Learning/assets/sounds/Triangle.mp3' },
        { name: 'Star', image: '/Toddler-Learning/assets/images/star.png', sound: '/Toddler-Learning/assets/sounds/Star.mp3' }
    ],
    animals: [
        { name: 'Cat', image: '/Toddler-Learning/assets/images/cat.png', sound: '/Toddler-Learning/assets/sounds/CatNS.mp3' },
        { name: 'Dog', image: '/Toddler-Learning/assets/images/dog.png', sound: '/Toddler-Learning/assets/sounds/DogNS.mp3' },
        { name: 'Chicken', image: '/Toddler-Learning/assets/images/rooster.png', sound: '/Toddler-Learning/assets/sounds/RoosterNS.mp3' },
        { name: 'Cow', image: '/Toddler-Learning/assets/images/cow.png', sound: '/Toddler-Learning/assets/sounds/CowNS.mp3' }
    ],
    numbers: [
        { name: 'One', image: '/Toddler-Learning/assets/images/1.png', sound: '/Toddler-Learning/assets/sounds/One.mp3' },
        { name: 'Two', image: '/Toddler-Learning/assets/images/2.png', sound: '/Toddler-Learning/assets/sounds/Two.mp3' },
        { name: 'Three', image: '/Toddler-Learning/assets/images/3.png', sound: '/Toddler-Learning/assets/sounds/Three.mp3' },
        { name: 'Four', image: '/Toddler-Learning/assets/images/4.png', sound: '/Toddler-Learning/assets/sounds/Four.mp3' },
        { name: 'Five', image: '/Toddler-Learning/assets/images/5.png', sound: '/Toddler-Learning/assets/sounds/Five.mp3' },
        { name: 'Six', image: '/Toddler-Learning/assets/images/6.png', sound: '/Toddler-Learning/assets/sounds/Six.mp3' },
        { name: 'Seven', image: '/Toddler-Learning/assets/images/7.png', sound: '/Toddler-Learning/assets/sounds/Seven.mp3' },
        { name: 'Eight', image: '/Toddler-Learning/assets/images/8.png', sound: '/Toddler-Learning/assets/sounds/Eight.mp3' },
        { name: 'Nine', image: '/Toddler-Learning/assets/images/9.png', sound: '/Toddler-Learning/assets/sounds/Nine.mp3' },
        { name: 'Ten', image: '/Toddler-Learning/assets/images/10.png', sound: '/Toddler-Learning/assets/sounds/Ten.mp3' }
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
