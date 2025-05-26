const numbers = [1,2,3,4,5];
const sum=numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
}, 0);
console.log(sum);

const fooditem=["pavbhaji","dosa","pizza","burger"];
const name=fooditem.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
},0);
console.log(name);

const age=[20,20.4,20.5,18,19];
const years=age.reduce((acumulator,currentAge)=>{
    return acumulator+currentAge;
},0);
console.log(years);
