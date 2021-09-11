const newFormHandler = async (event) => {
    event.preventDefault();
  
    const logWeight = document.querySelector('#logWeight').value.trim();
  
    if (logWeight) {
      const response = await fetch(`/api/weigh`, {
        method: 'POST',
        body: JSON.stringify({ weight }),
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

  document.querySelector('.logWeightBtn').addEventListener('submit', newFormHandler);