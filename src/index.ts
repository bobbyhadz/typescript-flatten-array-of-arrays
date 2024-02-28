export {};

// EXAMPLE 1 - Flatten an Array of Arrays in TypeScript

const arr = [['a'], ['b', 'c'], ['d']];

const flat = arr.flat();

console.log(flat); // 👉️ ['a', 'b', 'c', 'd']

// ---------------------------------------------------

// // EXAMPLE 2 - The inferred type of the flattened array might not be correct

// const arr = [[[['a', 'b']]], [[['c', 'd']]]];

// // 👇️ const flat: string[]
// const flat1 = arr.flat(Infinity) as string[];

// // 👇️ ['a', 'b', 'c', 'd']
// console.log(flat1);

// ---------------------------------------------------

// // EXAMPLE 3 - Flatten an Array in TypeScript using forEach()

// const arr = [['a'], ['b', 'c'], ['d']];

// const flat: string[] = [];

// arr.forEach((array) => {
//   flat.push(...array);
// });

// console.log(flat); // 👉️ ['a', 'b', 'c', 'd']

// ---------------------------------------------------

// // EXAMPLE 4 - Flatten an Array in TypeScript using reduce()

// const arr = [['a'], ['b', 'c'], ['d']];

// const flat = arr.reduce((accumulator, array) => {
//   return [...accumulator, ...array];
// }, []);

// console.log(flat); // 👉️ ['a', 'b', 'c', 'd']
