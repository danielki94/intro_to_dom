var myObj = {
    'name': 'Derek Hawkins',
    "age": 33,
    location: 'Dallas',
    laptops: ['Samsung', 'Raspberry Pi', 'Xidax']
}


// console.log(myObj)

// Object literal notation
// console.log(myObj[ 'name' ])

// Object dot notation
// console.log(myObj.age)

// console.log(myObj.laptops)
// for (let index = 0; index < myObj.laptops.length; index++) {
//     const laptop = myObj.laptops[index];
//     console.log(laptop)
    
// }

// for (const o of myObj.laptops) {
//     console.log(o)
// }

// for (const key in myObj) {
//     if (Object.hasOwnProperty.call(myObj, key)) {
//         const element = myObj[key];
//         console.log(element)
        
//     }
// }

// myObj.laptops.forEach(function(laptop, index) {
//     console.log(`${index+1}: ${laptop}`)
// });

// Object constructer function

function Car(year, make, model) {
    this.year = year;
    this.make = make;
    this.model = model;
    // method
    // this.drive = function() {
    //     console.log("Vroom!");
    // }
    // arrow
    // this.drive = () => console.log('Vroom!')

    this.drive = () => {
        console.log('Vroom!');
        console.log('Hello')
    }

}

let carOne = new Car(2015, 'Chevy', 'Corvette');
// console.log(carOne);
// console.log(carOne.year);
// console.log(carOne.make);
// console.log(carOne.model);

// carOne.year = 2017;
// carOne.model = 'Tahoe';
// console.log(carOne.year);
// console.log(carOne.make);
// console.log(carOne.model);

carOne.drive()

// Arrow function
