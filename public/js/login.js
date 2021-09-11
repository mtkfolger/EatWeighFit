const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').nodeValue.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
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

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
