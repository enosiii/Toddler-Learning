// hideH1.js

document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-btn');
    const installButton = document.getElementById('installPWA');
    const gameTitle = document.getElementById('game-title');

    menuButtons.forEach(button => {
        button.addEventListener('pointerdown', () => {
            if (gameTitle) {
                gameTitle.style.display = 'none';
            }

            // Resize menu buttons
            menuButtons.forEach(btn => {
                btn.style.width = '100px';
                btn.style.height = '30px';
                btn.style.margin = '5px';
                btn.style.fontSize = '15px';
            });

            // Resize install button
            if (installButton) {
                installButton.style.width = '100px';
                installButton.style.height = '30px';
                installButton.style.margin = '5px';
                installButton.style.fontSize = '15px';
            }
        });
    });
});
