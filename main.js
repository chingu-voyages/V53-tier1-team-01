const button = document.querySelector('h1');

button.addEventListener('click', function () {
    button.innerText = 'Clicked'; 
    console.log("copy button clicked");
});


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
    const sunday = document.getElementById('day1');
    const monday = document.getElementById('day2');
    const tuesday = document.getElementById('day3');
    const wednesday = document.getElementById('day4');
    const thursday = document.getElementById('day5');
    const friday = document.getElementById('day6');
    const saturday = document.getElementById('day7');

    //placing the dates in the colored boxes
    sunday.innerText = `Sunday: ${dates[0]}`;
    monday.innerText = `Monday: ${dates[1]}`;
    tuesday.innerText = `Tuesday: ${dates[2]}`;
    wednesday.innerText = `Wednesday: ${dates[3]}`;
    thursday.innerText = `Thursday: ${dates[4]}`;
    friday.innerText = `Friday: ${dates[5]}`;
    saturday.innerText = `Saturday: ${dates[6]}`;
}); 

//prevents people from clicking days other than sunday
getDate.addEventListener('change', function() {
    const calendarDay = new Date(getDate.value); //taking the clicked day and giving it a date
    
    if (calendarDay.getDay() !== 6) { // 0 is the index for Monday
        alert("Please select a Sunday");
        getDate.value = ""; // clears the input
    }
});
    

