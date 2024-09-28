const canvas = document.getElementById('starry-bg');
const ctx = canvas.getContext('2d');
let stars = [];

// Function to resize the canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('.fixed-bg-section').clientHeight;
}

// Create stars for the large screen
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

// Draw stars for large screen
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
    }
}

// Animate stars for large screen
function animateStars() {
    for (const star of stars) {
        star.y += star.speed;
        star.x += star.speed * 0.3;

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
    requestAnimationFrame(animateStars);
}

// Function to initialize the starry background for large screens
function initStarryBackground() {
    resizeCanvas(); 
    createStars();  
    animateStars(); 
}

// Smaller screen starry background logic
function initStarryBackgroundSmall() {
    const canvasSmall = document.getElementById('starry-bg-small');
    const ctxSmall = canvasSmall.getContext('2d');
    let starsSmall = [];

    // Resize canvas for small screen
    function resizeCanvasSmall() {
        canvasSmall.width = window.innerWidth;
        canvasSmall.height = document.querySelector('.services-small-screen').clientHeight;
    }

    // Create stars for small screen
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

    // Draw stars for small screen
    function drawStarsSmall() {
        ctxSmall.clearRect(0, 0, canvasSmall.width, canvasSmall.height);
        for (const star of starsSmall) {
            ctxSmall.beginPath();
            ctxSmall.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
            ctxSmall.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctxSmall.fill();
        }
    }

    // Animate stars for small screen
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

    // Initialize the starry background for small screens
    resizeCanvasSmall();
    createStarsSmall();
    animateStarsSmall();
}

// Combined window onload to initialize both backgrounds
window.onload = function () {
    if (window.innerWidth > 991) {
        initStarryBackground(); // Large screens
    } else {
        initStarryBackgroundSmall(); // Small screens
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 991) {
            initStarryBackground(); // Re-initialize for large screens
        } else {
            initStarryBackgroundSmall(); // Re-initialize for small screens
        }
    });
};

window.addEventListener('load', () => {
    // Show preloader for 3 seconds, then load page smoothly
    setTimeout(() => {
        // Add a class to fade out preloader
        document.body.classList.add('loaded');
        
        // Fade in the main content
        document.querySelector('main').style.opacity = '1';

        // Wait for the page to load, then initialize AOS
        setTimeout(() => {
            // Re-initialize AOS after the preloader is gone
            AOS.refreshHard(); // This will forcefully reinitialize AOS to detect element visibility
        }, 100); // Delay to ensure elements are visible before AOS refreshes
    }, 4000); // Preloader duration (3 seconds)
});

