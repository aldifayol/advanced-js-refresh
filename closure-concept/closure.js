function init(time) {
  return function (name) {
    console.log(`hello, ${name}! Good ${time}!`);
  };
}

// assign it to a variable and call with paramter
let goodDay = init('🌞');
let goodEvening = init('🌃');

console.dir(goodDay);

goodDay('👸🏻');
goodDay('🐿️');
goodEvening('👨‍🦳');

// we can see function here bahaves like a class 😅
