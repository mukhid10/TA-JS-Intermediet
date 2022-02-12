//no.1
// const person = {
//     name: "person A",
//     age: 100,
//     favDrinks: [
//       "coffee",
//       "jamu temulawak",
//       "tea"
//     ],
//     greeting: function() {
//       console.log("hello world")
//     }
//   }
  
//   /// EDIT HERE
//   person.name = "Mukhammad Abdul Mukhid"
//   person.favDrinks[1] = "tap water"
//   person.greeting = function(name){
//     return name
//   }  
//   /// STOP 
//   console.log(person.name);
//   console.log(person.age);
//   console.log(person.favDrinks);
//   console.log(person.greeting("John Watson"));

  //no. 2
function getObjectValue(obj) {
 for(let data in obj){
     
    return obj[data]
 }
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee.ingredients.espresso);
const coffeeBrand = getObjectValue(milkBasedCoffee.ingredients.espresso.brand);
const isMilkVegan = getObjectValue(milkBasedCoffee.ingredients.milk.isVegan);

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)

