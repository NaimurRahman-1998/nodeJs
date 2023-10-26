const people = ['jon', 'tom', 'sam', 'ron'];

// console.log(module);
module.exports = people;

// (function (require, module, __dirname, __filename) {
//   const people = ['jon', 'tom', 'sam', 'ron'];

//   console.log(module);
//   module.exports = people;          /* this is what happens when any .js file is run */
//   return module.exports;            /* an iife function is called automatically which passes some methods */
// })();                               /* so when we do not exports any thing , it simply returns an empty object */
