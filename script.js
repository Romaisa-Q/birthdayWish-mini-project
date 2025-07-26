function celebrate() {
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }

    const button = document.querySelector('.celebration-btn');
    button.innerHTML = '🎉 Happy Birthday! 🎉';
    button.style.background = 'linear-gradient(45deg, #00b894, #55efc4)';

    createBurstEffect();

    setTimeout(() => {
        button.innerHTML = '✨ Thank You! ✨';
        button.style.background = 'linear-gradient(45deg, #fd79a8, #fdcb6e)';
    }, 2000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.backgroundColor = getRandomColor();
    document.body.appendChild(confetti);
    setTimeout(() => { confetti.remove(); }, 4000);
}

function createBurstEffect() {
    const colors = ['#ff6b9d', '#74b9ff', '#55efc4', '#fdcb6e', '#fd79a8'];
    for (let i = 0; i < 20; i++) {
        const burst = document.createElement('div');
        burst.style.position = 'absolute';
        burst.style.width = '10px';
        burst.style.height = '10px';
        burst.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        burst.style.borderRadius = '50%';
        burst.style.left = '50%';
        burst.style.top = '50%';
        burst.style.transform = 'translate(-50%, -50%)';
        burst.style.animation = `burstOut 2s ease-out forwards`;
        burst.style.animationDelay = i * 50 + 'ms';
        document.querySelector('.birthday-card').appendChild(burst);
        setTimeout(() => { burst.remove(); }, 2500);
    }
}

function getRandomColor() {
    const colors = ['#ff6b9d', '#74b9ff', '#55efc4', '#fdcb6e', '#fd79a8', '#a29bfe', '#ff7675'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add burstOut keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes burstOut {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) translateX(${Math.random() * 200 - 100}px) translateY(${Math.random() * 200 - 100}px) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Random confetti generator
setInterval(() => {
    if (Math.random() > 0.7) {
        createConfetti();
    }
}, 800);

// Candle click event
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.cake').addEventListener('click', function () {
        const flame = document.querySelector('.flame');
        flame.style.animation = 'none';
        flame.style.opacity = '0';
        setTimeout(() => {
            flame.style.animation = 'flicker 0.5s ease-in-out infinite alternate';
            flame.style.opacity = '1';
        }, 3000);
    });
});

