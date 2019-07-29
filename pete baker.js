Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

let cake1 = cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
let cake2 = cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }); 

console.log(cake1);
console.log(cake2);

function cakes(recipe, available) {
    let cakes1 = [];
    for (let rcpIngr in recipe) { 
        if (recipe[rcpIngr] > available[rcpIngr] || !available[rcpIngr]) { 
            return 0;
        }
        cakes1.push(Math.floor(available[rcpIngr] / recipe[rcpIngr]));
    }
    console.log(cakes1);
    return  Math.min(...cakes1);
}
  