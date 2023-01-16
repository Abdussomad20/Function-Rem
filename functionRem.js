// // // // function without parameter,  a function which make a number square
// // function square() {
// //   let num = 2, num1 = 3;
// //   let squar = (num * num1)
// //   console.log(squar)
// // }

// // square() // 4

// // function without parameter
// function addTwoNumbers() {
//   let numOne = 10
//   let numTwo = 20
//   let sum = numOne + numTwo
//   console.log(sum)
// }
// addTwoNumbers() // a function has to be called by its name to be executed 

// function sumUp() {
//     add = 50, addup = 20;
//     addition = add + addup
//     console.log(addition)
// }
// sumUp()

function printFullName (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())

function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
  console.log(generateFullName())
  console.log(generateFullName('David', 'Smith'))

  function calculateAge(birthYear, currentYear = 2019) {
    let age = currentYear - birthYear
    return age
  }
  
  console.log('Age: ', calculateAge(1819))