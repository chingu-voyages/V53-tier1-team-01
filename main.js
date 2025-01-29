import { dishes } from './assets/arrays.js';
import { allergies } from './assets/arrays.js';
import { generateRandomDishes } from "./util.js";


let userAlergies = new Set();
let userPickedStartDate = 0;
let userPickedEndDate = 7;

const calendarStartDate = document.getElementById('calendarStartDatePicker');
const calendarEndDatePicker = document.getElementById("calendarEndDatePicker");

calendarStartDate.addEventListener('input', function (e) {
    //clickedDay is the day someone clicks on
    const clickedDay = new Date(e.target.value);

    //assigned Monday to index 0, Tuesday to index 1, Wednesday to index 2, Thursday to index 3, Friday to index 4, Saturday to index 5, Sunday to index 6
    let weekDay = clickedDay.getDay();

    let randomDishes = generateRandomDishes(userAlergies, dishes, 7);
    console.log(randomDishes);
    userPickedStartDate = weekDay;
    generateWeeklyFood(randomDishes);
});

calendarEndDatePicker.addEventListener("input", function (e) {
    const clickedDay = new Date(e.target.value);
    userPickedEndDate = clickedDay.getDay();
    let randomDishes = generateRandomDishes(userAlergies, dishes, 7);
    console.log(randomDishes);
    generateWeeklyFood(randomDishes);
});


let ulAlergies = document.getElementById("alergies");
let daysContainer = document.getElementById("days");

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function generateWeeklyFood(randomDishes) {
    daysContainer.innerHTML = "";
    let numberOfDays = Math.abs(userPickedEndDate - userPickedStartDate);

    for (let startDay = userPickedStartDate; startDay <= (userPickedStartDate + numberOfDays); startDay++) {
        let index = startDay % 7;
        daysContainer.appendChild(createWeekdayStructure(days[index], index, randomDishes[index]));
    }

}

function createWeekdayStructure(day, index, dish) {
    // Create the parent list item element
    const li = document.createElement('li');
    li.className = 'weekday';
    li.id = 'div' + (index + 1);

    // Create the first child div with Sunday heading
    const boxDiv = document.createElement('div');
    boxDiv.className = `box ${day.toLowerCase()}`;

    const h3 = document.createElement('h3');
    h3.className = 'h3';
    h3.textContent = day;

    boxDiv.appendChild(h3);
    li.appendChild(boxDiv);

    // Create the bubble div
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'bubble';
    bubbleDiv.id = day;

    // Create the foodinfo child divs
    const dishName = document.createElement('div');
    dishName.className = 'foodinfo';
    dishName.id = 'dayname';
    dishName.innerText = dish.name;


    const dishIngredients = document.createElement('div');
    dishIngredients.className = 'foodinfo';
    dishIngredients.id = 'dayingredients';
    dishIngredients.innerText = dish.ingredients;

    const dishCalories = document.createElement('div');
    dishCalories.className = 'foodinfo';
    dishCalories.id = 'daycalories';
    dishCalories.innerText = dish.calories;

    // Append the foodinfo divs to the bubble div
    bubbleDiv.appendChild(dishName);
    bubbleDiv.appendChild(dishIngredients);
    bubbleDiv.appendChild(dishCalories);

    // Append the bubble div to the list item
    li.appendChild(bubbleDiv);

    // Append the entire structure to the document (e.g., to a parent ul)
    return li;
}


allergies.forEach(allergy => {
    // Create a <li> element
    const li = document.createElement("li");
    li.className = "allergen";

    // Create the <input> checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.id = allergy.toLowerCase().replace(/\s+/g, "-");
    checkbox.value = allergy;

    checkbox.addEventListener("click", handleCheckBoxClick);

    // Create the <p> element for the allergy text
    const p = document.createElement("p");
    p.textContent = allergy;

    // Append the checkbox and <p> to the <li>
    li.appendChild(checkbox);
    li.appendChild(p);

    // Append the <li> to the <ul>
    ulAlergies.appendChild(li);
});

function handleCheckBoxClick(event) {
    console.log("checkbox clicked", event.target.value);
    let checkBoxValue = event.target.value;

    if (userAlergies.has(checkBoxValue)) {
        userAlergies.delete(checkBoxValue);
    } else {
        userAlergies.add(checkBoxValue);
    }

    let randomDishes = generateRamdomDishes(userAlergies, dishes, 7);
    console.log(randomDishes);
    generateWeeklyFood(randomDishes);
}

let btn = document.getElementById("randomDishes");
btn.addEventListener("click", function () {
    let randomDishes = generateRamdomDishes(userAlergies, dishes, 7);
    console.log(randomDishes);
    generateWeeklyFood(randomDishes);
});