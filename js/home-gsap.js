gsap.registerPlugin(ScrollTrigger);

let h2 = document.getElementsByClassName("first_info_heading")
let logo = document.querySelector(".logo");
let getInTouchCont = document.querySelector(".get_in_touch_cont");
let whyChooseUsHeader = document.querySelector(".why-choose-us h2");
console.log(whyChooseUsHeader);

gsap.fromTo(whyChooseUsHeader, 
 { y: 15 }, 
 { 
     y: 0, 
     duration: 2, 
     scrollTrigger: {
         trigger: whyChooseUsHeader,
         start: "top center", // when the top of the element is at the center of the viewport
         toggleActions: "play pause resume reset" // play on enter, pause on leave, etc.
     } 
 }
);
console.log(h2);
[...h2].forEach(element => {
 console.log(element);
 gsap.fromTo(element, {
  opacity: 0.4,
  x: 40
 },{
  opacity: 1,
  x: 0,
  duration: 2
 } 
)
});

gsap.fromTo(logo, 
 { scale: 1.1 },
 { scale: 1, duration: 1 }
);
gsap.fromTo(getInTouchCont, 
 { y: -38 },
 { y: 0, duration: 1 }
);


