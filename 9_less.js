// PATTERN

// ты идешь на почту, платишь деньги за подписку газеты... газету тебе сразу не дают, она придет только тогда когда идет ее рассылка (происходит событие)
// прошел месяц, газета тебе не понравилась, ты отписалась от газеты(удалила подписку), т.е. когда следующий раз почтальон проверит твою подписку и не увидит что она у тебя активна, он тебе не даст газету


// const button = {
//     subscribers: {
//         click: [],
//     },
//     click() {
//         console.log("событие click")
//         button.subscribers.click.forEach(callback => callback())
//     },
//
//     addEventListener(eventName, callback) {
//         button.subscribers[eventName].push(callback)
//         return () => {
//             button.removeEventListener(eventName, callback)
//         }
//     },
//
//     removeEventListener(eventName, callback) {
//         button.subscribers[eventName] = button.subscribers[eventName].filter(c => c !== callback)
//     }
//
// }
//
// const unsubscribe = button.addEventListener("click", function () {
//     console.log("handler 1")
// })
//
// button.click()
//
// unsubscribe()
//
// button.click()

// EVENTS

// const smallDiv = document.querySelector('#small')
// const mediumDiv = document.querySelector('#medium')
// const bigDiv = document.querySelector('#big')
//
// const link = document.querySelector('#linkId')
//
// function handler (e) {
//     e.preventDefault()
//     // console.log("target:", e.target)
//     // console.log("currentTarget:", e.currentTarget)
//     console.log("link clicked")
// }
//
// smallDiv.addEventListener('click', handler)
// mediumDiv.addEventListener('click', handler)
// bigDiv.addEventListener('click', handler)
//
// link.addEventListener('click', handler)

