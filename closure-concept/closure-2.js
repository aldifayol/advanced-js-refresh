let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

// even we assign new value to counter, it would not affect the counter in add scope. And it will keep the last value of the closure-data

counter = 134;

console.log(add());
console.log(add());
console.log(add());
