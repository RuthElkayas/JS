// function exe1(arr)
// {
//     return arr.map((num)=>{return num*2;});
// }
// console.log(exe1([2,3,4]));

function doubleValues(arr) {
  return arr.map(function (num) {
    return num * 2;
  });
}

console.log(doubleValues([1, 2, 3])); // [2, 4, 6]

// function exe2(arr)
// {
//     let arr1=[];
//     arr.forEach((val) => {
//         if(val%2===0)
//            { arr1.push(val);}

//     });

//     return arr1;
// }
// console.log(exe2([2,3,4]));
function onlyEvenValues(arr) {
  let evens = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      evens.push(val);
    }
  });
  return evens;
}

console.log(onlyEvenValues([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// function exe3(arr)
// {
//     let firstLast=[];
//     let first=arr[0];
//     let last=arr[arr.length-1];

//     [first,last].forEach((val)=>{
//         if(typeof val==="string")
//             {firstLast.push(val);}
//     });

//     return firstLast;
// }

// console.log(exe3([5,"fgg",8,"kji"]));

function showFirstAndLast(arr) {
  let result = [];
  let first = arr[0];
  let last = arr[arr.length - 1];

  [first, last].forEach(function (val) {
    if (typeof val === "string") {
      result.push(val);
    }
  });

  return result;
}

console.log(showFirstAndLast(["apple", 2, true, "banana"]));

// function exe4(str)
// {
//     let count={};
//     let str2="aeuio";

//     str.toLowerCase().split("").forEach((char)=>{
//         if(str2.includes(char))
//         {
//             if(count[char])
//               {
//             count[char]++;
//         }
//         else {
//             count[char]=1;

//         }

//         }

//     });

//     return count;

// }

// console.log(exe4("agjtkl njaeoo"));

function vowelCount(str) {
  let counts = {};
  let vowels = "aeiou";

  str
    .toLowerCase()
    .split("")
    .forEach(function (char) {
      if (vowels.includes(char)) {
        if (counts[char]) {
          counts[char]++;
        } else {
          counts[char] = 1;
        }
      }
    });

  return counts;
}

console.log(vowelCount("Awesome JavaScript"));



//exe 5
function capitalize(str) {

  return str.toUpperCase();
}

console.log(capitalize("ruth"));

//exe6

function shiftLetters(str) {
  let char;
  let strNew = "";

  for (let i = 0; i < str.length; i++) {
    char = str[i];

    if (char >= "a" && char <= "z") {
      if (char === "z") {
        char = "a";
      } else {
        char = String.fromCharCode(char.charCodeAt(0) + 1);
      }
    }

    if (char >= "A" && char <= "Z") {
      if (char === "Z") {
        char = "A";
      } else {
        char = String.fromCharCode(char.charCodeAt(0) + 1);
      }
    }
    strNew += char;
  }

  return strNew;
}

console.log(shiftLetters("Hello World"));

// function shiftLetters(str) {
//     let result = [];

//     str.split("").forEach(function(char) {
//         let code = char.charCodeAt(0);

//         // אותיות קטנות (a-z: 97-122)
//         if (code >= 97 && code <= 122) {
//             let shifted = code === 122 ? 97 : code + 1;
//             result.push(String.fromCharCode(shifted));
//         }
//         // אותיות גדולות (A-Z: 65-90)
//         else if (code >= 65 && code <= 90) {
//             let shifted = code === 90 ? 65 : code + 1;
//             result.push(String.fromCharCode(shifted));
//         }
//         // תווים שאינם אותיות נשארים ללא שינוי
//         else {
//             result.push(char);
//         }
//     });

//     return result.join("");
// }

// console.log(shiftLetters("abc z")); // "bcd a"

//exe7
function swapCase(str)
{
  let words= str.split(" ");
  let result=[];

  words.forEach((word,index)=>{if(index%2==1)
  {
    result.push(capitalize(word));
  }
  else
  {
    result.push(word);
  }
  });
  return result.join(" ");
}

console.log(swapCase("hello world javascript is fun"));
