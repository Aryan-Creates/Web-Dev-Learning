const fs = require('fs');

console.log(fs)

console.log("Start")
// fs.writeFileSync("aryan.txt", "This is aryannnnnn")
fs.writeFile("aryan1.txt", "This is another aryannn", ()=>{
    console.log("Done")
    fs.readFile("aryan1.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})
fs.appendFile("aryan.txt", "aryan is paranoid", (e, d)=>{
    console.log(d)
})
console.log("End")