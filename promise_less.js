// function getNumber() {
//     return new Promise((resolve, reject) => {
//         reject('error');
//         setTimeout(() => {
//             resolve(Math.random())
//         }, 2000);
//     })
// }
//
// getNumber().then(n => console.log(n));
// getNumber().then(n => console.log(n))
//
// const repo = {
//     save(data) {
//         localStorage.setItem('some-key', JSON.stringify(data))
//     },
//
//     saveAsync(data) {
//         return new Promise((res, rej) => {
//             try {
//                 localStorage.setItem('some-key', JSON.stringify(data))
//                 res(rej)
//             } catch (err) {
//                 rej(err)
//             }
//         });
//     },
//
//     read(){
//         return new Promise((res, rej) => {
//             const data = localStorage.getItem('some-key')
//             if (!data) {
//                 res(null)
//             } else {
//                 res(JSON.parse(data))
//             }
//         })
//     }
// }
//
// const result = repo.save({name: 'test'})
// if (result) {
//     console.log("SAVED")
// }
//
// const run = async () => {
//     await repo.saveAsync({name: 'test'})
//     console.log("SAVED run")
//
//     const data = await repo.read()
//     console.log(data)
// }
//
// run()


//--------------------------------------------

// setTimeout(() => {
//     console.log(1)
// }, 1000)
//
// setTimeout(() => {
//     console.log(2)
// }, 2000)
//
// setTimeout(() => {
//     console.log(3)
// }, 3000)

// function findUserInDB(id) {
//     const users = [
//         {id:1, name: "Moorish"},
//         {id:2, name: "Ivan"},
//         {id:3, name: "Yulia"},
//         {id:4, name: "Alina"},
//         {id:5, name: "Michail"},
//         {id:6, name: "Nik"},
//         {id:7, name: "Daniel"},
//     ]
//
//     const user = users.find(user => user.id === id)
//
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (user) {
//                 resolve(user)
//             } else {
//                 reject('User not found')
//             }
//         }, 1000)
//     })
// }

// findUserInDB(2).then(user => console.log(user))

// async function run() {
//     try{
//         let user = await findUserInDB(1)
//         console.log(user.name)
//         let user1 = await findUserInDB(2)
//         console.log(user1.name)
//         let user2 = await findUserInDB(3)
//         console.log(user2.name)
//     } catch (err) {
//         console.log(err)
//     }
//
// }
//
// run()

// function wait(n) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, n)
//     })
// }
//
// async function run() {
//     await wait(1000)
//     console.log(1)
//
//     await wait(1000)
//     console.log(2)
//
//     await wait(1000)
//     console.log(3)
// }
//
// run()

//-------------------------------------------------

const api = {
    async save() {
        // Здесь можно добавить логику сохранения
    },
    async read() {
        return {name: 'it-kamasutra'};
    }
};

async function xxx() {
    return 90
}

async function run() {
    // await api.save();
    // console.log("saved");
    // let data = await api.read();
    // console.log('read:', data);

    let a = xxx()
    console.log(a)
}

run();
