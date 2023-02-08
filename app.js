const name = "Keith";
console.log(name);

/* FIZZBUZZ*/
for (let i = 0; i <= 30; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// While Loop
num = 1;
while (num <=15) {
    if(num % 15===0) console.log("FizzBuzz");
    else if(num % 3 ===0) console.log("Fizz");
    else if(num % 5 ===0) console.log("Buzz");
    else console.log(num);
    num++
}