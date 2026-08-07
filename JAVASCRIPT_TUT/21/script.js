// let obj = {
//     name : "Aryan",
//     age : 19
// }

// console.log(obj)

// let animal = {
//     eats : true
// };

// let rabbit = {
//     jumps : true
// };

// rabbit.__proto__ = animal;

class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created....")
    }
    eats(){
        console.log("eatingg")
    }
    jumps(){
        console.log("jumpinggg")
    }
}

class lion extends Animal{
    constructor(name){
        super(name);
        console.log("Lion Object is created")
    }

    eats(){
        super.eats()
        console.log("Lion is eating")
    }
}

let a = new Animal("Bunny");

console.log(a)
let l = new lion("shera")
console.log(l)