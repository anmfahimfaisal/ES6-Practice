// function doubleIt(num){
//     return num*2;

// }

// const doubleIt = function(num){
//     return num*2;
// }


//in ES6

const doubleIt = num => num*2;
const add = (x,y) => x+y;
const result = doubleIt(5);
console.log(result);
const result2 = add(2,3);
console.log(result2);

const give5 = () => 5;
const result3 = give5();
console.log(result3);

//multiline arrow function
const doMath = (x,y) => {

    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;

}

const result4 = doMath(7, 5);
console.log(result4);