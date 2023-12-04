// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
const restaurantsName = "Restaurant Name: ";
let i = 0;
while (i < restaurants.length) {
  newRestaurants.push(restaurantsName + restaurants[i]);
  i++;
}
console.log(newRestaurants); //['Restaurant Name: KFC',  'Restaurant Name: MOMO PARADISE',  'Restaurant Name: Nabezo']
