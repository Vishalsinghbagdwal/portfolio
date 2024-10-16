document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Here you would typically send the data to your server
    // For example using fetch or axios
});

function contactDeveloper(developerName) {
    alert(`You have chosen to contact ${developerName}.`);
    // Here you can implement functionality to send a message to the developer
}
