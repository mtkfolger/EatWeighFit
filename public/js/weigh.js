const newFormHandler = async (event) => {
    event.preventDefault();
  
    const weight = document.querySelector('#logWeight').value.trim();
    const height = 5;
    const age = 45;
    const goal_id = 1;
  
    console.log('weigh post test')

    if (weight) {
      const response = await fetch('/api/weigh', {
        method: 'POST',
        body: JSON.stringify({ weight, height, age, goal_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/weigh');
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('.logWeightBtn').addEventListener('click', newFormHandler);