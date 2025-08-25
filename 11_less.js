// Function constructors, Class.

// const car1 = {
//     brand: 'bmw',
//     maxSpeed: 200,
//     startEngine() {
//         console.log(`start ${this.brand}`)
//     }
// }
// const car2 = {
//     brand: 'kia',
//     maxSpeed: 150,
//     startEngine() {
//         console.log(`start ${this.brand}`)
//     }
// }

// function createCar(brand, maxSpeed) {
//     const car = {
//         brand,
//         maxSpeed,
//         startEngine() {
//           console.log(`start ${this.brand}`)
//         }
//     }
//     return car
// }

// const bmw = createCar('bmw', 200)
// const kia = createCar('bmw', 200)

// console.log(bmw)
// console.log(kia)

// console.log(bmw.startEngine === kia.startEngine)
// console.log(bmw === kia)




// function CarCreator(brand, maxSpeed) {
//     this.brand = brand
//     this.maxSpeed = maxSpeed
//     // this.startEngine = function () {
//     //     console.log(`start ${this.brand}`)
//     // }
// }

// CarCreator.prototype.startEngine = function () {
//         console.log(`start ${this.brand}`)
//     }

// const bmw = new CarCreator('bmw', 200)
// const kia = new CarCreator('kia', 150)



// console.log(bmw)
// console.log(kia)

// bmw.startEngine()
// kia.startEngine()
// console.log(bmw.startEngine === kia.startEngine)


// class Car {
//     #wheels = 4
//     constructor(brand, maxSpeed) {
//         this.brand = brand
//         this.maxSpeed = maxSpeed
//     }

//     startEngine() {
//         console.log(`start ${this.brand}`)
//     }

//     get wheels() {
//         return this.#wheels
//     }

//     set wheels(value) {
//         if(value > 5) {
//             throw new Error('<= 5')
//         }
//         this.#wheels = value
//     }

//     static compareCars(car1, car2) {
//       car1.maxSpeed === car2.maxSpeed
//      ? console.log(`Cars have same speed`)
//      : car1.maxSpeed > car2.maxSpeed
//      ? console.log(`${car1.brand} is faster`)
//      : console.log(`${car2.brand} is faster`);
//  }


// }

// const bmw = new Car('bmw', 200)
// const kia = new Car('kia', 150)

// console.dir(Car)



// // console.log(bmw.wheels)

// // bmw.wheels = 6

// // console.log(bmw.wheels)


// Car.compareCars(bmw, kia)



class Car {

    constructor(brand, maxSpeed) {
        this.brand = brand
        this.maxSpeed = maxSpeed
    }

    startEngine() {
        console.log(`start ${this.brand}`)
    }

    static compareCars(car1, car2) {
      car1.maxSpeed === car2.maxSpeed
     ? console.log(`Cars have same speed`)
     : car1.maxSpeed > car2.maxSpeed
     ? console.log(`${car1.brand} is faster`)
     : console.log(`${car2.brand} is faster`);
  }

}

class SuperCar extends Car {

    constructor(brand, maxSpeed, isFly) {
        //this = {}
        super(brand, maxSpeed)
        this.isFly = isFly
    }

    startEngine() {
        super.startEngine()
        console.log(`${this.brand} is fly`)
    }



}

const superBmw = new SuperCar('super-bmw', 350, true)


superBmw.startEngine()




