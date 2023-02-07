                    /* Intro to JavaScript */

console.log("Hello World")

let myName = "Keith"
const anotherName = "Ohz"
console.log(myName)
console.log(anotherName)

//  const and let 
//  let means it can be updated 
//  const means is better not be 

let someVariable;
someVariable = "5";
someVariable += 3;
someVariable -= 2;

// prompt is a bult in function 
// let userName = prompt("Enter your username")
// someVariable = userName.length
// console.log(userName);
console.log(typeof someVariable);
console.log(someVariable);

// Adding Strings together = String concatenation
let firstName = "Zooty"
let LastName = "World"
let fullName = firstName + " " + LastName
console.log(fullName);

// Datatypes 
// Booleans - is this true or false 
someCode = true
if(someCode){
    // run this code 

}else{
    // run this code 
}

// Objects 
let objectExmaple = {
    key: "value"
}
// Arrays 
let thisItem = [1,2,3,45,89,[10,11]]
thisItem.forEach((item,idx) => console.log(`value is item ${item} and the index is ${idx}`));

// let thisItem2 = [ 1,"something", {a:"b"}, [4,5],7]
// for(let i = 0; i < thisItem2.length; i++){
//     console.log(`The value is ${thisItem2[i]} and the index is ${i}`)
// }


// if("+" && typeof item1 === "string" && typeof item2 === 'number') {
//     item2.toString()
// } else if("-" && typeof item1 === "string" && typeof item2 === 'number') {
//     // parseInt(item1);
//     // parseFloat(item1).toFixed(2);
// }










