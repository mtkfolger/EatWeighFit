const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email.signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const height = document.querySelector('#height-signup').value.trim();
    const weight = document.querySelector('#weight-signup').value.trim();
    const age = document.querySelector('#age-signup').value.trim();
    const targetWeight = document.querySelector('#target-weight-signup').value.trim();
    const targetDate = document.querySelector('#target-date-signup').value.trim();
    const idealBody = document.querySelector('#body-option').value.trim();
    const currentBody = document.querySelector('#body-option2').value.trim();

    if (name && email && password && height && weight && age && targetWeight && targetDate && idealBody && currentBody) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ name, email, password, height, weight, age, targetWeight, targetDate, idealBody, currentBody }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
             //NEED TO INPUT THE PAGE THIS REDIRECTS TOO
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
