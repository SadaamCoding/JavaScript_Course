// How To Use Variable
var name='dada'
console.log(name)
name='sadaam'
console.log(name)

//template literals
let name='sadaam'
let age=18;
let city='mogadisho'

console.log(`my name is ${name} I Am ${age} Years Old I Live In ${city}`)
window.alert(`my name is ${name} I Am ${age} Years Old I Live In ${city}`)

// ternary operator

let age_=22;
let Message=`You Are ${age_>18? "adult":"minor"}`
console.log(Message)

//epresents positive infinity

let test=1/0
console.log(test)


//Represents negative infinity

let test2= -1/0
console.log(test2)



//NaN (Not a Number): Represents a value that is not a legal number.

const result="dada"/7
console.log(result)

// how to use BigInt

let num1=1234566435737373n
let num2=1234566435737373n
console.log(num1+num2)

// how to use Boolean

let ages=5
let adult=ages>18
console.log(adult)


// How To Use Null

let names_=
console.log( names_)

// How To Use Undefined

let names
console.log(names)


// how to use Object

let person={
    name:'sadaam',
    jop:'software Eng'
}
for(let key in person){
    console.log(key +":"+ person[key])
}

// How To Use Array

let users=['sadaam','dada', 'faarax']
 for(let i=0; i<users.length; i++){
    console.log(users[i])
 }


 