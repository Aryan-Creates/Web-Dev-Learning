let a = prompt("Enter first number")

let b = prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Invalid input")
}

let sum = parseInt(a) + parseInt(b)

console.log("The sum is ", sum)
function main(){
    let x = 1;
    try{
        console.log("The sum is ", sum*v)
        return true
    }
    catch(error){
        console.log("ERRORRRR")
        return false
    }
    finally{
        console.log("kuch to chl rha h")
    }
}
let c = main()