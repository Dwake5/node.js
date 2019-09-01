const name = 'Danny'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Essex'
}

console.log(user)

// Destructuring

const product = {
    label: 'notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock 
// => 
const { label, stock } = product
// When destructuring can do left side = X to default to x. 
// Can do orginalName:xyz to refer to that thing with xyz

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)
// => order notebook 201