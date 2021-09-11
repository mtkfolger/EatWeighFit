
const createFit = async (event) => {
    event.preventDefault();

    const workout_type = document.querySelector('#fitness-option').value;

    const latitude = 40.6782;
    const longitude = 73.9442;
    const calories_burned = 500;

    if (workout_type && latitude && longitude && calories_burned) {
        const response = await fetch('/api/fit', {
            method: 'POST',
            body: JSON.stringify({ workout_type, latitude, longitude, calories_burned }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            //NEED TO INPUT THE PAGE THIS REDIRECTS TOO
            document.location.replace('/fit');
        } else {
            alert(response.statusText);
        }
   
} 
}

const ukButton = document.querySelector('.fitness-btn');

ukButton.addEventListener('click', createFit);