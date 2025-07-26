// ==================18/7/2025==================

// set a cookie and expires
// store data in cookies on the browser client browser
// const hey = document.cookie = "username=meet; expires=Fri, 18 July 2025 12:11:58 GMT; path=/;";
// const hey  = document.cookie = "username=meet; max-age=10; path=/;"; //10seconds

//clear all cookies
/* function clearAllCookies() {
     document.cookie.split(";").forEach(cookie => {
         const name = cookie.split("=")[0].trim();
         document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
     });
 }
 clearAllCookies(); */

//localStorage
//store data in localStorage on the browser client browser
// localStorage.setItem('Hey','meet');
// localStorage.setItem('Hey1','meet');
// console.log(a)
// const username = localStorage.getItem('Hey')
// console.log(username)
// localStorage.removeItem('Hey')
// localStorage.clear()


//find missing numbers in an array
// let array = [1,2,5];
// let min = Math.min(...array);
// let max = Math.max(...array);
// let missing = []; // Initialize an empty array to hold missing numbers
// for (let i = min; i <= max; i++) {
//         if (!array.includes(i)) {
//         missing.push(i); // If the number is not in the array, add it to missing
//         }
// }
// console.log(missing); // Output: [3, 4]

// try catch example
/* try {
    let age = 20;
    if (age < 18) throw new Error("Age is Below 18 and Your Age is : " + age);
    else console.log("Your age is : " + age);
} catch (error) {
    console.log("Error : ", error.message);
}

//  Try Catch Finally
/* try {
    let age = 25;
    if (age < 18) {
        throw new Error("Age is Below 18 and Your Age is : " + age);
    }
    console.log("Your age is : " + age);
} catch (error) {
    console.log("Error : ", error.message);
} finally {
    console.log("This is Finally Block");
} */
