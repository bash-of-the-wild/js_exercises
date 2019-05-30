


// function selectEvenItems(strings) {
//   var result = [];
//   var index = 0;
//   strings.forEach(function(string) {
//     if (index % 2 === 0) {
//       result.push(string);
//     }
//     index++;
//   });
//   return result;
// }

// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));





// function max(numbers) {
//   var currentMax = numbers[0];
//   numbers.forEach(function(number) {
//     if (number > currentMax) {
//       currentMax = number;
//     }
//   });
//   return currentMax;
// }
// console.log(max([5, 4, 8, 1, 2]));





// function factorial(number) {
//   var product = number;

//   for(var number = number - 1; number > 1; number--) {
//     product *= number;
//   }

//   return product;
// }

// function factorial(number, product=1) {
//   if (number === 1) {
//     return product;
//   }

//   product *= number;
//   number--;
  
//   return factorial(number, product);
// }

// console.log(factorial(5));



function descending(ascendingNumbers) {
  var descendingNumbers = [];

  for(var index = ascendingNumbers.length - 1; index >= 0; index--) {
    descendingNumbers.push(ascendingNumbers[index]);
  }

  return descendingNumbers;
}

console.log(descending([1,3,5,7]));









function sumCombinations(numbers1, numbers2) {
  var sums = [];

  numbers1.forEach(function(number1) {
    numbers2.forEach(function(number2) {
      sums.push(number1 + number2);
    });
  });

  return sums;
}

console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));