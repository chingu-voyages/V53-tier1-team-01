const button = document.querySelector('h1');

button.addEventListener('click', function () {
    button.innerText = 'Clicked'; 
    console.log("copy button clicked");
});

//test

document.getElementById('date').addEventListener('change', function(event) {
    const selectedDate = new Date(event.target.value);
    if (isNaN(selectedDate)) return; // Exit if the date is invalid
    
    const daysDivs = ['day1','day2','day3', 'day4', 'day5', 'day6', 'day7', 'day8'];
    
    // clear "food goes here"
    daysDivs.forEach(id => document.getElementById(id).innerHTML = '');
  
    // sets starting day
    let dayIndex = selectedDate.getDay();
    

    daysDivs.forEach((id, index) => {


     // if (dayIndex <= 6) { 
        const currentDate = new Date(selectedDate);
        currentDate.setDate(selectedDate.getDate() + (index + 1) - (dayIndex + 1));
         /*document.getElementById(id).innerHTML = `${(index + 1) - (dayIndex + 1)}`;*/ 
         document.getElementById(id).innerHTML = currentDate.toDateString() + `#${(index + 1) - (dayIndex + 1)}`; 

     // }
      
    });
  });


  