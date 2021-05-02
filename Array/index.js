//1
let fruits = ['Apple', 'Banana']
//console.log(fruits.indexOf('Banana'))
fruits.forEach(function (item, index, array) {
    //console.log(item, index)
    //Loop over an Array
})

//2 Add an item to the end of an Array
//let newLength = fruits.push('Orange')
// /Remove an item from the end of an Array
let last = fruits.pop()

//Remove an item from the beginning of an Array
let first = fruits.shift()

//Add an item to the beginning of an Array
let newLength = fruits.unshift('Strawberry')

//Find the index of an item in the Array
fruits.push('Mango')
["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')

let removedItem = fruits.splice(pos, 1)


let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
//console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

//let pos = 2
let n = 3

let removedItems = vegetables.splice(pos, n) // index to number of  position
//console.log('data', removedItems)
//console.log('afterData', vegetables)
let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
years[years.length] = 19329
//console.log(years.length);


//let fruits = []
fruits.push('banana', 'apple', 'peach')

//console.log(fruits.length)

fruits[5] = 'mango'
// console.log(fruits[5])            // 'mango'
// console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
// console.log(fruits)

const a1 = [1, 2, 3, 4, 5, 33]
let sum = 0

for (let i = 0; i < a1.length; i++) {
    sum += a1[i]
}
//console.log(sum)


let largestNumber = a1[0]
for (let i = 1; i < a1.length; i++) {
    if (a1[i] > largestNumber) {
        largestNumber = a1[i]
    }

}
//console.log(largestNumber);

const arr = [2, 32343, 43, 423, 234, 42, 4]

let lowestNumber = arr[0]
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < lowestNumber) {
        lowestNumber = arr[i]
    }
}
//console.log('lowestNumber', lowestNumber);

//second Highest
function second_highest(arrr) {
    var second_highest = arrr.sort(function (a, b) { return b - a })[1];
    return second_highest;

}

//console.log(second_highest(arr));

const newArray = new Array(9)
newArray.fill(false)

//console.log(newArray);

for (let i = 0; i < newArray.length; i++) {
    const rand = Math.floor(Math.random() * 10 + 1)
    newArray[i] = rand > 5 ? 'X' : '0'
}
//console.log(newArray);


let names = ['Azim', 'Razib', "sunny"]

function update(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = `${i + 1.} ${arr[i]}`
    }
    return arr
}
//console.log(update(names));



//array of function

const suma = (a, b) => a + b
const sub = (a, b) => a - b
const divide = (a, b) => a / b
const cross = (a, b) => a * b

const func = [suma, sub, divide, cross]
const a = 20
const b = 10
for (let i = 0; i < func.length; i++) {
    const element = func[i](a, b);
    //console.log(`[${func[i].name}] Result = ${element}`);

}

const pointTable = [
    [0, 0],
    [3, 5],
    [54, 44],
    [443, 33]
]
//console.log(pointTable);

for (let i = 0; i < pointTable.length; i++) {
    //console.log(` point of ${i}  - x =${pointTable[i][0]} y = ${pointTable[i][1]}`)
}

//two dimentional array
for (let i = 0; i < pointTable.length; i++) {
    for (let j = 0; j < pointTable[i].length; j++) {
        // console.log(`points ${i},${j} = ${pointTable[i][j]}`)
    }
}


const pointTableA = [
    [0, 0],
    [3, 5],
    [54, 44],

]


const pointTableB = [
    [0, 0],
    [3, 5],
    [54, 44],

]

// Creating Matrix summation

const MatrixSum = (MatrixA, MatrixB) => {
    const result = []
    for (let i = 0; i < MatrixA.length; i++) {
        const row = []
        for (let j = 0; j < MatrixA[i].length; j++) {
            row.push(MatrixA[i][j] + MatrixB[i][j])

        } result.push(row)

    }
    return result;
}
//const Matrix = MatrixSum(pointTableA, pointTableB)

//console.log(Matrix);

//Array to Array

let arrx1 = [3, 3, 22, 3, 2]
let arrx2 = [3, 344, 34, 34]


//console.log(arrx1)
// arrx1.push(...arrx2)
// arrx1.push(arrx2)
Array.prototype.push.apply(arrx1, arrx2)
//console.log(arrx1)

