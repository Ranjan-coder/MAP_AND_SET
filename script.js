// QN-1
let str = new Set(["a","b","c","a","d","e","e","c","f","b"])
console.log(str);

// ---------------

// QN-2
let str1 = ["a","b","c","a","d","e","e","c","f","b"]
const hash = Object.fromEntries([ ...str1.reduce((map, key) => map.set(key, (map.get(key) || 0) + 1), new Map()) ]);

// let result = str1.map().reduce(function (acc, curr) {
//     return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
//   }, {});
//   console.log(result)


