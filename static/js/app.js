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
var navbar = document.getElementById('nav');
window.addEventListener("optimizedScroll", function() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > 0) {
    navbar.classList.add('scrolled', 'font-scrolled');
  } else {
    navbar.classList.remove('scrolled', 'font-scrolled');
  }
});

// Footer particles animation
particlesJS('header', {
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
      "value": 0.3,
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
    "background_color": "#4962AD",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
});


// Operational tools paralaxe scrolling and animation
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({triggerHook: "onEnter", triggerElement: "#tools", duration: "200%"})
  .setTween("#tools > .background", {y: "80%", ease: Linear.easeNone})
  .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#home", duration: "100%"})
	.setClassToggle("nav .main-links li:nth-child(1) a", "active") // add class toggle
	.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#who-are-we", duration: $('#who-are-we').outerHeight() + $('#activities').outerHeight() + $('#we-follow').outerHeight() + $('#tools').outerHeight()})
	.setClassToggle("nav .main-links li:nth-child(2) a", "active") // add class toggle
	.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#lab", duration: $('#lab').outerHeight()})
	.setClassToggle("nav .main-links li:nth-child(3) a", "active") // add class toggle
	.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#team", duration: $('#team').outerHeight()})
	.setClassToggle("nav .main-links li:nth-child(4) a", "active") // add class toggle
	.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#tools"})
	.setClassToggle("#tools", "visible") // add class toggle
	.addTo(controller);

var slide = $('#slide');

$(slide).typed({
  stringsElement: $('#typed-strings'),
  typeSpeed: 10,
  backDelay: 800,
  backSpeed: -10,
  contentType: 'html',
  loop: true,
  showCursor: true,
  cursorChar: " |"
});

// var height = $(slide).height();

// var translateY = function(value) {
//     return 'translateY(' + value + 'px)';
// }

// slide.css('transform', translateY(height));
// slide.css('visibility', 'visible');

// var steps = [];

// slide.children().each(function() {
//   steps.push({
//     height: $(this).height(),
//     delay: $(this).data('delay')
//   });
// });

// var animation = $(slide);
// var level = height;
// steps.forEach(function(e) {
//   level -= e.height;
//   let c = level;
//   animation = animation
//     .delay(e.delay + 300)
//     .queue(function(next) {
//         slide.css('transform', translateY(c));
//         next();
//     });
// });

$('.nav-toggle a').first().on('click', function(e) {
  e.preventDefault();
  $('#nav').toggleClass('show-menu');
});
