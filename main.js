import { dishes } from './assets/arrays.js';
import { allergies } from './assets/arrays.js';

const button = document.querySelector('h1');

button.addEventListener('click', function () {
    button.innerText = 'Clicked'; 
    console.log("copy button clicked");
}); 

console.log(dishes);
console.log(allergies);

//selects the calendar-------------------------------------------------------------------------------------------------------------------/
const getDate = document.getElementById('date');
console.log(getDate);

//taking the selected date/input and displaying the dates in corresponding divs 
getDate.addEventListener('input', function(e) {
    //clickedDay is the day someone clicks on
    const clickedDay = new Date (e.target.value);  

    //assigned Monday to index 0, Tuesday to index 1, Wednesday to index 2, Thursday to index 3, Friday to index 4, Saturday to index 5, Sunday to index 6
    let weekDay = clickedDay.getDay();

    //finds out when to end the week(next sunday)
    const daysToNextSunday = (7 - weekDay) % 7;

    //assigns a date to the day at the end of the week(sunday) from the selected date(in ms)
    clickedDay.setDate(clickedDay.getDate() + daysToNextSunday);

    //creating an empty array that will store dates later on
    const dates = [];

    let i = 0;

    //the for loop runs through the indexes and increments by 1 until the condition is no longer true- it is taking the date and putting it in the array
    for (let i = 0; i < 7; i++) {
        //turns selected day into a new variable to stop wrong calculations when reselecting a day
        const date = new Date(clickedDay); //copies the selected day into a new object
        date.setDate(clickedDay.getDate() + i); //takes the day of the month from the selected day and adds and index number to it (which then gives us the day of the week)
        dates.push(date.getDate()); //takes the date of the month of the selected day and pushes this to the dates array (which shows up in the colored boxes)
    }

    console.log(dates);

    //grabbing the variables for the days of the week to be used in the colored bubbles
    const sunday = document.getElementById('day1name');
    const monday = document.getElementById('day2name');
    const tuesday = document.getElementById('day3name');
    const wednesday = document.getElementById('day4name');
    const thursday = document.getElementById('day5name');
    const friday = document.getElementById('day6name');
    const saturday = document.getElementById('day7name');

    //placing the dates in the colored boxes
    sunday.innerText = `${dishes[0].name}`;
    monday.innerText = `${dishes[1].name}`;
    tuesday.innerText = `${dishes[2].name}`;
    wednesday.innerText = `${dishes[3].name}`;
    thursday.innerText = `${dishes[4].name}`;
    friday.innerText = `${dishes[5].name}`;
    saturday.innerText = `${dishes[6].name}`;

    //getting variables for the ingredients

    const sundayIngredients = document.getElementById('day1ingredients');
    const mondayIngredients = document.getElementById('day2ingredients');
    const tuesdayIngredients = document.getElementById('day3ingredients');
    const wednesdayIngredients = document.getElementById('day4ingredients');
    const thursdayIngredients = document.getElementById('day5ingredients');
    const fridayIngredients = document.getElementById('day6ingredients');
    const saturdayIngredients = document.getElementById('day7ingredients');

    sundayIngredients.innerText = `${dishes[0].ingredients}`;
    mondayIngredients.innerText = `${dishes[1].ingredients}`;
    tuesdayIngredients.innerText = `${dishes[2].ingredients}`;
    wednesdayIngredients.innerText = `${dishes[3].ingredients}`;
    thursdayIngredients.innerText = `${dishes[4].ingredients}`;
    fridayIngredients.innerText = `${dishes[5].ingredients}`;
    saturdayIngredients.innerText = `${dishes[6].ingredients}`;

    //getting variables for the calories

    const sundayCalories = document.getElementById('day1calories');
    const mondayCalories = document.getElementById('day2calories');
    const tuesdayCalories = document.getElementById('day3calories');
    const wednesdayCalories = document.getElementById('day4calories');
    const thursdayCalories = document.getElementById('day5calories');
    const fridayCalories = document.getElementById('day6calories');
    const saturdayCalories = document.getElementById('day7calories');
    
    sundayCalories.innerText = `Calories:${dishes[0].calories}`;
    mondayCalories.innerText = `Calories:${dishes[1].calories}`;
    tuesdayCalories.innerText = `Calories:${dishes[2].calories}`;
    wednesdayCalories.innerText = `Calories:${dishes[3].calories}`;
    thursdayCalories.innerText = `Calories:${dishes[4].calories}`;
    fridayCalories.innerText = `Calories:${dishes[5].calories}`;
    saturdayCalories.innerText = `Calories:${dishes[6].calories}`;
}); 


//prevents people from clicking days other than sunday
getDate.addEventListener('change', function() {
    const calendarDay = new Date(getDate.value); //taking the clicked day and giving it a date
    
    if (calendarDay.getDay() !== 6) { // 0 is the index for Monday
        alert("Please select a Sunday");
        getDate.value = ""; // clears the input
    }
});
    



