// use this function to generate random dishes, with ingredients
export function generateRandomDishes(userAlergies, dishes, numberOfDishes) {
  // generate random dishes, without alergies

  let currentDishCount = 0;
  let randomDishes = {}; // {index: {dishDetail}}
  let visitedDish = new Set(); // (0)

  let dishesLength = dishes.length;

  while (currentDishCount < numberOfDishes && visitedDish.size < dishesLength) {
    // stop the loop 1) when we find the number of dishes we desire
    //               2) when we have visited all the possible dishes in our set

    let randomDishIndex = Math.floor(Math.random() * dishesLength);// 0

    if (visitedDish.has(randomDishIndex)) {
      continue;
    }

    visitedDish.add(randomDishIndex);

    if (randomDishIndex in randomDishes) continue; // not duplicating dish
    let randomDish = dishes[randomDishIndex];

    // check if any of the food ingeredients are present in the user alergies choice
    let foodHasAlergies = randomDish["ingredients"].some(ingredient => userAlergies.has(ingredient));

    if (foodHasAlergies) {
      console.log("Hash Alergi: " + foodHasAlergies + " Index: " + randomDishIndex);
      console.log(randomDish);
      continue;
    }

    // if dish is not in alergies list, and is unique, add
    randomDishes[randomDishIndex] = randomDish;
    currentDishCount += 1;
  }

  return Object.values(randomDishes); // ignore index of the dish and return dish detail
}
