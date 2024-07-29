document.addEventListener("DOMContentLoaded", function() {
    const sections = ['home', 'about', 'services', 'contacts'];

    sections.forEach(section => {
        const link = document.getElementById(`${section}-link`);
        const div = document.getElementById(section);

        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Clear content of all sections
            sections.forEach(sec => {
                document.getElementById(sec).innerHTML = '';
            });

            // Add content to the clicked section
            switch (section) {
                case 'home':
                    div.innerHTML = '<h2>Home</h2><p>Welcome to our home page!</p>';
                    break;
                case 'about':
                    div.innerHTML = '<h2>About</h2><p>Learn more about us here!!</p>';
                    break;
                case 'services':
                    div.innerHTML = '<h2>Our Services</h2><p>Check out our services here</p>';
                    break;
                case 'contacts':
                    div.innerHTML = '<h2>Contact Us</h2><p>Get in touch with us</p>';
                    break;
            }
            div.scrollIntoView({ behavior: "smooth" });
        });
    });
});

