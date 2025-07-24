// navButtons
document.querySelector('.navButtons[data-target="home"]').classList.add('active-nav');

document.querySelectorAll('.navButtons').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.navButtons').forEach(b => {
            b.classList.remove('active-nav');
        });
        btn.classList.add('active-nav');

        const targetId = btn.getAttribute('data-target');
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const navButtons = document.querySelectorAll('.navButtons');
const sectionIds = [
    'home',
    'about',
    'skills',
    'projects',
    'achievements',
    'experience',
    'resume',
    'contact'
];
const sections = sectionIds.map(id => document.getElementById(id));

function clearActiveNav() {
    navButtons.forEach(btn => btn.classList.remove('active-nav'));
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                clearActiveNav();
                const id = entry.target.id;
                const btn = document.querySelector(`.navButtons[data-target="${id}"]`);
                if (btn) btn.classList.add('active-nav');
            }
        });
    },
    {
        threshold: 0.5
    }
);

sections.forEach(section => {
    if (section) observer.observe(section);
});
document.querySelectorAll('.footer-links ul li').forEach(li => {
    li.addEventListener('click', function () {
        const targetId = li.getAttribute('data-target') || li.textContent.trim().toLowerCase();
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});





//  page1: main
document.getElementById('hello').addEventListener('click', function () {
    alert('Hare Krishna 🙏\nWelcome to my portfolio! Feel free to explore my projects and journey.');
});



// page4: projects
document.getElementById('arrow1').addEventListener('click', function () {
    window.open('https://github.com/ashutoshJha-2025/Java-DSA-Projects', '_blank');
});
document.getElementById('arrow2').addEventListener('click', function () {
    window.open('https://github.com/ashutoshJha-2025/Web-Designs', '_blank');
});
document.getElementById('arrow3').addEventListener('click', function () {
    window.open('https://github.com/ashutoshJha-2025/Thumbnail_Designs/blob/main/20250704_125106.jpg', '_blank');
});




// page5: achievements
document.getElementById('go1').addEventListener('click', function () {
    window.open('/pdf/Java certificate .pdf', '_blank');
});
document.getElementById('go2').addEventListener('click', function () {
    window.open('/pdf/coders arena certificate.pdf', '_blank');
});




//  page 8: contact
// Email js
document.getElementById('quick-email-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const userEmail = document.getElementById('quick-email').value;

    emailjs.send("service_8qv6g85", "template_pjy034e", {
        message: userEmail + "\nI have an project idea lets collab",
    })
        .then(function () {
            alert("Thank you! Your email has been sent.");
            document.getElementById('quick-email-form').reset();
        }, function (error) {
            alert("Failed to send feedback. Please try again.");
        });

});

// --- Feedback Box ---
document.getElementById('feedback-send-btn').addEventListener('click', function () {
    const feedback = document.getElementById('feedback-text').value;
    const feedbackName = document.getElementById('feedback-name').value;
    if (!feedback.trim()) {
        alert("Please write your feedback.");
        return;
    }
    emailjs.send("service_8qv6g85", "template_pjy034e", {
        message: feedback,
        name: feedbackName,
    })
        .then(function () {
            alert("Thank you for your feedback!");
            document.getElementById('feedback-text').value = '';
            document.getElementById('feedback-name').value = '';
        }, function (error) {
            alert("Failed to send feedback. Please try again.");
        });
});



//  Page 6: Experience
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
let autoSlide;

function startAutoSlide() {
    autoSlide = setInterval(() => {
        active = (active + 1) % items.length;
        loadShow();
    }, 3000);
}

function stopAutoSlide() {
    if (autoSlide) clearInterval(autoSlide);
}

function clearListeners() {
    items.forEach(item => {
        item.removeEventListener('mouseenter', stopAutoSlide);
        item.removeEventListener('mouseleave', startAutoSlide);
    });
}

function loadShow() {
    clearListeners(); 
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active-item');
        if (i === active) {
            // Center active item
            items[i].style.transform = 'translateX(0px) scale(1) perspective(16px) rotateY(0deg)';
            items[i].style.zIndex = 10;
            items[i].style.filter = 'none';
            items[i].style.opacity = 1;
            items[i].classList.add('active-item');

            // Add hover listeners only to active item
            items[i].addEventListener('mouseenter', stopAutoSlide);
            items[i].addEventListener('mouseleave', startAutoSlide);

        } else if (i < active) {
            let stt = active - i;
            items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) `;
            items[i].style.zIndex = 10 - stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        } else {
            let stt = i - active;
            items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) `;
            items[i].style.zIndex = 10 - stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
}

loadShow();

next.addEventListener('click', () => {
    active = (active + 1) % items.length;
    loadShow();
});

prev.addEventListener('click', () => {
    active = (active - 1 + items.length) % items.length;
    loadShow();
});

startAutoSlide();




// Touch gesture support for mobile (<=370px)
// if (window.innerWidth <= 370) {
//     let startX = 0;
//     let endX = 0;
//     slider.addEventListener('touchstart', function (e) {
//         startX = e.touches[0].clientX;
//     });
//     slider.addEventListener('touchmove', function (e) {
//         endX = e.touches[0].clientX;
//     });
//     slider.addEventListener('touchend', function (e) {
//         if (endX - startX > 40) {
//             // swipe right, next
//             active = (active + 1) % items.length;
//             loadShow();
//         } else if (startX - endX > 40) {
//             // swipe left, prev
//             active = (active - 1 + items.length) % items.length;
//             loadShow();
//         }
//         startX = 0;
//         endX = 0;
//     });
// }
