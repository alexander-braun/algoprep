//Palindrome
function isPalindrome(string) {
  string = string.toLowerCase();
  const characters = string.split('');
  const valid = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const letters = [];
  characters.forEach((char) => {
    if (valid.indexOf(char) !== -1) letters.push(char);
  });

  if (letters.join('') === letters.reverse().join('')) return true;
  return false;
}
console.log(isPalindrome("Madam I'm Adam"));

//Caesar
function caesar(string, num) {
  num = num % 26;
  let lowercase = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let result = '';

  for (let i = 0; i < lowercase.length; i++) {
    let current = lowercase[i];
    let index = alphabet.indexOf(current);
    if (index === -1) result += current;
    else {
      let newIndex = index + num;
      if (newIndex >= alphabet.length) newIndex = newIndex - alphabet.length;
      if (newIndex < 0) newIndex = 26 + newIndex;
      let newChar = alphabet[newIndex];
      if (string[i] === string[i].toUpperCase())
        result += newChar.toUpperCase();
      else result += newChar;
    }
  }

  return result;
}
console.log(caesar('Javascript', -900));

//Reverse words
function reverseWords(str) {
  let wordsArr = str.split(' ');
  let words = [];

  wordsArr.forEach((word) => {
    let reversed = [];
    word.split('').forEach((letter) => {
      reversed.unshift(letter);
    });
    words.push(reversed.join(''));
    reversed = [];
  });

  return words.join(' ');
}
console.log(reverseWords('this is a string of words'));

//Reverse array in place
function reverseInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
console.log(reverseInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//Find all pairs that make a sum
function twoSum(arr, num) {
  let outArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) outArr.push([arr[i], arr[j]]);
    }
  }
  return outArr;
}
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 2, 1, 0, 4], 4));

//Find all pairs that make a sum with hashtable
function twoSum2(arr, num) {
  let pairs = [];
  let hashtable = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let counter = num - current;
    if (hashtable.indexOf(counter) !== -1) pairs.push([counter, current]);
    hashtable.push(current);
  }
  return pairs;
}
console.log(twoSum2([1, 2, 3, 4, 5, 6, 7, 2, 1, 0, 4], 4));

//Recursive factorial down to 1
function factorial(num) {
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(4));

//Binary Search
function binarySearch(arr, key) {
  let middle = Math.floor(arr.length / 2);
  let middleEl = arr[middle];

  if (middleEl === key) return true;
  else if (middleEl < key && arr.length > 1) {
    return binarySearch(arr.splice(middle, arr.length), key);
  } else if (middleEl > key && arr.length > 1) {
    return binarySearch(arr.splice(0, middle), key);
  } else return false;
}
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 0));

//Fibonacci no cache
function fibonacci(position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}
console.log(fibonacci(6));

//Fibonacci cache
function fibMemo(index, cache = []) {
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}
console.log(fibMemo(100));

//Get primes till n
function sieveOfEratosthenes(n) {
  let arr = new Array(n + 1).fill(true);
  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; j * i <= n; j++) {
      arr[i * j] = false;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) result.push(i);
  }

  return result;
}
console.log(sieveOfEratosthenes(20));

//Bubblesort 1
function bubbleSort(arr) {
  let passes = 1;

  let sort = () => {
    for (let i = 0; i < arr.length - passes; i++) {
      let current = arr[i];
      if (arr[i] > arr[i + 1]) {
        arr[i] = arr[i + 1];
        arr[i + 1] = current;
      }
    }
    passes++;
  };

  let test = () => {
    for (let i = 0; i < arr.length - passes; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }
  };

  while (test() === false) {
    sort();
  }

  console.log(passes, arr.length - 1);
  return arr;
}
console.log(
  bubbleSort([5, 3, 8, 2, 1, 4, 5, 3, 8, 2, 1, 4, 5, 3, 8, 2, 1, 4, 0, -10])
);

//Bubblesort 2
function bubbleSortOpt(arr) {
  let steps = 0;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    steps++;
  }

  console.log(steps);
  return arr;
}
console.log(
  bubbleSortOpt([5, 3, 8, 2, 1, 4, 5, 3, 8, 2, 1, 4, 5, 3, 8, 2, 1, 4, 0, -10])
);

//Mergesort
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let middleIndx = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, middleIndx);
  let secondHalf = arr.slice(middleIndx);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2) {
  let result = [];

  while (arr1.length && arr2.length) {
    let min;
    if (arr1[0] < arr2[0]) min = arr1.shift();
    else min = arr2.shift();
    result.push(min);
  }

  if (arr1.length) result = result.concat(arr1);
  else result = result.concat(arr2);

  return result;
}
console.log(mergeSort([5, 6, 7, 3, 2, 4]));

//Find the largest Range from an array of number (algoexpert)
function largestRange(array) {
  //Create Hashtable
  let hash = {};
  array.forEach((element) => {
    hash[element] = true;
  });

  let range = [];
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let neighbor = true;
    let temp = [];
    let operator = 1;

    // Plus circle
    while (neighbor) {
      if (hash[current]) {
        temp.push(current);
        hash[current] = false;
        current = current + operator;
      } else {
        if (operator !== -1) {
          operator = -1;
          current = array[i] - 1;
        } else {
          neighbor = false;
        }
      }
    }

    if (temp.length && range.length < temp.length) range = temp;
  }

  let lowest = range[0];
  let highest = range[0];

  for (let i = 1; i < range.length; i++) {
    if (range[i] > highest) highest = range[i];
    if (range[i] < lowest) lowest = range[i];
  }

  return [lowest, highest];
}
