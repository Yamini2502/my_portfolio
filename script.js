document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".glitch", { duration: 1.5, y: -100, opacity: 0, ease: "bounce.out" });
  gsap.from(".tagline", { duration: 1, y: 20, opacity: 0, delay: 1 });

  gsap.utils.toArray(".section").forEach((section, i) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      delay: i * 0.1,
      ease: "power2.out",
    });
  });

  gsap.from("nav ul li", {
    opacity: 0,
    y: -20,
    stagger: 0.1,
    duration: 0.6,
    ease: "power2.out"
  });
});
