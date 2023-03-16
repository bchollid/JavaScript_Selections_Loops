// console.log("Hello World!\n==========\n");

// // Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let numbers = 0; numbers <=100; numbers++){
    if(numbers % 2 == 1){
        console.log(numbers);
    }
}

// // Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let numbers = 0; numbers <=100; numbers++){
    if(numbers % 3 == 0 && numbers != 0){
        console.log(numbers + 'FIZZ');
    }
    else if(numbers % 5 == 0 && numbers != 0){
        console.log(numbers + 'BUZZ')
    }
    if(numbers % 3 == 0 && numbers % 5 == 0 && numbers != 0){
        console.log(numbers + 'FIZZBUZZ')
    }
}

// // Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let numbers = 0;

while(numbers<=100){
    if(numbers % 3 == 0 && numbers != 0){
        console.log(numbers + 'FIZZ');
    }
    else if(numbers % 5 == 0 && numbers != 0){
        console.log(numbers + 'BUZZ')
    }
    if(numbers % 3 == 0 && numbers % 5 == 0 && numbers != 0){
        console.log(numbers + 'FIZZBUZZ')
    }
    numbers++;
}

// do{
//     if(numbers % 3 == 0 && numbers != 0){
//         console.log(numbers + 'FIZZ');
//     }
//     else if(numbers % 5 == 0 && numbers != 0){
//         console.log(numbers + 'BUZZ')
//     }
//     if(numbers % 3 == 0 && numbers % 5 == 0 && numbers != 0){
//         console.log(numbers + 'FIZZBUZZ')
//     }
//     numbers++;
// } while(numbers<=100);

// // Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500-100) + 100);

for(let i = 0; i<=n; i++){
    if(i == value){
    console.log(`Found the value. It's ${value}.`);
    break;
    }
    if(i == n){
    console.log(`Could not find the value. Value was ${value}, and we only searched between 0 and ${n}`);
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000
console.log(`Fizz Divisor is ${fizzDivisor}. Buzz Divisor is ${buzzDivisor}. Number range is between ${start} and ${end}`)
for(let i = start; i <= end; i++){
    if(i % fizzDivisor == 0){
        console.log(`${i}FIZZ`)
    }
    else if(i % buzzDivisor == 0){
        console.log(`${i}BUZZ`)
    }
    if(i % buzzDivisor == 0 && i % fizzDivisor == 0){
        console.log(`${i}FIZZBUZZ`)
    }
}