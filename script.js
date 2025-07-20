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


// --- Quick Email Form ---
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

