// const server = {
//     getData() {
//         return new Promise((resolve, reject) => {
//            setTimeout(() => {
//                // resolve(10)
//                reject("something went wrong");
//            }, 2000)
//         })
//     }
// }
//
// const promise = server.getData()
//
// console.log(promise)

//-----------------------------------------------

// const server = {
//     getData() {
//         return new Promise((resolve, reject) => {
//            setTimeout(() => {
//                resolve("somedata")
//            }, 2000)
//         })
//     }
// }
//
// const promise = server.getData()
//
// promise.then((data) => {
//     console.log(data)
// })
//
// console.log(promise)

//------------------------------------------------------------

// const server = {
//     getData() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("some data")
//                 // reject("went wrong");
//             }, 1000)
//         })
//     }
// }
//
// server.getData()
//     .then((data) => {
//         console.log("promise1 resolve " + data)
//         return 10
//     })
//     .then((data) => {
//         console.log("promise1 resolve " + data)
//     })
//     .catch((err) => {
//         console.log("catch " + err)
//     })
//
//

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// delay(1500).then(() => console.log('done'));

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        // res("reject1");
        rej("reject1");
    }, 1000);
});


promise1
    .catch((t) => t + "catch1")
    .catch((t) => t + "catch2")
    .then((t) => t + "then1")
    .finally((t) => t + "finally")
    .then((t) => console.log(t)); /// ??





