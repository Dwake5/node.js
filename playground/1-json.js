const fs = require('fs')
// const book = {
//     title: "Ego is the enemy",
//     author: 'Ryan holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)


// 1. Load and parse the JSON data
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

// 2. Change the name and age property to mine
user.name = 'danny'
user.age = 27

// 3. Stringify it and overwrite the original
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)

// 4. Test your work by viewing data in the JSON file
// Working after terminal 'node 1-json.js' 

