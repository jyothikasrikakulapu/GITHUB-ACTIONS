document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const eventSelected = document.getElementById('event').value;

    if (name === '' || email === '' || phone === '' || eventSelected === '') {
        alert('Please fill in all fields.');
        return;
    }

    alert('Registration successful!\n' +
          'Name: ' + name + '\n' +
          'Email: ' + email + '\n' +
          'Phone: ' + phone + '\n' +
          'Event: ' + eventSelected);

    // Optionally, you can add code here to send the form data to a server
});
