'use strict';

for (let i=0; i< 12; i++) {
    console.log('counting forward: ${i}');
}
for (let i = 12; i >= 0; i--) {
    console.log('counting down: ${i}');
}

const fruits=['Apple', 'Bannana', 'Cherry','Date'];

for(let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
    console.log('the current value of i;',i);

    if(i< fruits.length -1){
        console.log('Fruits is still counting');
        console.log(i,'inside the if statement');

    }
}

