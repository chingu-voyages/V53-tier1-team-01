import { dishes } from './assets/arrays.js';
import { allergies } from './assets/arrays.js';

const button = document.querySelector('h1');

button.addEventListener('click', function () {
    button.innerText = 'Clicked'; 
    console.log("copy button clicked");
}); 

console.log(dishes);
//console.log(allergies);

//selects the calendar-------------------------------------------------------------------------------------------------------------------/
const getDate = document.getElementById('date');
//console.log(getDate);

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
});

    //console.log(dates);

    //variables for randomizing
    
    /*let sundayMeal = 0;
    let mondayMeal = 1;
    let tuesdayMeal = 2;
    let wednesdayMeal = 3;
    let fridayMeal = 4;
    let saturdayMeal = 5; */
    
    
    //pick 7 meals/items in the array
    //check if there is a duplicate
    //if there is a duplicate reassign
    //assign each result a variable name
    //have code show up in the colored boxes

/* DONT DELETE ================================DONT DELETE======================================
    //Fisher–Yates shuffle (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
    function shuffle(dishes) {
        let theWeeksDishes = dishes.length;
      
        // continue the loop While there are remaining dishes to shuffle
        while (theWeeksDishes != 0) {
      
          // Pick a remaining dish
          let randomIndex = Math.floor(Math.random() * theWeeksDishes);
          theWeeksDishes--;
      
          // And swap it with the current dishes.
            [dishes[theWeeksDishes], dishes[randomIndex]] = [
                dishes[randomIndex], dishes[theWeeksDishes]]; //swaps the element in the last unshuffled position(theWeeksDishes) with a randomly chosen element(randomIndex)
        }
    };
        //calling the function "dishes"
        shuffle(dishes);
      //console.log(dishes); ============DONT DELETEe========================================== */ 


    //allergies

    const treeNuts = document.getElementById('tree-nuts');
    const garlic = document.getElementById('garlic');
    const milk = document.getElementById('milk');
    const gluten = document.getElementById('gluten');
    const corn = document.getElementById('corn');
    const chocolate = document.getElementById('chocolate');

    //const checkBox = document.querySelectorAll('checkbox');

    //test
    document.addEventListener ("DOMContentLoaded", function ()  {
        const checkBoxes = document.querySelectorAll('checkbox');
        const allergiesList = document.querySelectorAll("allergy-list li");

        //add event listener to each checkbox
        [...checkBoxes].forEach(function (checkBox) {
            checkBox.addEventListener("click", function() {
                const filter = checkBox.getAttribute("allergen");
            }
        )
            
        
                // Filter the list items
                allergiesList.forEach('allergen', function() {
                    const category = allergy.getAttribute("allergen");
                    if (filter === "all" || category === filter) {
                        dishes.style.display = ""; // Show the item
                    } else {
                        dishes.style.display = "none"; // Hide the item
                    }
                    console.log('hii');
                });
            });
        });
    



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
    monday.innerText = `${dishes[8].name}`; //has garlic
    tuesday.innerText = `${dishes[26].name}`; //has chocolate
    wednesday.innerText = `${dishes[15].name}`; //has milk
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
    mondayIngredients.innerText = `${dishes[8].ingredients}`;
    tuesdayIngredients.innerText = `${dishes[26].ingredients}`;
    wednesdayIngredients.innerText = `${dishes[15].ingredients}`;
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
    mondayCalories.innerText = `Calories:${dishes[8].calories}`;
    tuesdayCalories.innerText = `Calories:${dishes[26].calories}`;
    wednesdayCalories.innerText = `Calories:${dishes[15].calories}`;
    thursdayCalories.innerText = `Calories:${dishes[4].calories}`;
    fridayCalories.innerText = `Calories:${dishes[5].calories}`;
    saturdayCalories.innerText = `Calories:${dishes[6].calories}`;


//prevents people from clicking days other than sunday
getDate.addEventListener('change', function() {
    const calendarDay = new Date(getDate.value); //taking the clicked day and giving it a date
    
    if (calendarDay.getDay() !== 6) { // 0 is the index for Monday
        alert("Please select a Sunday");
        getDate.value = ""; // clears the input
    }
});


