## overview/team structure

This project was coordinated through an organization called Chingu, which hosts 6 week remote team projects. Our team consisted of 4 developers, and our task was to complete a fully responsive meal-scheduling app within 6 1-week sprints. The goal was to use frontend languages, tools, or libraries of preference to develop a fully responsive single-page application to facilitate weekly menu scheduling that is user-friendly, accessible, and visually appealing. Minimum functionality criteria included allowing managers the ability to schedule menus from a set of unique dishes for an upcoming week, provide dish details (name, ingredients, calories), and the ability to filter for allergens.  

Since our team had different schedules, we used discord for communication through messaging and voice chats. We used the Agile Methodology to manage our project, which included updating each other with daily standups describing the work we had done and next steps for the project. The coding was completed through pair programming with 2-4 developers per session.

Throughout the project, Trello was used to organize tasks that needed to be done, were being worked on, and were completed.
![screnshot](assets/img/trello.png)


Unfortunately, our team didn't have a UI designer. Instead, our developers created a responsive design ourselves using miro, a collaborative whiteboarding platform, to brainstorm. 

We would meet 5 times a week for multiple hours per session to pair program. We used two extentions called Liveshare and Livepreview, which allowed us to work in real-time and see the site's preview in real-time. Our team used git with gitHub to for version control and sharing our code.

## Describe code

We decided to use HTML, CSS and JavaScript to build this menu planner. 

## HTML

Our main sections consisted of the allergens section, the selection buttons, the menu section, and the footer.

## CSS

For our css, we split it into three documents for each media query. We set it up so that the calendar content would reorganize depending on screen size. In the beginning, we had a some repetitive code in our css, So, during a refactoring process, we created more classes for the commonly used CSS properties in our HTML. This helped us decrease the length and repetition, making our code more efficient.

## JavaScript

We split our Javascript files into modules: util.js, main.js, and arrays.js

### Util.js

Util.js includes the functions that create the menu for the week. It pulls from our arrays.js file, which stores the information for dishes and allergies in arrays.

Variables were set to store the present date, store the user selected allergies, and store the user selected start date. 

The generateRandomDishes function selects random dishes while avoiding allergens. It uses a while loop that will keep picking dishes until either all the dishes for the week are included or there aren't any more meals to check.

visitedDish is an array that prevents duplicate selections from generating.
The foodHasAlergies variable (line 29 util.js) checks if any any of the food ingredients are present in the user's selected allergies. 

(line 59ish in util.js) The generateWeeklyFood function loops through 7 days using a for loop beginning with the selected start date (userPIckedStartDate).

(line 66 util.js)The createWeekdayStructure() function generates the menu UI by creating a list element for each day of the week, adding a div for the Days name, and iterating through the dish ingredients using the .forEach() method to create individual list elements. Then, it adds all the meal information into a div called "bubble" for styling.

### Main.js

userAlergies is an array to store the user selected allergies.
(line 12 main.js) The userPickedStartDate determines what day of the week the user selected start date is. 

(line 19 main.js)calendarStartDatePicker is the date selector. We set it up so that past days are unavailble, in accordance to the project criteria.

ulAlergies renders checkboxes for each allergy.
When a user selects or deselects an allergy, userAlergies gets updated.

(line 71 main.js)Clicking the "Generate Menu" button will turn on the handleGenerateMenuBtnClick() function. This will select random dishes while avoiding allergens, then generate a weekly meal plan starting from the selected day.

Lastly, A fade in animation was added to meal bubbles.

We used Netify to deploy the live app. 

## Conclusion

If we were to expand on this app, we would like to add a feature that lets managers share the menu with people.  

Reflecting on this team experience, our biggest strengths were our consistency in showing up, offering help to each other, and creating an environment that supports constructive feedback. Given the deadline and the short sprints, having a team that was very communicative and eager to help one another were the biggest factors in our team being able to get this far. 
