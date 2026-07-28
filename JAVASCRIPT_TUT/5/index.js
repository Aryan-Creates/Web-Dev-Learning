function id(name){
    console.log("Hey, This is " + name + " .");
    console.log("Very Handsome boy " + name + " .");
    console.log("GL bajaj guy " + name + " .");
    console.log("No bitches " + name + " .");
}
id("aryan");
id("joyboy");

function sum(a, b){
    console.log(a + b);
}
sum(32, 2);

function add(a, b, c = 1){
    // console.log(a + b);
    console.log(a, b, c);
    return a + b + c;
}

result1 = add(4);
result2 = add(5, 1, 10);
result3 = add(3, 3);

console.log("The sum is: ", result1);
console.log("The sum is: ", result2);
console.log("The sum is: ", result3);

const func1 = (x) => {
    console.log("This is an arrow function: ", x);
}

func1(2);
func1(5);
func1(6);