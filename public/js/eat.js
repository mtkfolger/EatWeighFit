const ukButton = document.querySelector('.uk-button');

ukButton.addEventListener('click', createEat);

async function createEat(event) {
    event.preventDefault();
    const food_name= document.querySelector('#food_name').value;
    const calories = document.querySelector('#calories').value;
    
    const response = await fetch(`/api/eat`, {
      method: 'POST',
      body: JSON.stringify({
        food_name,
        calories,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add food');
    }
  }
  
  document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);