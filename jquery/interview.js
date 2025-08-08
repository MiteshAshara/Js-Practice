//recursetion use stack or display 1 to 10 without loop
// const PrintNumber = (N) => {
//     if (N == 0) return
//     console.log(N) //10 to 1
//     PrintNumber(N - 1)
//     console.log(N);   //1 to 10
// }
// PrintNumber(10)

// const myArr = [1, 2, 3, [4, 5, 6, [7, 8, 9], 10], 11, 12, [13, 14]]
// const flattenArray = (arr) => arr.reduce((prev, itr) => {
//     if (Array.isArray(itr)) {
//         prev.push(...flattenArray(itr))
//     } else {
//         prev.push(itr)
//     }
//     return prev
// }, [])
// console.log(flattenArray(myArr)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


// create a tree structure
    //     A
    //    / \
    //   B    C
    //  / \  / \
    // D   E F  G

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }
// const tree = new Node('A')
// console.log(tree.left = new Node('B'))
// console.log(tree.right = new Node('C'))
// console.log(tree.left.left = new Node('D'))
// console.log(tree.left.right = new Node('E'))
// console.log(tree.right.left = new Node('F'))
// console.log(tree.right.right = new Node('G'))


// const duplicateArr = [5, 5, 3, 3, 2, 1, 1, 4, 4, 6, 6, 7, 7, 8, 8]
// Array.prototype.sortUnique = function() {
//     return [...new Set(this)].sort((a, b) => a - b)
// }
// console.log(duplicateArr.sortUnique()) // [1, 2, 3, 4, 5, 6, 7, 8]

// find the maximum repeated in num only one number whose repated shortest way
// const arr = [1, 2, 3, 4, 2, 2, 2, 2, 2, 3, 3, 3, 3, 5, 5, 3, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
// const maxRepeated = arr.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1
//     return acc
// }, {})
// const maxKey = Object.keys(maxRepeated).reduce((a, b) => maxRepeated[a] > maxRepeated[b] ? a : b)
// console.log(maxKey) // 4

// const maxRepeated = arr.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1
//     return acc
// }, {})
// console.log(maxRepeated)

//make pair of each 3 print its maxium total
// const pair = [5, 3, 5, 2, 4, 6, 2, 5, 0]

// let maxTotal = -Infinity;
// let maxGroup = [];

// for (let i = 0; i <= pair.length - 3; i++) {
//   const group = pair.slice(i, i + 3);
//   const total = group.reduce((a, b) => a + b, 0);
  
//   if (total > maxTotal) {
//     maxTotal = total;
//     maxGroup = group;
//   }
// }

// console.log("Maximum sum:", maxTotal);
// console.log("From group:", maxGroup);

// const highestRepeatedChar = (str) => {
//     const charCount = {};
//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     return Object.keys(charCount).reduce((a, b) => charCount[a] > charCount[b] ? a : b);
// }
// console.log(highestRepeatedChar(name));

// find heighest time repated character simplest way less to less code interview also how many times if bo repate display empty
// const highestRepeatedChar = s => {
//   const m = {}; for (c of s) m[c] = (m[c]||0)+1;
//   const e = Object.entries(m).reduce((a,b)=>b[1]>a[1]?b:a);
//   return e[1] > 1 ? {char:e[0], count:e[1]} : {};
// };
// console.log(highestRepeatedChar("Hey Meet")); // { char: 'e', count: 2 }

// class Person1{
//     constructor(name) {
//         this.name = name;
//     }
//     fn()
//     {
//         console.log("Hardik");
        
//     }
// }
// const person = new Person1("Hardik1");
// // const copyfn = person.fn //Hardik
// const copyfn = person.fn.bind(person) //Hardik
// copyfn(); 