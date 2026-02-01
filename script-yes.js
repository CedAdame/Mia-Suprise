const growBtn = document.getElementById('grow-btn');
let clickCount = 0;

// Starting sizes
let currentWidth = 200; 
let currentHeight = 80;
let currentFontSize = 28;

growBtn.addEventListener('click', () => {
    clickCount++;

    if (clickCount < 10) {
        // Switch to fixed position so it can overlap the whole screen
        growBtn.style.position = 'fixed';
        growBtn.style.zIndex = '9999'; // Ensures it stays on top of text
        
        // Center the button
        growBtn.style.left = '50%';
        growBtn.style.top = '50%';
        growBtn.style.transform = 'translate(-50%, -50%)';

        // Increase size exponentially to cover the screen
        currentWidth += (window.innerWidth / 8); 
        currentHeight += (window.innerHeight / 8);
        currentFontSize += 15;

        growBtn.style.width = `${currentWidth}px`;
        growBtn.style.height = `${currentHeight}px`;
        growBtn.style.fontSize = `${currentFontSize}px`;

        // Change text based on progress
        if (clickCount === 5) growBtn.innerText = "ALMOST THERE! ❤️";
        if (clickCount === 9) growBtn.innerText = "CLICK ONE MORE TIME! ❤️";
        
    } else {
        // On the 10th click, go to the final page
        window.location.href = "page2-yes.html";
    }
});