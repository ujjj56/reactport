// gsap
let tl = gsap.timeline();
tl.to(".main_3rd img", {
  duration: 1,
  delay: 3,
  x: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7)
});

tl.to("#main .top_title span", {
  duration: 1,
  delay: -0.5,
  y: 0,
  opacity: 1,
  stagger: 0.1,
  ease: Back.easeOut.config(1.7)
});

tl.to(".menu_btn, .site_btn_a", {
  duration: 1,
  delay: -1.5,
  x: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7)
});

gsap.to(".intro_circle", {
  scrollTrigger: {
    trigger:  ".intro_circle",
    start: "top 80%",
  //  markers: true,
    toggleActions: "restart none none none"
  },
  x: 0,
  rotation: -360,
  duration: 2
});

gsap.to("#intro .next_container ", {
  scrollTrigger: {
    trigger:  "#intro .next_container",
    start: "top 50%",
    // markers: true,
    toggleActions: "restart none none none"
    },
  // delay: 1,
  duration: 1,
  y: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7)
});





