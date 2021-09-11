const ukButton = document.querySelector('.uk-button');

ukButton.addEventListener('click', createFit);

function createFit(event) {
    const typeOfFitness = document.querySelector('#fitness').value;

    const latitude = 40.6782;
    const longitude = 73.9442;
    const caloriesBurned = 500;
    if (typeOfFitness) {
        const response = await fetch('/api/fit', {
            method: 'POST',
            body: JSON.stringify({ typeOfFitness, latitude, longitude, caloriesBurned }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            //NEED TO INPUT THE PAGE THIS REDIRECTS TOO
            document.location.replace('/fit');
        } else {
            alert(response.statusText);
        }
   
} 