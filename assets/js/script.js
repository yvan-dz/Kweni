const canvas = document.getElementById('starry-bg');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('.fixed-bg-section').clientHeight;
}

function createStars() {
    const numberOfStars = 100;
    stars = [];
    for (let i = 0; i < numberOfStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2;
        const speed = Math.random() * 0.5; // Speed of movement
        stars.push({ x, y, radius, speed });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
    }
}

function animateStars() {
    for (const star of stars) {
        // Move the star down and to the right slightly
        star.y += star.speed;
        star.x += star.speed * 0.3;

        // Reset stars when they move out of view
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
        if (star.x > canvas.width) {
            star.x = 0;
            star.y = Math.random() * canvas.height;
        }
    }
    drawStars();
    requestAnimationFrame(animateStars); // Recursively call to keep animating
}

function initStarryBackground() {
    resizeCanvas(); // Adjust canvas size
    createStars();  // Initialize stars
    animateStars(); // Start the animation
}

// Resize canvas on window resize
window.addEventListener('resize', () => {
    initStarryBackground();
});

window.onload = initStarryBackground;


function initStarryBackgroundSmall() {
    const canvasSmall = document.getElementById('starry-bg-small');
    const ctxSmall = canvasSmall.getContext('2d');
    let starsSmall = [];

    function resizeCanvasSmall() {
        canvasSmall.width = window.innerWidth;
        canvasSmall.height = document.querySelector('.services-small-screen').clientHeight;
    }

    function createStarsSmall() {
        const numberOfStars = 100;
        starsSmall = [];
        for (let i = 0; i < numberOfStars; i++) {
            const x = Math.random() * canvasSmall.width;
            const y = Math.random() * canvasSmall.height;
            const radius = Math.random() * 2;
            const speed = Math.random() * 0.5;
            starsSmall.push({ x, y, radius, speed });
        }
    }

    function drawStarsSmall() {
        ctxSmall.clearRect(0, 0, canvasSmall.width, canvasSmall.height);
        for (const star of starsSmall) {
            ctxSmall.beginPath();
            ctxSmall.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
            ctxSmall.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctxSmall.fill();
        }
    }

    function animateStarsSmall() {
        for (const star of starsSmall) {
            star.y += star.speed;
            star.x += star.speed * 0.3;

            if (star.y > canvasSmall.height) {
                star.y = 0;
                star.x = Math.random() * canvasSmall.width;
            }
            if (star.x > canvasSmall.width) {
                star.x = 0;
                star.y = Math.random() * canvasSmall.height;
            }
        }
        drawStarsSmall();
        requestAnimationFrame(animateStarsSmall);
    }

    // Initialize the starry background on small screens
    if (window.innerWidth <= 991) {
        resizeCanvasSmall();
        createStarsSmall();
        animateStarsSmall();
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 991) {
            resizeCanvasSmall();
            createStarsSmall();
            animateStarsSmall();
        } else {
            ctxSmall.clearRect(0, 0, canvasSmall.width, canvasSmall.height);
        }
    });
}

window.onload = initStarryBackgroundSmall;
