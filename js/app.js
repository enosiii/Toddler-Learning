// app.js

// Data for each activity
const activities = {

        colors: [
        { name: 'Red, image: '/Toddler-Learning/assets/images/colors/red.png', sound: '/Toddler-Learning/assets/sounds/colors/Red.mp3' },
        { name: 'Blue, image: '/Toddler-Learning/assets/images/colors/blue.png', sound: '/Toddler-Learning/assets/sounds/colors/Blue.mp3' },
        { name: 'Green, image: '/Toddler-Learning/assets/images/colors/green.png', sound: '/Toddler-Learning/assets/sounds/colors/Green.mp3' },
        { name: 'Yellow, image: '/Toddler-Learning/assets/images/colors/yellow.png', sound: '/Toddler-Learning/assets/sounds/colors/Yellow.mp3' },
        { name: 'Orange, image: '/Toddler-Learning/assets/images/colors/orange.png', sound: '/Toddler-Learning/assets/sounds/colors/Orange.mp3' },
        { name: 'Purple, image: '/Toddler-Learning/assets/images/colors/purple.png', sound: '/Toddler-Learning/assets/sounds/colors/Purple.mp3' },
        { name: 'Pink, image: '/Toddler-Learning/assets/images/colors/pink.png', sound: '/Toddler-Learning/assets/sounds/colors/Pink.mp3' },
        { name: 'Brown, image: '/Toddler-Learning/assets/images/colors/brown.png', sound: '/Toddler-Learning/assets/sounds/colors/Brown.mp3' },
        { name: 'Black, image: '/Toddler-Learning/assets/images/colors/black.png', sound: '/Toddler-Learning/assets/sounds/colors/Black.mp3' },
        { name: 'White, image: '/Toddler-Learning/assets/images/colors/white.png', sound: '/Toddler-Learning/assets/sounds/colors/White.mp3' }
        ],
        
        shapes: [
        { name: 'Circle, image: '/Toddler-Learning/assets/images/shapes/circle.png', sound: '/Toddler-Learning/assets/sounds/shapes/Circle.mp3' },
        { name: 'Square, image: '/Toddler-Learning/assets/images/shapes/square.png', sound: '/Toddler-Learning/assets/sounds/shapes/Square.mp3' },
        { name: 'Triangle, image: '/Toddler-Learning/assets/images/shapes/triangle.png', sound: '/Toddler-Learning/assets/sounds/shapes/Triangle.mp3' },
        { name: 'Star, image: '/Toddler-Learning/assets/images/shapes/star.png', sound: '/Toddler-Learning/assets/sounds/shapes/Star.mp3' },
        { name: 'Rectangle, image: '/Toddler-Learning/assets/images/shapes/rectangle.png', sound: '/Toddler-Learning/assets/sounds/shapes/Rectangle.mp3' },
        { name: 'Oval, image: '/Toddler-Learning/assets/images/shapes/oval.png', sound: '/Toddler-Learning/assets/sounds/shapes/Oval.mp3' },
        { name: 'Hexagon, image: '/Toddler-Learning/assets/images/shapes/hexagon.png', sound: '/Toddler-Learning/assets/sounds/shapes/Hexagon.mp3' },
        { name: 'Pentagon, image: '/Toddler-Learning/assets/images/shapes/pentagon.png', sound: '/Toddler-Learning/assets/sounds/shapes/Pentagon.mp3' },
        { name: 'Heart, image: '/Toddler-Learning/assets/images/shapes/heart.png', sound: '/Toddler-Learning/assets/sounds/shapes/Heart.mp3' },
        { name: 'Diamond, image: '/Toddler-Learning/assets/images/shapes/diamond.png', sound: '/Toddler-Learning/assets/sounds/shapes/Diamond.mp3' }
        ],
        
        numbers: [
        { name: 'One, image: '/Toddler-Learning/assets/images/numbers/1.png', sound: '/Toddler-Learning/assets/sounds/numbers/One.mp3' },
        { name: 'Two, image: '/Toddler-Learning/assets/images/numbers/2.png', sound: '/Toddler-Learning/assets/sounds/numbers/Two.mp3' },
        { name: 'Three, image: '/Toddler-Learning/assets/images/numbers/3.png', sound: '/Toddler-Learning/assets/sounds/numbers/Three.mp3' },
        { name: 'Four, image: '/Toddler-Learning/assets/images/numbers/4.png', sound: '/Toddler-Learning/assets/sounds/numbers/Four.mp3' },
        { name: 'Five, image: '/Toddler-Learning/assets/images/numbers/5.png', sound: '/Toddler-Learning/assets/sounds/numbers/Five.mp3' },
        { name: 'Six, image: '/Toddler-Learning/assets/images/numbers/6.png', sound: '/Toddler-Learning/assets/sounds/numbers/Six.mp3' },
        { name: 'Seven, image: '/Toddler-Learning/assets/images/numbers/7.png', sound: '/Toddler-Learning/assets/sounds/numbers/Seven.mp3' },
        { name: 'Eight, image: '/Toddler-Learning/assets/images/numbers/8.png', sound: '/Toddler-Learning/assets/sounds/numbers/Eight.mp3' },
        { name: 'Nine, image: '/Toddler-Learning/assets/images/numbers/9.png', sound: '/Toddler-Learning/assets/sounds/numbers/Nine.mp3' },
        { name: 'Ten, image: '/Toddler-Learning/assets/images/numbers/10.png', sound: '/Toddler-Learning/assets/sounds/numbers/Ten.mp3' }
        ],
        
        animals: [
        { name: 'Rooster, image: '/Toddler-Learning/assets/images/animals/rooster.png', sound: '/Toddler-Learning/assets/sounds/animals/Rooster.mp3' },
        { name: 'Cat, image: '/Toddler-Learning/assets/images/animals/cat.png', sound: '/Toddler-Learning/assets/sounds/animals/Cat.mp3' },
        { name: 'Cow, image: '/Toddler-Learning/assets/images/animals/cow.png', sound: '/Toddler-Learning/assets/sounds/animals/Cow.mp3' },
        { name: 'Dog, image: '/Toddler-Learning/assets/images/animals/dog.png', sound: '/Toddler-Learning/assets/sounds/animals/Dog.mp3' },
        { name: 'Duck, image: '/Toddler-Learning/assets/images/animals/duck.png', sound: '/Toddler-Learning/assets/sounds/animals/Duck.mp3' },
        { name: 'Goat, image: '/Toddler-Learning/assets/images/animals/goat.png', sound: '/Toddler-Learning/assets/sounds/animals/Goat.mp3' },
        { name: 'Elephant, image: '/Toddler-Learning/assets/images/animals/elephant.png', sound: '/Toddler-Learning/assets/sounds/animals/Elephant.mp3' },
        { name: 'Lion, image: '/Toddler-Learning/assets/images/animals/lion.png', sound: '/Toddler-Learning/assets/sounds/animals/Lion.mp3' },
        { name: 'Bird, image: '/Toddler-Learning/assets/images/animals/bird.png', sound: '/Toddler-Learning/assets/sounds/animals/Bird.mp3' },
        { name: 'Monkey, image: '/Toddler-Learning/assets/images/animals/monkey.png', sound: '/Toddler-Learning/assets/sounds/animals/Monkey.mp3' }
        ],
        
        fruits: [
        { name: 'Apple, image: '/Toddler-Learning/assets/images/fruits/apple.png', sound: '/Toddler-Learning/assets/sounds/fruits/Apple.mp3' },
        { name: 'Banana, image: '/Toddler-Learning/assets/images/fruits/banana.png', sound: '/Toddler-Learning/assets/sounds/fruits/Banana.mp3' },
        { name: 'Orange, image: '/Toddler-Learning/assets/images/fruits/orange.png', sound: '/Toddler-Learning/assets/sounds/fruits/Orange.mp3' },
        { name: 'Grapes, image: '/Toddler-Learning/assets/images/fruits/grapes.png', sound: '/Toddler-Learning/assets/sounds/fruits/Grapes.mp3' },
        { name: 'Strawberry, image: '/Toddler-Learning/assets/images/fruits/strawberry.png', sound: '/Toddler-Learning/assets/sounds/fruits/Strawberry.mp3' },
        { name: 'Watermelon, image: '/Toddler-Learning/assets/images/fruits/watermelon.png', sound: '/Toddler-Learning/assets/sounds/fruits/Watermelon.mp3' },
        { name: 'Mango, image: '/Toddler-Learning/assets/images/fruits/mango.png', sound: '/Toddler-Learning/assets/sounds/fruits/Mango.mp3' },
        { name: 'Cherry, image: '/Toddler-Learning/assets/images/fruits/cherry.png', sound: '/Toddler-Learning/assets/sounds/fruits/Cherry.mp3' },
        { name: 'Pear, image: '/Toddler-Learning/assets/images/fruits/pear.png', sound: '/Toddler-Learning/assets/sounds/fruits/Pear.mp3' },
        { name: 'Peach, image: '/Toddler-Learning/assets/images/fruits/peach.png', sound: '/Toddler-Learning/assets/sounds/fruits/Peach.mp3' }
        ],
        
        vehicles: [
        { name: 'Car, image: '/Toddler-Learning/assets/images/vehicles/car.png', sound: '/Toddler-Learning/assets/sounds/vehicles/Car.mp3' },
        { name: 'Bus, image: '/Toddler-Learning/assets/images/vehicles/bus.png', sound: '/Toddler-Learning/assets/sounds/vehicles/Bus.mp3' },
        { name: 'Train, image: '/Toddler-Learning/assets/images/vehicles/train.png', sound: '/Toddler-Learning/assets/sounds/vehicles/Train.mp3' },
        { name: 'Airplane, image: '/Toddler-Learning/assets/images/vehicles/airplane.png', sound: '/Toddler-Learning/assets/sounds/vehicles/Airplane.mp3' },
        { name: 'Boat, image: '/Toddler-Learning/assets/images/vehicles/boat.png', sound: '/Toddler-Learning/assets/sounds/vehicles/Boat.mp3' },
        { name: 'Bicycle, image: '/Toddler-Learning/assets/images/vehicles/bicycle.png', sound: '/Toddler-Learning/assets/sounds/vehicles/Bicycle.mp3' },
        { name: 'Motorcycle, image: '/Toddler-Learning/assets/images/vehicles/motorcycle.png', sound: '/Toddler-Learning/assets/sounds/vehicles/Motorcycle.mp3' },
        { name: 'Truck, image: '/Toddler-Learning/assets/images/vehicles/truck.png', sound: '/Toddler-Learning/assets/sounds/vehicles/Truck.mp3' },
        { name: 'Scooter, image: '/Toddler-Learning/assets/images/vehicles/scooter.png', sound: '/Toddler-Learning/assets/sounds/vehicles/Scooter.mp3' },
        { name: 'Helicopter, image: '/Toddler-Learning/assets/images/vehicles/helicopter.png', sound: '/Toddler-Learning/assets/sounds/vehicles/Helicopter.mp3' }
        
        
        emotions: [
        { name: 'Happy, image: '/Toddler-Learning/assets/images/emotions/happy.png', sound: '/Toddler-Learning/assets/sounds/emotions/Happy.mp3' },
        { name: 'Sad, image: '/Toddler-Learning/assets/images/emotions/sad.png', sound: '/Toddler-Learning/assets/sounds/emotions/Sad.mp3' },
        { name: 'Angry, image: '/Toddler-Learning/assets/images/emotions/angry.png', sound: '/Toddler-Learning/assets/sounds/emotions/Angry.mp3' },
        { name: 'Surprised, image: '/Toddler-Learning/assets/images/emotions/surprised.png', sound: '/Toddler-Learning/assets/sounds/emotions/Surprised.mp3' },
        { name: 'Excited, image: '/Toddler-Learning/assets/images/emotions/excited.png', sound: '/Toddler-Learning/assets/sounds/emotions/Excited.mp3' },
        { name: 'Scared, image: '/Toddler-Learning/assets/images/emotions/scared.png', sound: '/Toddler-Learning/assets/sounds/emotions/Scared.mp3' },
        { name: 'Laughing, image: '/Toddler-Learning/assets/images/emotions/laughing.png', sound: '/Toddler-Learning/assets/sounds/emotions/Laughing.mp3' },
        { name: 'Confused, image: '/Toddler-Learning/assets/images/emotions/confused.png', sound: '/Toddler-Learning/assets/sounds/emotions/Confused.mp3' },
        { name: 'Proud, image: '/Toddler-Learning/assets/images/emotions/proud.png', sound: '/Toddler-Learning/assets/sounds/emotions/Proud.mp3' },
        { name: 'Embarrassed, image: '/Toddler-Learning/assets/images/emotions/embarrassed.png', sound: '/Toddler-Learning/assets/sounds/emotions/Embarrassed.mp3' }
        ],
        
        bodyParts: [
        { name: 'Eyes, image: '/Toddler-Learning/assets/images/bodyParts/eyes.png', sound: '/Toddler-Learning/assets/sounds/bodyParts/Eyes.mp3' },
        { name: 'Nose, image: '/Toddler-Learning/assets/images/bodyParts/nose.png', sound: '/Toddler-Learning/assets/sounds/bodyParts/Nose.mp3' },
        { name: 'Ears, image: '/Toddler-Learning/assets/images/bodyParts/ears.png', sound: '/Toddler-Learning/assets/sounds/bodyParts/Ears.mp3' },
        { name: 'Mouth, image: '/Toddler-Learning/assets/images/bodyParts/mouth.png', sound: '/Toddler-Learning/assets/sounds/bodyParts/Mouth.mp3' },
        { name: 'Hands, image: '/Toddler-Learning/assets/images/bodyParts/hands.png', sound: '/Toddler-Learning/assets/sounds/bodyParts/Hands.mp3' },
        { name: 'Feet, image: '/Toddler-Learning/assets/images/bodyParts/feet.png', sound: '/Toddler-Learning/assets/sounds/bodyParts/Feet.mp3' },
        { name: 'Arms, image: '/Toddler-Learning/assets/images/bodyParts/arms.png', sound: '/Toddler-Learning/assets/sounds/bodyParts/Arms.mp3' },
        { name: 'Legs, image: '/Toddler-Learning/assets/images/bodyParts/legs.png', sound: '/Toddler-Learning/assets/sounds/bodyParts/Legs.mp3' },
        { name: 'Stomach, image: '/Toddler-Learning/assets/images/bodyParts/stomach.png', sound: '/Toddler-Learning/assets/sounds/bodyParts/Stomach.mp3' },
        { name: 'Heart, image: '/Toddler-Learning/assets/images/bodyParts/heart.png', sound: '/Toddler-Learning/assets/sounds/bodyParts/Heart.mp3' }
        ]
        
/*
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
*/

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
