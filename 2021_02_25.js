// 7 kyu - The highest profit wins!
function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)];
}

// 7 kyu - Remove the minimum
function removeSmallest(numbers) {
  return (numbers.filter((x,i)=>i != (numbers.indexOf(Math.min(...numbers)))))
}

// 7 kyu - Don't give me five!
function dontGiveMeFive(start, end) {
  let total = 0;
  for (let i=start; i<=end; i++) {
    let str = i + ''
    if (!str.includes('5')) {
      total++
    }
  }
  return total
}

// 7 kyu - No oddities here
function noOdds( values ){
  return values.filter(x=>x%2===0)
}

// 7 kyu - Two Oldest Ages
function twoOldestAges(ages){
  return [ages.sort((a,b)=>b-a)[1], ages.sort((a,b)=>b-a)[0]]
}

// 7 kyu - Testing 1-2-3
var number=function(array){
  return array.map((x,i)=>`${i+1}: ${x}`)
}

// 7 kyu - Find the capitals
var capitals = function (word) {
  let caps = [];
	for (let i=0; i<word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      caps.push(i)
    }
  }
  return caps
};

// 7 kyu - Sort array by string length
function sortByLength (array) {
  return array.sort((a,b)=>a.length-b.length)
};

// 7 kyu - Fizz Buzz
function fizzbuzz(n) {
  let fizzArr = [];
  for (let i=1; i<=n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzArr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      fizzArr.push('Fizz');
    } else if (i % 5 === 0) {
      fizzArr.push('Buzz');
    } else {
      fizzArr.push(i)
    }
  }
  return fizzArr
}

// 7 kyu - Sum of numbers from 0 to N
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count < 0) {
      return `${count}<0`
    } else if (count === 0) {
      return `0=0`
    }
    let str = ''
    for (let i=0; i<count; i++) {
      str += `${i}+`
    }
    str += `${count} = ${(count*(count+1))/2}`
    return str
  };

  return SequenceSum;

})();


// 7 kyu - Row Weights
function rowWeights(array){
  let rows = [0,0];
  for (let i=0; i<array.length; i++) {
    if (i%2 != 0) {
      rows[1] += array[i]
    } else {
      rows[0] += array[i]
    }
  }
  return rows
}

// 7 kyu - Complete The Pattern #1
function pattern(n){
 if (n < 0) {
   return ''
 }
 var output="";
 for (let i=1; i<n; i++) {
   output += (i+'').repeat(i) + '\n'
 }
output += (n+'').repeat(n)
 return output;
}

// 7 kyu - Return the Missing Element
function getMissingElement(superImportantArray){
  superImportantArray.sort((a,b)=>a-b)
  for (let i=0; i<superImportantArray.length; i++) {
    if (superImportantArray[i] != i) {
      return i
    }
  }
  return 9
}

// 7 kyu - Printer Errors
function printerError(s) {
  const colors = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
  const colorsOnly = s.split('').filter(x=>colors.includes(x));
  return `${s.length-colorsOnly.length}/${s.length}`
}

// 7 kyu - Find the stray number
function stray(numbers) {
  for (let i=0; i<numbers.length; i++) {
    if (numbers[i] != numbers[i+1]) {
      if (numbers[i] != numbers[i+2] && numbers[i+1] === numbers[i+2]) {
        return numbers[i]
      }
      return numbers[i+1]
    }
  }
}
