// promises
// import fetch from "node-fetch";

// const server = {
//     getData() {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 // res({ "somedata": "somevalue" });
//                 rej("something went wrong");
//             }, 1000);
//         });
//     },
// };
//
// server.getData()
//     .then(() => {
//         console.log("then1");
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// .finally(() => {
//     console.log("everything fine");
// })

//...........................................................................

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`HTTP ошибка! Статус: ${response.status}`);
//         }
//         return response.json(); // Получаем JSON-данные
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.error("Ошибка fetch:", err);
//     })
//     .finally(() => {
//         console.log("Запрос завершён");
//     });

//..............................................................................

// fetch("https://yahoo.com")
//     .then((data) => {
//         console.log("data from yahoo", data.url);
//         return fetch("https://bing.com");
//     })
//     .then((data) => {
//         console.log("data from bing", data.url);
//         return fetch("https://google.com");
//     })
//     .then((data) => {
//         console.log("data from google", data.url);
//     });

//..............................................................................

// const foo = async () => {
//     try {
//         const yahooData = await fetch("https://yahoo.com")
//         console.log(yahooData.url)
//         const bingData = await fetch("https://bing.com")
//         console.log(bingData.url)
//         const googleData = await fetch("https://google.com")
//         console.log(googleData.url)
//
//         console.log("it's ok")
//     } catch (error) {
//         console.log(error)
//     }
// }
//
// foo()

//..............................................................................

// Promise.all([
//     fetch("https://yahoo.com"),
//     fetch("https://bing.com"),
//     fetch("https://google.com")
// ])
//     .then(bigData => console.log(bigData))
//     .catch(error => console.log(error))


// Promise.any([
//     fetch("https://yahoмo.com"),
//     fetch("https://binчg.com"),
//     fetch("https://googиle.com")
// ])
//     .then(data => console.log(data.url))
//     .catch(digError => console.log(digError))

// Promise.race([
//     fetch("https://yahoo.com"),
//     fetch("https://bing.com"),
//     fetch("https://google.com")
// ])
//     .then(data => console.log(data.url))
//     .catch(error => console.log(error))

// Promise.allSettled([
//     fetch("https://yahoo95785.com"),
//     fetch("https://bing.com"),
//     fetch("https://google.com")
// ])
//     .then(bigArray => console.log(bigArray))
//     .catch(error => console.log("catch" + error))
//
