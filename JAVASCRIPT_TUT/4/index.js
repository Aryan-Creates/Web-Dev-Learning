console.log("Hello Mr. Robot")

let a = 1;

for(let i = 0; i < 100; i++){
    console.log(a + i);
}

let obj = {
    name : "Aryan",
    role : "Play",
    salary : 9201124
}

for(const key in obj){
    const element = obj[key];
    console.log(key, element)
}

for(const key in obj){
    console.log(key)
}

for(const c of "dholakpur"){
    console.log(c);
}

let f = 2;
while(f < 9){
    console.log(f);
    f++;
}

let u = 0;
do{
    console.log(u);
    u++;
} while(u < 6)