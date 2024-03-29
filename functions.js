//1.Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

// function
  
//   const stringsArray = ['What', 'a', 'wonderful', 'world'];
//   console.log(reverseStrings(stringsArray)); 





//2.Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero

function checkSign(arr) {
    const positive = arr.nums(num => num > 0);
    const negative = arr.nums(num => num < 0);
    return positive ? 'positive' : (negative ? 'negative' : 'zero');
  }
  
  const numbersArray = [4, -8, 10, 0, -2];
  console.log(checkSign(numbersArray)); 




//3.Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.

function sortEmployeesBySalary(employees) {
    return employees.sort((a, b) => a.salary - b.salary);
  }
  
  const employeesArray = [
    { id: 1, name: 'John', salary: 500000 },
    { id: 2, name: 'Alice', salary: 600000 },
    { id: 3, name: 'Bob', salary: 450000 }
  ];
  console.log(sortEmployeesBySalary(employeesArray));
 



//4.Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

function multiplyByTwo(arr) {
    arr.forEach(num => console.log(num * 2));
  }
  
  const numbersArray2 = [10, 20, 30, 40, 50];
  multiplyByTwo(numbersArray2);



//5.Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values

function changeArray(arr) {
    const newArr = [arr];
    newArr.slice(0, 4).forEach(num => console.log(num * 8));
    newArr.slice(-2).forEach(num => console.log(num + 5));
  }
