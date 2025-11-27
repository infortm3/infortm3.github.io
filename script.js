document.addEventListener('DOMContentLoaded', function() {
    resetToIntro();
});

function resetToIntro() {
    document.body.classList.remove('scrolled-down', 'team-detail-active');
    window.scrollTo(0, 0);
    const teamDetails = document.querySelectorAll('.team-detail-section');
    teamDetails.forEach(detail => {
        detail.classList.remove('active');
        detail.style.display = 'none';
    });
    const whiteSection = document.getElementById('white-section');
    if (whiteSection) whiteSection.style.display = 'flex';
    clearSnow();
    document.body.style.overflow = 'hidden';
    window.removeEventListener('scroll', preventScrollBack);
}
function createSnow() {
    const snowContainer = document.querySelector('.snow-container');
    if (!snowContainer) return;
    snowContainer.innerHTML = '';
    const snowflakeCount = 150;
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        const size = Math.random() * 4 + 2;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        const startX = Math.random() * 100;
        snowflake.style.left = `${startX}%`;
        snowflake.style.top = `-10px`;
        const duration = Math.random() * 5 + 3;
        snowflake.style.animationDuration = `${duration}s`;
        const delay = Math.random() * 5;
        snowflake.style.animationDelay = `${delay}s`;
        const opacity = Math.random() * 0.8 + 0.2;
        snowflake.style.opacity = opacity;
        snowContainer.appendChild(snowflake);
    }
}
function clearSnow() {
    const snowContainer = document.querySelector('.snow-container');
    if (snowContainer) {
        snowContainer.innerHTML = '';
    }
}
const enterBtn = document.getElementById('enterBtn');
enterBtn.addEventListener('click', function() {
    document.body.classList.add('scrolled-down');
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    window.addEventListener('scroll', preventScrollBack);
});
const backIntroButtons = document.querySelectorAll('.leave-btn');
backIntroButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        document.body.classList.add('no-transition');
        void document.body.offsetWidth;
        resetToIntro();
        setTimeout(() => {
            document.body.classList.remove('no-transition');
        }, 50);
    });
});
function preventScrollBack() {
    if (window.scrollY < document.body.scrollHeight - window.innerHeight) {
        window.scrollTo(0, document.body.scrollHeight);
    }
}
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', function() {
        const team = this.dataset.team;
        document.body.classList.add('team-detail-active');
        document.getElementById('white-section').style.display = 'none';
        const teamDetail = document.getElementById(`${team}-detail`);
        teamDetail.classList.add('active');
        teamDetail.style.display = 'flex';
        if (team === 'e') {
            createSnow();
        }
        document.body.style.overflow = 'hidden';
    });
});
const backButtons = document.querySelectorAll('.back-to-boxes-btn');
backButtons.forEach(button => {
    button.addEventListener('click', function() {
        const teamDetails = document.querySelectorAll('.team-detail-section');
        teamDetails.forEach(detail => {
            detail.classList.remove('active');
            detail.style.display = 'none';
        });
        clearSnow();
        document.getElementById('white-section').style.display = 'flex';
        document.body.classList.remove('team-detail-active');
        document.body.style.overflow = 'auto';
        window.scrollTo(0, document.body.scrollHeight);
    });

});
