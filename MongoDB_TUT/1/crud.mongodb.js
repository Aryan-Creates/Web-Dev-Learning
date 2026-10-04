use("CrudDb")

// console.log(db)
db.createCollection("users")

db.users.insertOne({
    name: "Aryan",
    age: 19,
    city: "noida",
    fees: 200000
})

db.users.insertMany([
    {
        "name": "Rohan",
        "age": 18,
        "city": "Delhi",
        "fees": 100000
    },
    {
        "name": "Mehak",
        "age": 20,
        "city": "Varanasi",
        "fees": 150000
    },
    {
        "name": "Prakhar",
        "age": 19,
        "city": "Mumbai",
        "fees": 180000
    },
    {
        "name": "Sakshi",
        "age": 21,
        "city": "Bangalore",
        "fees": 250000
    }
])

// let a = db.users.find({age: 19})
// console.log(a)

// console.log(a.count())

let b = db.users.findOne({age: 19})

// console.log(b)
db.users.updateOne({age: 18}, {$set:{age: 21}})

db.users.deleteOne({age: 21})