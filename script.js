'use strict'

console.log('hello');

for (let i=0; i< 12; i++) {
    console.log('counting forward: ${i}');
}
for (let i = 12; i >= 0; i--) {
    console.log('counting down: ${i}');
}

const fruits=['Apple', 'Bannana', 'Cherry','ORANGE','PEARS'];

for(let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
    console.log('the current value of i;',i);

    if(i< fruits.length -1){
        console.log('Fruits is still counting');
           console.log(i,'inside the if statement');

    }

    let counter = 1;

    let userInput = 'apple';

    // Using a while loop to wait for a specific user input
    while (userInput !== 'fruits') {
        userInput = prompt('Please enter "fruits" to proceed:');
    }
    
    console.log('User has entered "fruits". Proceeding...');

// Generating a multiplication table for numbers 1 through 10
for (let i = 1; i <= 10; i++) {
    // Outer loop: Iterate through the multiplicand (1 through 10)
    for (let j = 1; j <= 10; j++) {
        // Inner loop: Iterate through the multiplier (1 through 10)
        const result = i * j;
        console.log(`${i} * ${j} = ${10}`);
    }
    // Output a separator line after each row
    console.log('------------------');
}



}

