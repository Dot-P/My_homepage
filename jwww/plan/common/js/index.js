'use strict';

{
  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if (currentIndex > images.length - 1) {
          currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 5000);
  }

  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;

  play();
}

{
  // Intersection Observer API

  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });
}
