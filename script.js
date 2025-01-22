const heading = document.querySelector(".hero-content h1");
console.log(heading); // This should log the <h1> element to the console

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            console.log("Is intersecting:", entry.isIntersecting); // Logs intersection status
            if (entry.isIntersecting) {
                heading.style.animation = "none"; // Reset animation
                setTimeout(() => {
                    heading.style.animation = "fadeInSlideDown 10s ease forwards"; // Apply the animation
                }, 0);
            }
        });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
);

observer.observe(heading);



// JavaScript to change e modal when clicked
// Handle image clicks to open the modal
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function () {
      const image = this.querySelector('img');
      const text = this.querySelector('.image-text'); // Ensure class matches your HTML
      const modalImage = document.getElementById('modalImage');
      const modalText = document.getElementById('modalText');
  
      // Set the modal image and text
      modalImage.src = image.src;
      modalText.textContent = text ? text.textContent : 'No description available';
  
      // Show the modal
      const modal = new bootstrap.Modal(document.getElementById('imageModal'));
      modal.show();
    });
  });
  
  // Reset the modal content when it is dismissed
  document.getElementById('imageModal').addEventListener('hidden.bs.modal', function () {
    document.getElementById('modalImage').src = '';
    document.getElementById('modalText').textContent = '';
  });

  
// Show contact form on page load or based on a specific action (e.g., button click)
document.addEventListener('DOMContentLoaded', function () {
    const messageIcon = document.getElementById('messageIcon');
    const contactForm = document.getElementById('contactForm');
    const closeBtn = document.getElementById('closeBtn');
    const formMessage = document.getElementById('formMessage');

    // Initialize EmailJS
    emailjs.init('your_user_id'); // Replace with your EmailJS user ID

    // Show contact form when message icon is clicked
    messageIcon.addEventListener('click', function () {
        contactForm.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close contact form
    closeBtn.addEventListener('click', function () {
        contactForm.style.display = 'none';
        document.body.style.overflow = ''; // Enable scrolling
    });

    // Automatically close contact form when scrolling
    window.addEventListener('scroll', function () {
        if (contactForm.style.display === 'block') {
            contactForm.style.display = 'none';
            document.body.style.overflow = ''; // Enable scrolling
        }
    });

    // Handle form submission with EmailJS
    formMessage.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        emailjs.sendForm('your_service_id', 'your_template_id', this)
            .then(function (response) {
                alert('Message sent successfully!');
                formMessage.reset(); // Reset form fields
                contactForm.style.display = 'none'; // Close the form
                document.body.style.overflow = ''; // Enable scrolling
            })
            .catch(function (error) {
                alert('Failed to send message. Please try again.');
                console.error(error);
            });
    });
});


// About Js
// Smooth scroll to the About section
document.querySelectorAll('a[href^="#about"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
