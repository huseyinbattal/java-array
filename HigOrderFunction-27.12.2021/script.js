// let myarray = ['first', 'second', 'third', 'fourth'];
// let totalArray = [1, 2, 3, 4, 5, 6, 7, 8,"1","2"];
// let numArray = [4, 25, 333, 5, 42, 3];
// let a = 50;


// // function compare(params) {

// //     if (params >= 50) {
// //         console.log(`${params} elliden büyük`);
// //     }

// // }
// // compare(a);

// // for (let i = 0; i < numArray.length; i++) {
// //     const element = numArray[i];
// //     console.log(element);
// // }

// // function calculate(params) {
// //    for (let i = 0; i < params.length; i++) {
// //        const element = params[i];
// //        console.log(element);

// //    }
// // }

// // calculate(totalArray);
// // calculate(numArray);
// // calculate(myarray);

// // function calcul(params) {

// //     for (let i = 0; i < params.length; i++) {
// //         if (params[i] === 5) {
// //             console.log(params[i] * 5);
// //         }
// //         if (params[i] > 33) {
// //             return;
// //         }

// //         const element = params[i];
// //         console.log(element);
// //     }
// // }

// // calcul(totalArray);
// // calcul(numArray);

// function calcSum(params) {
//     let sum = 0;
//     let summer = "";
//     if (params.length > 0) {
//         for (let i = 0; i < params.length; i++) {

//             if (typeof params[i] === "number") {
//                 sum += params[i];
//             } else {
//                 summer += params[i];
//             }

//         }
//     }
//     return [sum,summer];
// }

// // console.log(calcSum(totalArray));
// // console.log(calcSum(numArray));
// // console.log(calcSum(myarray));

// // const result = calcSum(numArray);
// // console.log(result);
// // console.log(typeof myarray);

// console.log(calcSum(totalArray));

// let newFunc = calcSum;
// console.log(newFunc(totalArray));

// function highOrder(params) {
//     return params * 2;
// }

// console.log(highOrder(5));

// console.log(typeof totalArray[totalArray.length - 1]);

// var numara = 5;
// console.log(highOrder(numara));

// function numFive(param) {
//     return param+7;
// }

// console.log(numFive());

// //numara = numFive();

// console.log(highOrder(numFive(numara)));

// const callback = (x) => {
//     return x * 2;
// }


// function hangar(params) {
//     return params;
// }

// console.log(hangar(callback));

// const hang = (a, c) => {
//     return hanging = (b) => {
//         return a + (b - c) * 2;
//     }
// }

// console.log(hang(5, 4)(2));

// const hanger = (a, c) => {

//     return callback(a) + c;
// }

// console.log(hanger(3, 9));



let newArr = [5, 6,6,6,9,];

function find6(params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] === 6) {
            return params[i];
        }
        else {
            return "6 yok";
        }

    }
}

console.log(find6(newArr));


///filter

const filteredArray = newArr.filter(item => item> 6)
console.log(filteredArray); 

const final= newArr.forEach(element => {
    return element;

});

console.log(final); 


let filtering = ["ahmet", "mehmet", "celil"];

console.log(filtering.includes("ahmet"));

const newfil = filtering.filter(item => typeof item === "string");

console.log(newfil);

const newfil1 = filtering.find(item => typeof item === "number")

console.log(newfil1);

const newArrayim = filtering.map(item =>item.toUpperCase());
console.log(newArrayim);


