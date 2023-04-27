const findMinimum = arr => Math.min(...arr);

const arr = [7, 5, 2, 3, 4, 1]; 
findMinimum(arr); // => 1
// Time complexity: O(1) Size of array does not affect finding min
// Space complexity: O(1) Single value to store min


const runningSum = arr => {
  let currentTotal = 0;

  arr.forEach((el, i) => {
    currentTotal += el;
    arr[i] = currentTotal;
  });
  
  return arr;
};

const arr = [1,2,3,4]; 
console.log(runningSum(arr)); // => [1,3,6,10]

//Time Complexity: O(n). Linear as it iterates through the array;
//Space complexity: O(1). Constant. Changing the original array, no change in memory size. 


const evenNumOfChars = arr => {

  let count = 0;

  arr.forEach( el => {
    if(typeof el == 'string' && el.length % 2 === 0){
      count++;
    };
  });

  return count;
};

const arr = ['ab', 'abc', 'a', 'abcd']; 
console.log(evenNumOfChars(arr)); // => 2

//Time Complexity: O(n) as it iterates through the entire array
//Space complexity: O(1). Constant as it returns single num representing # of even character strings.

const smallerThanCurr = arr => {

  let newArr = [];
  
  for (let i = 0; i < arr.length; i++){
    let count = 0;

    for (let j = 0; j < arr.length; j++){
      
      if (arr[i] > arr[j]){
        count++;
      }
    }
    newArr.push(count);
  }
  return newArr;

};

const arr = [8,1,2,2,3];
console.log(smallerThanCurr(arr)); // => [4,0,1,1,3]

//Time complexity: O(n^2). Iterates through nested for loops.
//Space complexity: creates a new array containing # of elements smaller than each element in the array.

const twoSum = (arr, target) => {


  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      if ((arr[i] + arr[j]) === target){
        return true;
      }
    }
  }
  return false;
};

const arr = [4, 2, 3, 6, 9]; 
console.log(twoSum(arr, 10)); // => True

const arr2 = [4, 2, 3, 6, 9];
console.log(twoSum(arr2, 16)); // => False

//Time complexity: n^2. Iterates through nested array.
//Space complexity: O(1). Returns a single boolean.


/* const secondLargest = arr => {
  let max = Math.max(...arr);
  let maxi = arr.indexOf(max);
  arr.splice(maxi, 1);

  return Math.max(...arr);
}; */


const secondLargest = arr => {
  let largest = null;
  let secondLargest = null;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] > largest){
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest){
      secondLargest = arr[i];
    }
  }

  return secondLargest !== -Infinity ? secondLargest : null;
}

// Time Complexity: O(n);
//Space Complexity: O(1);

const shuffle = (arr) => {

  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

// Time complexity: O(n);
// Space complexity: O(1);


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];