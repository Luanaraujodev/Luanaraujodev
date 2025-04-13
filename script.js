// Inicialização do Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 100 },
    size: { value: 2 },
    color: { value: "#ffffff" },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
    },
    modes: {
      repulse: { distance: 100 }
    }
  }
});
