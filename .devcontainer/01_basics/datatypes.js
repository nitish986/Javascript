"use strict"; //treat all js code as newer version

// alert("3+3") we are using node js not browser

console.log(3 + 3); 

console.log("Rahul");
// code readability should be high ...it means write a code in the format that can be readable.

let name = "rahul"
let age = 24
let isLoggedIn = false
let state;

// these all are premetive data types..............
// number => 2 to power of 53
// bigint
// string => it can be used in single quote or double quote. but make sure you use it in double quote "".
// boolean = true or false
// null => standalone value. this is the representation value of empty value. 
// undefined=> undefined means that we have declared a variable but haven't assigned any value.
// symbol => for finding the uniqueness

// object

console.log(typeof "rahul");


// undefined is a type and null is a object. whenever you check the type of null and undefined then it will always shows you the type of null is as an object and the type of undefined as undefined.
console.log(typeof null); // output= object
console.log(typeof undefined); //output = undefined


//***************************************** */

let y =Symbol("hello")
console.log(y);
let x = Symbol("hello")
console.log(x);
// Symbol is a unique value

// Symbol is not hoisted

// Symbol is not redeclared

// Symbol is not reinitialized

// Symbol is not block scoped

//objects are collection of values.

//for making any object we oftenly use const and let in block{}

const student = {
    fullName :"rahul kumar",
    age:20,
    cgpa:7.4,

    isPass:true
};
console.log(student);
console.log(student["age"]);
// for accessing the value of object we use dot notation or bracket notation
student["age"]= student["age"]+1;
console.log(student["age"]);
// for changing the value of object we use dot notation or bracket notation

// for adding the value of object we use dot notation or bracket notation
// for deleting the value of object we use delete keyword
student["fullName"] = "rahul yadav";
console.log(student["fullName"]);
delete student["fullName"];
console.log(student["fullName"]);

// for accessing the value of object we use dot notation or bracket notation
// for changing the value of object we use dot notation or bracket notation
student["fullName"]= "rahul";
console.log(student["fullName"]);

//Note:- we can update the value in let and const but we can't redeclare or reinitialize it.
// we can only change the object key of the object but not the value of the object.

//*********************************** */
//practice questions

//01.- create a consr object called "product" to store information shown in the picture.

const product = {
    name : "Parker Jotter Standard CT Ball Pen (Black)",
    color : "black",
    rating: "****",
    Offer : "20%",
    price : 270,
    isAvailable : true,
};

console.log(product);
console.log(typeof (product));

//********************* */
//02:- create an object called profile to store information shown in the figure.

const profile = {
    name : "@Zerry2142",
    followers : 600000,


    following : 4,

    posts : 198,

    isVerified : true,
    isFollow : true,
    isPrivate : false,

    isLive : false,

    isStory : true,
    bio : "Entrepreneur Apna College To educate someone is the highest privilage"

    
};
console.log(profile);







