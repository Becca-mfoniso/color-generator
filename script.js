document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const colorDisplay = document.getElementById('colorDisplay');

    generateButton.addEventListener('click', () => {
        
        const randomColor = getRandomHexColor();
        document.body.style.backgroundColor = randomColor;
        colorDisplay.textContent = randomColor;
    });

    function getRandomHexColor() {

        const hexChars = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {

            color += hexChars[Math.floor(Math.random() * 16)];
        }
        return color;

    }
});