const unshiftArray = [3, 34, 45, 3, 5, 3]

unshiftArray.unshift(4, 4, 889, 8, 8, 9)
//console.log(unshiftArray);

const spliceArray = [23, 32, 443, 34, 344]
const spliceArray2 = [23, 32, 443, 34, 344]
spliceArray.splice(2, 0, ...spliceArray2)

//in the splice method , there are have three arguments
//first argument noted that which index , second argument depends on how many index should be deleted , third
//argument refers that added the suspected index , you can add more array data
//console.log(spliceArray);


//Change data from an array

const students = [
    { id: 1, name: "azim" },
    { id: 2, name: "azim" },
    { id: 3, name: "azim" },
    { id: 4, name: "azim" },
]
const postId = 3;
let named = "Azim Uddin";

for (let i = 0; i < students.length; i++) {
    if (postId == students[i].id) {
        students[i].name = named
        break;
    }

}
//console.log(students);


//%%%% REmove item or element from an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//shift method [ remove from first]
numbers.shift()
//pop mehthod [ remove from last]
numbers.pop()
//by reducing length
numbers.length = numbers.length - 1
//Remove inside element by index ( splice using index to remove element in second arguments including this index)
numbers.splice(2, 2)

//using for loop

const deletedID = 5
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == deletedID) {
        numbers.splice(i, 1)
    }
}

//by using filter  method we can create a new array
const toBeDeleted = 6
numbers = numbers.filter(item => item !== toBeDeleted)

// by using delete operator

delete numbers[3]
//reset whole array
let xa = [2, 3, 42, 2]
let xb = xa;
xa = []
//console.log(xa, xb);

//alternative way

let xx = [3, 2, 3, 4,]
let yy = xx
xx.length = 0
//console.log(xx, yy);

//reset array using while loop

while (numbers.length) {
    numbers.pop()
}

//console.log(numbers);




//$$$$$$$$$$$$$ adding two array with concat and ES6 method spread operator
const CArray = [2, 2, 2]
const daaata = [2, 2, 2, 2, 2,]
const newsArray = CArray.concat(daaata)
// console.log(newsArray);


//spreading operator
const secArray = [...CArray, ...daaata]
// console.log(secArray);
//using concat on empty array

const ses = [].concat(CArray, daaata)
// console.log(ses);


//%%%%%%%%%get the array from an array


const arrData = [1, 2, 34, 5, 6, 6, 7, 8]

const daaaata = arrData.slice(1, 4) // slice method refers to counting the first index but last property won't count it will count only lastIndex-1 , then return
//console.log(daaaata);

//clone a array by using slice

const cloned = arrData.slice()

//console.log(cloned == arr);

//Array like Objects to Array (like HTML, some arguments look like array but they are not)
function toArray() {
    return Array.prototype.slice.call(arguments)
}
const deta = toArray(2, 3, 'test', 3, 1)
// console.log(deta);

// const someOperation = (item) => new Promise((resolve, reject) => {
//     resolve(item)
// }

// function someOperation(item) {
//     return new Promise((resolve, reject) => {
//         resolve(item)
//     });
// }

// var p = Promise.resolve([1, 2, 3])
const collection = ["a", 'b', 'c']
const daaataa = collection.forEach(async item => await Promise.resolve(item))
// console.log('daaata', daaataa);
// console.log('someOperation', someOperation());





const PostApproveAndAlloweForUsers = user.role == "superadmin" || user.role == "admin"
const shouldUserBeAllowedToPost = (user, post) => {
    if (PostApproveAndAlloweForUsers || user.role == "user") {
        const lastPostOn = new Date(user.lastPostOn);
        const currentDate = new Date();
        const daysSinceLastPost = Math.abs(currentDate.getTime() - lastPostOn.getTime()) / (1000 * 60 * 60 * 24);
        if (daysSinceLastPost < 30) {
            if (post.length < 500) {
                return true
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    return false;
}
const shouldUserBeAllowedToApprovePost = (user) => {
    if (PostApproveAndAlloweForUsers) {
        const joiningDate = new Date(user.joiningDate)
        const currentDate = new Date();
        const daysSinceJoining = Math.abs(currentDate.getTime() - joiningDate.getTime()) / (1000 * 60 * 60 * 24);
        if (daysSinceJoining > 7) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}












