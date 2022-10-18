
// console.log(1 == '1');
// console.log(1 === '1');
// console.log(1 == true);
// console.log(1 === true);
// console.log(typeof(1));
// console.log(typeof(true));

// !== compares values and type, ensures that they are not the same

// let number1 = 6;
// let number2 = 7;
// let sum = number1 + number2;

// const result = number1 + " + " + number2 " = " + sum;
// console.log(result);

// const result2 = `${number1} + ${number2} = ${sum}`;
// console.log(result2);

// functions (assign function)
// function addTwo(x){
//     return x + 2;
// }

// console.log(addTwo(5));

// function add(x,y,z) {
    // console.log(typeof(z));

    // if (z === undefined)
    //     z = 0;


//     return x + y + (typeof(z) === 'undefined' ? 0:z);
// }

// console.log(add(1,2,3));
// console.log(add(1,2));


// let num = 7;
// ternary operator
// base formula = console.log(num%2==0?'true':'false');
// condition ? true: false
// console.log(num%2==0?'even':'odd');

// for loop

// for (let index = 0; index <7; index++) {
//     console.log(index);
// }

// objects
// 
//for...of iterates over property values

// const colours = ['red', 'yellow', 'green', 'blue'];
// for (const colour of colours) {
//     console.log(colour)
// }

// const car = { make:'Ford', model: 'Mustang' };
// for (const prop in car) {
//     console.log(`${prop}: ${car[prop]}`)
    
// }

// console.log(car.make);
// console.log(car['make']);

"rooms"; 
    {
      "id": "Hallway",
      "name": "Hallway",
      "description": "You are in a long hallway. There are family pictures on all of the walls.",
      "exits": [
        {
          "isLocked": false,
          "direction": "North",
          "adjacentRoom": "Bedroom"
        },
        {
          "isLocked": true,
          "direction": "East",
          "adjacentRoom": "Bathroom",
          "keyId": "1234"
        }
      ]
    };


for (const key of room) {
    if(key!== 'exits')
        console.log(`${prob}: ${room[prop]}`);
        else{
            for (const exit of room[prop]) {
                for (const exitProp of exit) {
                    console.log(`${exitProp}: ${exit[exitProp]}`);
                }                
            }
        }
    
}


