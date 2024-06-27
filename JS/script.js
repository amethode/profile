// Theme logic

const change = document.querySelector("#switch");

change.addEventListener("click", changeTheme);

function changeTheme() {
    const particlesConfig = {
        "particles": {
            "number": {
                "value": 20,
                "density": {
                    "enable": true,
                    "value_area": 100
                }
            },
            "color": {
                "value": ["#ff0000","#00ffbb", "#0080ff","#ffa200", "#ffe600", "#e600ff"]
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
                "value": 0.7,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 8,
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
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 10,
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
                    "opacity": 10,
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
    };

    const badges = document.querySelectorAll('.badge');

    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        change.innerHTML = '<i class="fas fa-moon"></i>';
        particlesConfig.particles.line_linked.color = "#000000";
        
        badges.forEach(badge => {
            badge.src = badge.src.replace('dark-mode', 'light-mode');
        });
    } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        change.innerHTML = '<i class="fas fa-sun"></i>';
        particlesConfig.particles.line_linked.color = "#ffffff";
        
        badges.forEach(badge => {
            badge.src = badge.src.replace('light-mode', 'dark-mode');
        });
    }

    particlesJS('particles-js', particlesConfig);
}


// Typewriting effect

const phrases = [
    "Certified Boomer",
    "No-life Deadass",
    "Anti-grass Machine",
];

let currentPhraseIndex = 0;
let currentCharacterIndex = 0;
let typingForward = true;
let cursor = document.getElementById("cursor");
let typewriter = document.getElementById("typewriter");

function type() {
    if (typingForward) {
        if (currentCharacterIndex < phrases[currentPhraseIndex].length) {
            typewriter.textContent += phrases[currentPhraseIndex][currentCharacterIndex];
            currentCharacterIndex++;
            cursor.style.animation = "none";
        } else {
            typingForward = false;
            setTimeout(type, 1000);
            cursor.style.animation = "blink 1s infinite";
            return;
        }
    } else {
        if (currentCharacterIndex > 0) {
            typewriter.textContent = typewriter.textContent.slice(0, -1);
            currentCharacterIndex--;
            cursor.style.animation = "none";
        } else {
            typingForward = true;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            cursor.style.animation = "blink 1s infinite";
            setTimeout(type, 1000);
            return;
        }
    }

    setTimeout(type, typingForward ? 100 : 50);
}

// Custom cursor

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const ring = document.querySelector('.ring');

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    const speed = 0.1;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
    });

    function animate() {
        ringX += (mouseX - ringX) * speed;
        ringY += (mouseY - ringY) * speed;
        ring.style.transform = `translate(${ringX - 15}px, ${ringY - 15}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});

// Disable view source

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {

    if (event.keyCode == 123) {
        event.preventDefault();
    }

    if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        event.preventDefault();
    }

    if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
        event.preventDefault();
    }

    if (event.ctrlKey && event.keyCode == 85) {
        event.preventDefault();
    }
});

setTimeout(type, 2000);
