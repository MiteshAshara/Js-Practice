// JavaScript Reflect
// Reflect gives you clean, consistent, and functional ways to perform object operations like get, set, delete, and check — without using direct syntax. It's especially useful in meta-programming or when working with proxies

// var details = {
//     name : "meet",
//     city : "rajkot",
// }
// Reflect.set(details, "Rating", "5");
// console.log(details)
// console.log(Reflect.get(details, "name"));
// console.log(Reflect.has(details, "city"));
// Reflect.deleteProperty(details, "city");
// console.log(details);

// meta programming
// metaprogramming in JavaScript (or any language) means writing code that writes or modifies other code

// Proxies
// Proxies allow you to intercept and customize fundamental operations like property access (getting, setting), function calls, and more, on objects.

// When would you use a symbol instead of a regular string as an object key?
// Symbol is a primitive data type introduced in ES6
// It's used to create unique identifiers — no two symbols are ever the same, even if they have the same description.

// const id = Symbol("id");
// const user = {
//     name: "Alice",
//     age: 30,
//     [id]: 122
// };
// console.log(user[id]);

// What is the difference between window.location and document.location?
// The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page
// The document.location provides information about the URL of the current document and allows you to navigate to a new URL

// console.log("window.location.href:", window.location.href);
// console.log("document.location.href:", document.location.href);

// How can you detect if the user is online using JavaScript?
/* <p id="status"></p>
function updateStatus() {
     document.getElementById("status").textContent =
     navigator.onLine ? "Online" : "Offline";
}
window.addEventListener('load', updateStatus);
window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus); */

// Explain how the screen object differs from the window object
// window object represents the browser window or frame in which the JavaScript code is executing
// It provides information about the user's physical screen or monitor, not the browser window.

 /* <div id="output"> </div>
    <script>
        document.getElementById("output").innerHTML =
            "screen height: " + screen.height + "<br>" +
            "screen width: " + screen.width + "<br>" +
            "screen colorDepth: " + screen.colorDepth + "<br>" +
            "screen pixelDepth: " + screen.pixelDepth + "<br>" +
            "screen availHeight: " + screen.availHeight + "<br>" +
            "screen availWidth: " + screen.availWidth;
    </script> */

//explain virtual-dom and real-dom also diffrence
// The Virtual DOM is an in-memory representation of the Real DOM that updates more efficiently by minimizing direct DOM manipulations.
// The Real DOM is the actual UI in the browser,Slower updates,Default browser behavior
// The virtual dom is In memory,Fast updates,Updates only what's changed,Libraries like React, Vue

// Que 6

// const person = {
//   name: "meet",
//   age: 21,
// };
// Reflect.set(person, "role", "intern");
// console.log(person);
// console.log(Reflect.get(person , 'role'));

// Que 7

// const id = Symbol("userId");
// const user = {
//   name: "meet",
//   age: 21,
//   [id]: 23,
// };
// console.log(user[id]);
// console.log(user)
// user["userId"] = 24;
// console.log(user[id]);
// console.log(user);

// console.log("388", user[id]);
// console.log(Object.keys(user));

// Que 8

// console.log(alert(screen.width));  //height
// console.log(alert(screen.height)); // width

// console.log(navigator.userAgent);  // user agent

// console.log(navigator.onLine); // browser online



// Que 9

// const h1 = document.createElement("h1");
// h1.innerText = "Welcome , Intern!";
// document.body.appendChild(h1);

// const btn = document.createElement("button");
// btn.innerText = "Click Me";
// document.body.appendChild(btn);

// btn.onclick = () => {
//   h1.innerText = "You click the btn";
// };
