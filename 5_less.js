//globalLE {startEngine: func()}

// let car = "bmw"
//
// function startEngine() {
//     console.log(`Starting ${car}`)
// }
//
// car = "kia"
//
// startEngine()

//...................................

// let car = "bmw"
//
// function startEngine() {
//
//     const car = "kia"
//
//     return () => console.log(`Starting ${car}`)
// }
//
// const foo = startEngine()
// foo()

//...................................

// let a = 10
// let b = 20
//
// function foo() {
//     let a = 30
//     let b = 40
//     console.log(a)
//     foo2(b)
// }
//
// foo()
//
// function foo2() {
//     console.log(b)
// }

//..............................................

// const counterCreator = () => {
//     let count = 0;
//
//     return () => {
//         console.log(count++);
//     }
// }
//
// const counter = counterCreator();

//.......................................................

// const pow = (x, n) => {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }
//
// console.log(pow(3, 3))

//.....................................................

// const factorial = (num) => {
//     if (num === 1) {
//         return num;
//     } else {
//         return num * factorial(num - 1)
//     }
// };
//
// console.log(factorial(5));