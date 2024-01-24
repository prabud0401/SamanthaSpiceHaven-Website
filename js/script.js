// script.js






setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust the time interval as needed)

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Date in Footer
const footerDate = document.querySelector('footer h3');
const currentDate = new Date();
const year = currentDate.getFullYear();

footerDate.textContent = `@prabus | ${year}`;
// Function to change the background color of navBar
function changeBackgroundColor() {
    const navBar = document.getElementById('navBar');
    const colors = ['#FFD700', '#FF6347', '#00FF7F', '#8A2BE2']; // Add more colors as needed
    let index = 0;

    setInterval(() => {
        navBar.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 3000); // Change color every 3 seconds (adjust the time interval as needed)
}

// Function to set a background image for aboutUs section
function setBackgroundImage() {
    const aboutUsSection = document.getElementById('aboutUs');
    aboutUsSection.style.backgroundImage = "url('../images/about-background.jpg')"; // Replace with your actual image path
    aboutUsSection.style.backgroundSize = 'cover';
}

// Call the functions when the page loads
window.onload = function () {
    changeBackgroundColor();
    setBackgroundImage();
};

function openEmailClient() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a mailto link with subject and body
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(`Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`);
    const mailtoLink = `mailto:info@spicehaven.com?subject=${subject}&body=${body}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
}

// Add the following JavaScript code for smooth scrolling
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('.nav-link');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for header height
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const submitButton = document.querySelector('.btn-primary');
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        // Replace the alert with your actual form submission logic
        alert('Form submitted!');
    });
});
