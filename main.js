const button = document.querySelector('h1');

button.addEventListener('click', function () {
    button.innerText = 'Clicked'; 
    console.log("copy button clicked");
});

//new Date("2025-01-19T00:00:00".replace(/-/g, '\/').replace(/T.+/, ''));
// => Sat Sep 24 2011 00:00:00 GMT-0700 (MST) - CORRECT DATE.

//selects the calendar
const getDate = document.getElementById('date');
console.log(getDate);



//taking the input and ***
getDate.addEventListener('input', function(e) {
    //clickedDay is the day someone clicks on
    const clickedDay = new Date (e.target.value);  
   // console.log(clickedDay);

    //assigned Monday to index 0, Tuesday to index 1, Wednesday to index 2, Thursday to index 3, Friday to index 4, Saturday to index 5, Sunday to index 6
    let weekDay = clickedDay.getDay();
    //console.log(weekDay);

    //finds out when to end the week(next sunday)
    const daysToNextSunday = (7 - weekDay) % 7;

    //assigns a date to the day at the end of the week(sunday) from the selected date(in ms)
    clickedDay.setDate(clickedDay.getDate() + daysToNextSunday);
    console.log(clickedDay.setDate(clickedDay.getDate() + daysToNextSunday));



}); 


