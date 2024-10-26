// Initialize AOS for scroll animations
AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: true, // Ensures animation only happens once as you scroll down
  });
  
  // Optional: Custom JavaScript animations for button hover effects or interactions
  document.querySelectorAll('.explore-btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
      btn.style.transform = 'scale(1.1)';
      btn.style.transition = 'transform 0.3s';
    });
    btn.addEventListener('mouseout', () => {
      btn.style.transform = 'scale(1)';
    });
  });
  