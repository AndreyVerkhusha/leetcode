/* Проверить на правильность открыте \ закрытые скобки  */
var isValid = function(s) {
  const stack = [];

  for (const char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.length === 0) return false;
      const top = stack.pop();
      if ((char === ')' && top !== '(') || (char === ']' && top !== '[') || (char === '}' && top !== '{')) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
isValid("([])") // true
/* ============= */

/* Выявить самый длинный общий префикс у массива слов  */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ""

    const short = strs.reduce((a,b) => a.length < b.length ? a : b)

    for(let i = 0; i < short.length; i++) {
      for(let j = 0; j < strs.length; j++) {
        if(short[i] !== strs[j][i]) {
          return short.substring(0,i)
        }
      }
    }

    return short
};
longestCommonPrefix(["flower","flow","flight"]) // fl
/* ============= */

/* Преобразовать строку из римских в числа  */
const symbolValue = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  Z: 0
}

const symbolValueDecrement = {
  "IV": 4,
  "IX": 9,
  "XL": 40,
  "XC": 90,
  "CD": 400,
  "CM": 900
}

var romanToInt = function(s) {
    const splitS = s.split("")
    let indexesContinue = [];
 
     
    return splitS
    .reduce((acc, curr, indx) => {
      const concatNextChar = curr + splitS[indx + 1]
      
      if(symbolValueDecrement[concatNextChar]) {
        acc += symbolValueDecrement[concatNextChar]
        splitS[indx + 1] = "Z"
        
        return acc
      }
      
      acc += symbolValue[curr]
      return acc
    }, 0)
};
romanToInt("MCMXCIV") // 1994
/* ============= */

/* Выявить является ли число палиндромом ( одинаково читаются слева направо и справа налево)   */
var isPalindrome = function(x) {
    const splitX = String(x).split("")

    for(let i = 0; i < Math.floor(splitX.length / 2); i++) {
        const current = splitX[i]
        if(splitX[splitX.length - i - 1] !== current) {
            return false
        }
    }

    return true
};
isPalindrome(121) // true
/* ============= */

/* Нужно определить индексы в массиве, сумма элементов которых равняется target   */
var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if(map[diff] !== undefined) {
            return [map[diff], i];
        }
        map[nums[i]] = i;
    }
    return [];
};
twoSum([3,2,4], 7) // [0, 2]
/* ============= */

/* Нужно вывести последовательность фибоначчи */
var fibGenerator = function*() {
   let [prev, curr] = [0, 1]
  
  while(true) {
    yield prev;
    [prev, curr] = [curr, curr + prev]
  }
};
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
/* ============= */

/* Учитывая массив arr и функцию сопоставления fn, верните новый массив с преобразованием, примененным к каждому элементу. */
var map = function(arr, fn) {
     return  arr.reduce((acc, curr, i) => {
         acc.push(fn(curr, i))
        return acc
    }, [])
};
function plusone(n) { return n + 1; }
map([1,2,3], plusone) // [2,3,4]
/* ============= */

/* Учитывая массив arr и функцию фильтрации fn, верните отфильтрованный массив filteredArr. */
var filter = function(arr, fn) {
     return arr.reduce((acc, curr, i) => {
        if(fn(curr, i)) {
          acc.push(curr)
        } 
        return acc
      }, [])
      
      return result
};
function greaterThan10(n) { return n > 10; }
filter([0,10,20,30], greaterThan10) // [20,30]
/* ============= */

/* Учитывая массив функций [f1, f2, f3, ..., fn], верните новую функцию fn, которая является композицией массива функций. */
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x)
    }
};
const fn = compose([x => x + 1, x => 2 * x])
fn(4) // 9















