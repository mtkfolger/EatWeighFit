

const createEat = async (event) => {
  console.log("working")
    event.preventDefault();

    const food_name= document.querySelector('#foodinput').value;
    const calories = document.querySelector('#calorieinput').value;
    
    if (food_name && calories) {
    const response = await fetch(`/api/eat`, {
      method: 'POST',
      body: JSON.stringify({ food_name, calories }),
      headers: {'Content-Type': 'application/json'},
    });
    
    if (response.ok) {
      document.location.replace('/eat');
    } else {
      alert('Failed to add food');
    }
  }
}

  const eatBtn = document.querySelector('#eatButton');
  eatBtn.addEventListener('click', createEat);