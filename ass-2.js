//gives number check number odd,even without conditon without %
// function check(number)
// {
//     return(number & 1) ===1 ? "odd" : "Even"
// }

// console.log(check(7));

// let num = 5;
// let result = ['Even', 'Odd'][num & 1];
// console.log(result);

// let number = {
//    name: "meet",
//    age: "28"
// }
// let jsonStr = JSON.stringify(number)
// console.log(jsonStr)

// let json1 = JSON.parse(jsonStr)
// console.log(json1)

// create an array buffer of 8 bytes abd let the first 4 bytes as a 32 bit int value 100.then read and print it
// const buffer = new ArrayBuffer(8)
// const view = new DataView(buffer)
// view.setInt32(100)
// console.log(view.setInt32)

// let student = {
//     name: "alice",
//     age: 25,
//     isAdmin: false
// }
// let jsonStr = JSON.stringify(student);
// console.log(jsonStr);

// let Product = {
//     "product": "Book",
//     "price": 99,
//     "inStock": true,
// };
// let jsonStr = JSON.stringify(Product);
// let parsedObject = JSON.parse(jsonStr);
// console.log(parsedObject);

// use number is integer to check whether a given number is integer or not
// let number = 5;
// console.log(Number.isInteger(number));
// let isInteger = Number.isInteger(number);
// console.log(isInteger ? "The number is an integer." : "The number is not an integer.");

// let number = 5;
// console.log(Number.isInteger(number));


// make regex to check whether a given string is a valid email or not
// let email = "test@gmail.com"
// let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// if (emailRegex.test(email)) {
//     console.log("Valid email address");
// }
// else {
//     console.log("Invalid email address");
// }

// make regex to check whether a given string contains only latters (no nubers or symbols)
// let str = "HelloWorld";
// let regex = /^[a-zA-Z]+$/;
// if (regex.test(str)) {
//     console.log("The string contains only letters.");
// }


// make regex to check whether a given string no spaces allow
// let str = "HelloWorld ";
// let regex = /^\S+$/;
// if (regex.test(str)) {
//     console.log("Submitted.");
// } else {
//     console.log("The string contains spaces.");
// }

// function toBinary(num, bits = 4) {
//   return num.toString(2).padStart(bits, '0');
// }
// let number = 20;
// let binary = toBinary(number, 4);
// console.log(`Decimal: ${number}`);
// console.log(`Binary (${binary.length} bits): ${binary}`);
