const btn = document.getElementById('runaway-btn');
let count = 0;

btn.addEventListener('mouseover', () => {
    if (count < 10) {
        // Generate random coordinates within the browser window
        const x = Math.random() * (window.innerWidth - btn.offsetWidth);
        const y = Math.random() * (window.innerHeight - btn.offsetHeight);

        // Apply new position
        btn.style.position = 'fixed';
        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;

        count++;
    } else {
    // Make sure this matches your file name exactly
    window.location.href = "page2-no.html";
}
});