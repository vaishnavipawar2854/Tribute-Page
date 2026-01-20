// Enhanced animations and interactivity
window.addEventListener("load", () => {
  const footer = document.querySelector(".footer");
  footer.style.opacity = 0;
  footer.style.transition = "opacity 800ms ease";
  setTimeout(() => {
    footer.style.opacity = 1;
  }, 600);
});

// 3D tilt effect on image hover
const imageCard = document.querySelector(".image-card");

if (imageCard) {
  imageCard.addEventListener("mousemove", (e) => {
    const rect = imageCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    imageCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });
  
  imageCard.addEventListener("mouseleave", () => {
    imageCard.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  });
}

// Parallax effect on scroll
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const glowRing = document.querySelector(".glow-ring");
  
  if (glowRing) {
    glowRing.style.transform = `rotate(${scrolled * 0.5}deg)`;
  }
});

// Add sparkle effect on mouse move over image
const imageContainer = document.querySelector(".image-container");

if (imageContainer) {
  imageContainer.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: #facc15;
      border-radius: 50%;
      pointer-events: none;
      left: ${e.offsetX}px;
      top: ${e.offsetY}px;
      animation: sparkleAnim 0.6s ease-out forwards;
      box-shadow: 0 0 10px #facc15;
    `;
    
    imageContainer.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 600);
  });
}

// Add sparkle animation to stylesheet
const style = document.createElement("style");
style.textContent = `
  @keyframes sparkleAnim {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(3) translateY(-20px);
    }
  }
`;
document.head.appendChild(style);
