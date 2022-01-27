// var x = 5;
// var y = 6;
// var z = x + y;
// console.log("Hello there!");

function A(x, Y) {
  // x==12; Y==B; Y is a callback function
  console.log("Received value: %s", x);
  Y(x); // B(12)
}

function B(c) {
  // c==12
  console.log(2 * c); // 24
}

A(12, B);

$.get("asdad", function (data) {});

//normal function
function A(a) {}

// anonymous function
A = function (a) {
  console.log(a);
};

//arrow function or lambda function
A = (a) => {
  console.log(a);
};

function print(x, power) {
  console.log("Value of x: ", x);
  //power(x);
  square(x);
}

function square(a) {
  console.log("Square: ", a * a);
}

function cube(a) {
  console.log("Cube: ", a * a * a);
}
