// 1. Extract the first and third elements from the array numbers = [5, 10, 15, 20] using destructuring.

// let arr = [5, 10, 15, 20]
// let [a, b] = arr 
// console.log(arr)

// 2. Swap the values of a and b using array destructuring.

// let a = 2
// let b = 4

// [a, b] = [b, a]

// console.log(b)

// 3. Destructure the object {name: "John", age: 25, city: "New York"} to extract name and city into separate variables.

// let obj = 
// {
// name: "John", age: 25, city: "New York"
// }

// 1
// let {name, age} = obj
// console.log(obj)

// 2
// let obj2 = {
//     age: 21,
//     city: "Bhopal"
// }
// let obj3 = {...obj, ...obj2}
// console.log(obj3)

// 4. Using destructuring, assign a default value of "Guest" to user if it is not present in the object {id: 101}.

    // let obj = {id: 101}

    // // let {user = "Guest"} = obj

    // let {user} = obj

    // user = user||"Guest"

    // console.log(user)

// 5. Extract first and last from the nested object {person: {first: "Alice", last: "Johnson"}} using destructuring.

    // let obj = {person: {first: "Alice", last: "Johnson"}}

    // let {person: {first, last}} = obj // 1

    // let {person} = obj
    // let {first, last} = person

    // console.log(first)

// 6. Use array destructuring to ignore the second element of [100, 200, 300] and store the rest in another variable.
    // var arr = [100, 200, 300]

    // // var [a, c] = arr
    // var [a, ...rest] = arr
    // // rest.shift()
    // console.log(a)

// 7. Destructure the array [1, 2, 3, 4] inside a function parameter and return the sum of all elements.

    // let arr = [1, 2, 3, 4]

    // function addSum ([a, b, c, d]) {
    //     return a+b+c+d
    // }

    // console.log(addSum(arr))

// 8. Destructure an object {name: "David", age: 30, job: "Developer"} and rename job to profession.
    // let arr = {name: "David", age: 30, job: "Developer"} 

    // let { name, age, job: profession } = arr;
    // console.log(profession)

// 9. Destructure the following nested array [[1, 2], [3, 4]] to extract 1 and 4.
        // let arr1 = [[1, 2], [3, 4]]

        // // let [[first], [,fourth]] = arr1
        // let first = arr1[0][0]; 
        // let fourth = arr1[1][1]; 

        // console.log(first, fourth)

// 10. Destructure an array [10, 20] and swap the values inside an if condition only if the first value is smaller than the second.
    // let arr = [10, 20];

    // if (arr[0] < arr[1]) {
    //   [arr[0], arr[1]] = [arr[1], arr[0]];
    // }
    
    // console.log(arr);  

// 11. Destructure the object {user: {id: 5, info: {name: "Sam", city: "Paris"}}} and extract name and city.
    // let object = {user: {id: 5, info: {name: "Sam", city: "Paris"}}} 

    // let { user: { info: { name, city } } } = object;

    // console.log(city)

// 12. Given an array [10, [20, 30], 40], destructure it to extract 10, 30, and 40 into separate variables.
    let array = [10, [20, 30], 40]

    

