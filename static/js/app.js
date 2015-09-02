// // Footer particles animation
// particlesJS.load('footer', 'assets/particles.json');
//
// // Operational tools paralaxe scrolling and animation
// var controller = new ScrollMagic.Controller();
// new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement: "#tools", duration: "200%"})
//   .setTween("#tools > .background", {y: "80%", ease: Linear.easeNone})
//   .addTo(controller);
// new ScrollMagic.Scene({triggerElement: "#home", duration: "100%"})
// 	.setClassToggle(".nav li:nth-child(1) a", "active") // add class toggle
// 	.addTo(controller);
// new ScrollMagic.Scene({triggerElement: "#approach", duration: $('#approach').outerHeight() + $('#help').outerHeight() + $('#tools').outerHeight()})
// 	.setClassToggle(".nav li:nth-child(2) a", "active") // add class toggle
// 	.addTo(controller);
// new ScrollMagic.Scene({triggerElement: "#lab", duration: $('#lab').outerHeight()})
// 	.setClassToggle(".nav li:nth-child(3) a", "active") // add class toggle
// 	.addTo(controller);
// new ScrollMagic.Scene({triggerElement: "#team", duration: $('#team').outerHeight()})
// 	.setClassToggle(".nav li:nth-child(4) a", "active") // add class toggle
// 	.addTo(controller);
// new ScrollMagic.Scene({triggerElement: "#tools"})
// 	.setClassToggle("#tools", "visible") // add class toggle
// 	.addTo(controller);
//
// var slide = document.getElementById('slide');
//
// $(slide).css('top', $(slide).height() + 15);
// $(slide).css('visibility', 'visible');
//
// $(slide)
//   .delay(1000)
//   .animate({top: "-=72"}, 300)
//   .delay(1500)
//   .animate({top: "-=72"}, 300)
//   .delay(400)
//   .animate({top: "-=72"}, 250)
//   .delay(100)
//   .animate({top: "-=72"}, 250)
//   .delay(700)
//   .animate({top: "-=72"}, 300);
