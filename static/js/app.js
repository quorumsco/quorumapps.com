// require('typedjs');
//
// $(function() {
//   $('.typed').typed({
//     strings: [
//       'Optimiser les politiques publiques.',
//       'Amplifier son action.',
//       'Générer une dynamique.',
//       'Gagner du terrain.'
//     ],
//     typeSpeed: 30,
//     backSpeed: -30,
//     backDelay: 2000,
//     loop: true
//   });
// });

(function() {
    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("scroll", "optimizedScroll");
})();

// handle event
var navbar = document.getElementsByClassName('navbar')[0];
window.addEventListener("optimizedScroll", function() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

particlesJS.load('footer', 'assets/particles.json');

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement: "#tools", duration: "200%"})
  .setTween("#tools > .background", {y: "80%", ease: Linear.easeNone})
  // .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#home", duration: "100%"})
	.setClassToggle(".nav li:nth-child(1) a", "active") // add class toggle
	// .addIndicators() // add indicators (requires plugin)
	.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#approach", duration: $('#approach').outerHeight() + $('#help').outerHeight() + $('#tools').outerHeight()})
	.setClassToggle(".nav li:nth-child(2) a", "active") // add class toggle
	// .addIndicators() // add indicators (requires plugin)
	.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#lab", duration: $('#lab').outerHeight()})
	.setClassToggle(".nav li:nth-child(3) a", "active") // add class toggle
	// .addIndicators() // add indicators (requires plugin)
	.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#team", duration: $('#team').outerHeight()})
	.setClassToggle(".nav li:nth-child(4) a", "active") // add class toggle
	// .addIndicators() // add indicators (requires plugin)
	.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#tools"})
	.setClassToggle("#tools", "visible") // add class toggle
	// .addIndicators() // add indicators (requires plugin)
	.addTo(controller);

var slide = document.getElementById('slide');

$(slide).css('top', $(slide).height() + 15);
$(slide).css('visibility', 'visible');

$(slide).delay(1000).animate({top: "-=72"}, 300).delay(1500).animate({top: "-=72"}, 300).delay(400).animate({top: "-=72"}, 250).delay(100).animate({top: "-=72"}, 250).delay(700).animate({top: "-=72"}, 300);
// .delay(1000).animate({top: "-=72"}, 250);
