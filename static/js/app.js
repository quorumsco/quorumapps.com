// Footer particles animation
particlesJS('footer', {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.2,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
});

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
