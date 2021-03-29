// 8 kyu - Training JS #2: Basic data types--Number
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1
  var b=v1
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v3   //set number value to a
  var b=v1   //set number value to b
  return a-b;
}
function equal3(){
  var a=v1   //set number value to a
  var b=v5   //set number value to b
  return a*b;
}
function equal4(){
  var a=v4   //set number value to a
  var b=v5   //set number value to b
  return a/b;
}
function equal5(){
  var a=v6   //set number value to a
  var b=v3   //set number value to b
  return a%b;
}

// 8 kyu - Training JS #3: Basic data types--String
var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

// 8 kyu - Training JS #4: Basic data types--Array
function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}

// 8 kyu - Training JS #5: Basic data types--Object
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

// 8 kyu - Training JS #6: Basic data types--Boolean and conditional statements if..else
function trueOrFalse(val){
  if (!val || val == false) {
    return 'false';
  } else {
    return 'true';
  }
}

// 8 kyu - Training JS #9: loop statement--while and do..while
function padIt(str,n){
  let it = 1
  while (n>0) {
    if (it%2!=0) {
      str = '*'+str
    } else {
      str += '*'
    }
    it++
    n--
  }
  return str
}

// 8 kyu - Training JS #11: loop statement--break,continue
function grabDoll(dolls){
  var bag=[];
  for (let i=0; i<dolls.length; i++) {
    if (bag.length >= 3) {
      break;
    }
    if (dolls[i] === "Hello Kitty" || dolls[i] === 'Barbie doll') {
      bag.push(dolls[i])
    } else {
      continue;
    }
  }

  return bag;
}

// 8 kyu - Training JS #13: Number object and its properties
function whatNumberIsIt(n){
  if (isNaN(n)) {
    console.log('here')
    return 'Input number is Number.NaN'
  }
  switch (n) {
      case Number.MAX_VALUE:
        return 'Input number is Number.MAX_VALUE'
        break;
      case Number.POSITIVE_INFINITY:
        return 'Input number is Number.POSITIVE_INFINITY'
        break;
      case Number.MIN_VALUE:
        return 'Input number is Number.MIN_VALUE'
        break;
      case Number.NEGATIVE_INFINITY:
        return 'Input number is Number.NEGATIVE_INFINITY'
        break;
      case Number.NaN:
        return 'Input number is Number.NaN'
        break;
      default:
        return `Input number is ${n}`
  }
}

// 8 kyu - Determine offspring sex based on genes XX ans XY chromosomes
function chromosomeCheck(sperm) {
  return sperm.includes('Y') ? `Congratulations! You're going to have a son.`:`Congratulations! You're going to have a daughter.`
}

// 8 kyu - Leonardo Dicaprio and Oscars
function leo(oscar){
  if (oscar === 88) {
    return 'Leo finally won the oscar! Leo is happy'
  } else if (oscar === 86) {
    return 'Not even for Wolf of wallstreet?!'
  } else if (oscar < 88) {
    return 'When will you give Leo an Oscar?'
  }
  return 'Leo got one already!'
}

// 8 kyu - Remove First and Last Character Part Two
function array(arr){
  if (arr.split(',').length <= 2) {
    return null
  }
  let spl = arr.split(',')
  return spl.slice(1,spl.length-1).join(' ')
}
