const starsContainer = document.getElementById('stars');

    for (let i = 0; i < 60; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * 100 + 'vh';
      star.style.animationDuration = (Math.random() * 5 + 3) + 's';
      star.style.opacity = Math.random();

      starsContainer.appendChild(star);
    }

    const button = document.querySelector('.btn');

    button.addEventListener('mouseenter', () => {
      button.style.boxShadow = '0 15px 30px rgba(255,79,147,0.5)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.boxShadow = '0 10px 20px rgba(255,79,147,0.3)';
    });