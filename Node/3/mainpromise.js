import fs from "fs/promises"

let a = await fs.readFile("aryan.txt")


console.log(a.toString())