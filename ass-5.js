// ==================17/7/2025==================

// Create a Base Class of your choice
// class BaseClass {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`${this.name}`);
//         console.log(`${this.age}`);
//     }
// }
// const a = new BaseClass("Meet", 25)
// a.greet();

//Add relevant properties to the class considering 'encapsulation'
        /*   class BaseClass {
                #name; 
                #age;  

                constructor(name, age) {
                    this.#name = name;
                    this.#age = age;
                }

                getDetails() {
                    return `Name: ${this.#name}, Age: ${this.#age}`;
                }

                greet() {
                    console.log(`Heyy, ${this.#name}`);
                    console.log(`Age: ${this.#age}`);
                }
            }

            const a = new BaseClass("Meet", 25);
            a.greet(); 
            // console.log(a.getDetails()); */

// Use constructor to initialize the properties
// class Person {
//     constructor(name, age) {
//     this.name = "Meet"
//     this.age = 25
//     }
//     greet() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }
// const person1 = new Person('Alice', 30);
// console.log(person1.greet());

// Add a prototype method getDetails() that returns class info
/* class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getDetails() {
            return `Name: ${this.name}, Age: ${this.age}`;
        }
} */

// Add static method to the class
  /*  class Person {
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }

                static greet() {
                    console.log("Hello from the Person class!");
                } 
            } */


// Create another class that extends base class
           /* class Base {
                constructor() {
                    this.name = "Base Class";
                }

                greet() {
                    console.log(`Hello from ${this.name}`);
                }
            }  */