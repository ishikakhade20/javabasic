function display(result){
    console.log("Result is:" + result);
}
function calculate(a,b,callback){
    let sum=a + b;
    callback(sum);
}
calculate(5,6,display);