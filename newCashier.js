//https://www.codewars.com/kata/new-cashier-does-not-know-about-space-or-shift/train/javascript

function getOrder(input) {
  let menu = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke"
  ];
  let output = [];
  let currWord = "";
  for (let i = 0; i < input.length; i++) {
    currWord += input[i];
    let found = menu.findIndex(menuItem => currWord === menuItem.toLowerCase());
    if (found > -1) {
      output.push(menu[found]);
      currWord = "";
    }
  }
  output.sort((a, b) => {
    let aPlace = menu.indexOf(a);
    let bPlace = menu.indexOf(b);
    if (aPlace < bPlace) return -1;
    if (aPlace > bPlace) return 1;
    if (aPlace === bPlace) return 0;
  });
  return output.join(" ");
}

console.log(
  getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")
);
//"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
console.log(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"));
//"Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");
