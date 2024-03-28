//returning values

//regular function
// const calcArea = function (raduis) {
//   area = 314 * raduis ** 2;

//   return area;
// };

//arrow function

const calcArea = (raduis) => 314 * raduis ** 2;

const circleArea = calcArea(5);

console.log(`the raduis is : ${circleArea}`);

const greet = () => "hello, world";
const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

const results = greet();
console.log(results);

console.log(bill([10, 15, 30], 0.2));
