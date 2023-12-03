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

    let counter = 3;

    let userInput = 'fruits';

    // Using a while loop to wait for a specific user input
    while (userInput !== 'fruits') {
        userInput = prompt('Please enter "fruits" to proceed:');
    }
    
    console.log('User has entered "fruits". Proceeding...');



}

