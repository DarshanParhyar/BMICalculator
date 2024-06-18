const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0 || height==="") {
        results.innerHTML = `Please provide a valid height: ${height}`;
    } else if (isNaN(weight) || weight <= 0 || weight==="") {
        results.innerHTML = `Please provide a valid weight: ${weight}`;
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);

        if(BMI<18.6)
        {
          results.innerHTML = `<span>Your BMI is ${BMI} and you're under weight</span>`;
          
        } else if(BMI>=18.6 && BMI <=24.9){
          results.innerHTML = `<span>Your BMI is ${BMI} and weight is normal</span>`;
        }

        else if(BMI>24.9)
        {
          results.innerHTML = `<span>Your BMI is ${BMI} and you're over weight</span>`;
        }
        
        
    }
});
