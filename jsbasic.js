//1

// let a="ruth";
// let b="moshe";

// a=a+b;
// b=a.slice(0,(a.length-b.length));
// a=a.slice(b.length);

// console.log(a,b);

//2

// let grid=[
//     ["0","X","X","0","0"],
//     ["0","X","0","X","0"],
//     ["0","X","X","0","X"],
//     ["0","X","X","0","0"],
//     ["0","X","X","X","0"],

// ]
// let count=0;

// for (let i = 0; i <= 4; i++) {
//     for (let j = 0; j <= 4; j++) {

//         if (grid[i][j]==="X")
//         {
//             count++;
//             console.log("the row is"+ i+ "the column is" + j);
//             }

//     }
// }
// console.log(count);

// הדפסת הילד השלישי 3
// let family = {
//     parents: {},
//     children: [{ name: "Ali" }, { name: "Lea" }, { name: "Mona" }]
// };

// console.log(family.children[2].name);

//דרך אחת הדפסת כל הילדים כסטרינג אחד

// let allNameChildren= family.children.map(children => children.name).join(",");
// console.log("all children: "+ allNameChildren);

//דרך שנייה

// let allNameChildren=[];

// for(let i=0; i<family.children.length;i++)
// {
//     allNameChildren+= family.children[i].name;
//     allNameChildren+=',';
// }
// console.log(allNameChildren);

//4

// let arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length/2; i++) {


//         let x = arr[i];

//         let j = arr.length-1-i;

//         arr[i]=arr[j];
//         arr[j]=x;

// }

// console.log(arr);

//5

// let arr = ['ruth', 5, 10, 'moshe', null, { name: "talya" }, true, false, { age: 18 }];

// let typof1 = {

//     null: 0,
//     boolean: 0,
//     number: 0,
//     string: 0,
//     object: 0,
// }

// for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];

//     if (item === null) {
//         typof1.null += 1;
//     }

//     else {
//         let itemtyp = typeof item;

//         if (itemtyp !== undefined) {
//             typof1[itemtyp]++;

//         }

//     }

// }
// console.log(typof1);

//6

// let arr=[123,1,9,500,67,900];
// let arr2=[];
// let count=0;

// for(let i=0; i<arr.length;i++)
// {
//     count++;
//     if(arr[i]>100)
//     {
//         arr2.push(arr[i]);

//     }
// }
// console.log(arr2,count);

//7

// let object = {
//     even: [],
//     odd: [],
// }

// let count=0;

// for(let i=1; i<=50; i++ )
// {
//     if(i%6===0)
//     {
//         count++;
//     }
//     if(i%2===0)
//     {
//         object.even.push(i);
//     }
//     else
//     {
//         object.odd.push(i);
//     }
// }

// console.log(object,count);

//8

// let math =[
//     [0,0,0],
//     [0,0,0],
//     [0,0,0]
// ]

// for(let i=0; i<3;i++)
// {
//     for(let j=2; j>=0; j--)
//     {
//         if(j==i)
//         {
//             math[i][j]='#';
//         }
//         if(j+i==2)
//         {
//             math[i][j]='#';
//         }

//     }
// }
// console.log(math);
    
//9

// let text="Ruth and Moshe mm rr !!";
// let textLower=text.toLowerCase();
// let textObject={ };

// for( let i=0; i< textLower.length; i++)
// {
//     let char=textLower[i];
//     if(char >= 'a' && char <='z')
//     {
//         if( textObject[char]!==undefined)
//             {textObject[char]++;}
//         else
//         {
//             textObject[char]=1;
//         }
//     }

// }
// console.log(textObject);

//10

// let math=[
//     [1,2,3],
//     [4,-5,10],
//     [3,0,-9,5]
// ]

// let arr=[];

// for(let i=0;i<math.length;i++)
// {
//     for(let j=0; j<math[i].length;j++)
//     {
//         if(math[i][j]>=0)
//             arr.push(math[i][j]);
//     }
// }
// console.log(arr);

//11
// let originalObj = {
//     banana: 5,
//     apple: 10,
//     cherry: 3,
//     date: 8
// };

// let keys = Object.keys(originalObj);


// keys.sort();

// let transformedObj = {};


// for (let i = 0; i < keys.length; i++) {
//     let currentKey = keys[i];
    
    
//     let upperKey = currentKey.toUpperCase();
    
   
//     transformedObj[upperKey] = originalObj[currentKey];
// }

// console.log("האובייקט המקורי:", originalObj);
// console.log("האובייקט החדש (מפתחות גדולים וממוינים):", transformedObj);


// let  obj={
//    moshe: 6,
//    talya: 7,
//    ruth: 4,
// }

// let keysArr = Object.keys(obj);

// keysArr.sort();

// obj2={};

// for(let i=0; i<keysArr.length; i++)
// {
//     let x= keysArr[i];
//     let y= x.toUpperCase();

//     obj2[y]=obj[x];

// }

// console.log(obj,obj2);

//12
// let size = 4;        
// let symbol = "*";    

// for (let i = 1; i <= size; i++) {
//     let currentRow = ""; 

//     for (let j = 1; j <= i; j++) {
//         currentRow += symbol + " ";
//     }

  
//     console.log(currentRow);
// }

// let size=4;
// let symbol="*";

// for(let i=1; i<=size; i++)
// {
//     let row="";

//     for( let j=1; j<=i ; j++)
//     {
//         row+=symbol+" ";
//     }
//     console.log(row);
// }

//13

// let arrA = [1, 2, 2, 3, 4, 5];
// let arrB = [2, 2, 4, 6, 7];

// let matchCount = 0;


// let presentInA = {};
// for (let i = 0; i < arrA.length; i++) {
//     presentInA[arrA[i]] = true;
// }

// let alreadyMatched = {};

// for (let j = 0; j < arrB.length; j++) {
//     let currentItem = arrB[j];

//     if (presentInA[currentItem] === true && alreadyMatched[currentItem] === undefined) {
//         matchCount++;
//         alreadyMatched[currentItem] = true; 
//     }
// }

// console.log("מספר האיברים המשותפים הייחודיים:", matchCount,alreadyMatched);

// let arr1=[1,2,3,2,1,4];
// let arr2=[3,2,5,6];

// let count=0;

// let math={};

// for(let i=0; i<arr1.length;i++)
// {
//     math[arr1[i]]=true;
// }

// let math2={};

// for(j=0; j<arr2.length;j++)
// {
//     let x= arr2[j];

//     if(math[x]===true && math2[x]===undefined )
//     {
//         count++;
//         math2[x]=true;

//     }
// }
// console.log(count,math2);

//14

let originalObj = {
    name: "Ruth",
    age: 25,
    isOnline: true,              
    city: "Tel Aviv",
    skills: ["JS", "Python"],    
    id: 1045
};

let reversedObj = {};
let keys = Object.keys(originalObj);

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = originalObj[key];

    
    if (typeof value === "string" || typeof value === "number") {
       
        reversedObj[value] = key;
    }
}

console.log("האובייקט המקורי:", originalObj);
console.log("האובייקט ההפוך (עם סינון):", reversedObj);

//15

// let size = 5;
// let identityGrid = [];

// for (let i = 0; i < size; i++) {
   
//     identityGrid[i] = [];
    
//     for (let j = 0; j < size; j++) {
        
        
//         if (i === 2) {
//             identityGrid[i][j] = 9;
//         } 
//         else if (i === j) {
//             identityGrid[i][j] = 1;
//         } 
        
//         else {
//             identityGrid[i][j] = 0;
//         }
//     }
// }


// console.table(identityGrid);

//16

// let users = [
//     { name: "Alice", age: 22, status: "active" },
//     { name: "Bob", age: 16, status: "inactive" },
//     { name: "Charlie", age: 30, status: "active" },
//     { name: "Diana", age: 15, status: "inactive" },
//     { name: "Evan", age: 19, status: "inactive" },
//     { name: "Fiona", age: 14, status: "inactive" }
// ];

// let inactiveUnder18Count = 0;

// console.log(" משתמשים פעילים ובגירים (מעל 18) ");

// for (let i = 0; i < users.length; i++) {
//     let currentUser = users[i];

   
//     if (currentUser.status === "active" && currentUser.age > 18) {
//         console.log(`שם: ${currentUser.name}, גיל: ${currentUser.age}`);
//     }

    
//     if (currentUser.status === "inactive" && currentUser.age < 18) {
//         inactiveUnder18Count++;
//     }
// }


// console.log("כמות המשתמשים הלא-פעילים מתחת לגיל 18:", inactiveUnder18Count);

//17

// let numbers = [45, 12, 89, 3, 23, 76, -5, 60];


// let min = numbers[0];
// let max = numbers[0];


// for (let i = 1; i < numbers.length; i++) {
//     let current = numbers[i];

   
//     if (current < min) {
//         min = current;
//     }

    
//     if (current > max) {
//         max = current;
//     }
// }

// console.log("המערך:", numbers);
// console.log("הערך המינימלי:", min); 
// console.log("הערך המקסימלי:", max); 

//18
// let arr = [1, 2, 3, 4, 5];
// let rotations = 3; 

// console.log("המערך המקורי:", arr);


// for (let step = 0; step < rotations; step++) {
    
    
//     let firstElement = arr[0];

    
//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1];
//     }
   
//     arr[arr.length - 1] = firstElement;

    
//     console.log(`אחרי סיבוב מספר ${step + 1}:`, arr);
// }

//19

// let user = {
//     name: "Ali",
//     age: 25,
//     isOnline: true
// };

// let keys = Object.keys(user);
// let jsonString = "{ ";

// for (let i = 0; i < keys.length; i++) {
//     let key = keys[i];
//     let value = user[key];

   
//     jsonString += `"${key}": `;

   
//     if (typeof value === "string") {
       
//         jsonString += `"${value}"`;
//     } else {
        
//         jsonString += value;
//     }

    
//     if (i < keys.length - 1) {
//         jsonString += ", ";
//     }
// }

// jsonString += " }";

// console.log("מחרוזת ה-JSON המדונטסת ידנית:");
// console.log(jsonString);

//20

// let board = [
//     ["O", "X", "O", "X"],
//     ["O", "O", "O", "X"], 
//     ["X", "X", "O", "O"],
//     ["O", "X", "X", "O"]
// ];

// let isBoardValid = true;
// let size = board.length;


// for (let i = 0; i < size; i++) {
//     let rowOCount = 0;

//     for (let j = 0; j < board[i].length; j++) {
//         if (board[i][j] === "O") {
//             rowOCount++;
//         }
//     }

    
//     if (rowOCount > 2) {
//         console.log(`[שגיאה] שורה מספר ${i} מכילה ${rowOCount} פעמים "O" (מותר מקסימום 2).`);
//         isBoardValid = false;
//     }
// }


// for (let j = 0; j < size; j++) {
//     let colOCount = 0;

//     for (let i = 0; i < size; i++) {
//         if (board[i][j] === "O") {
//             colOCount++;
//         }
//     }

    
//     if (colOCount > 2) {
//         console.log(`[שגיאה] עמודה מספר ${j} מכילה ${colOCount} פעמים "O" (מותר מקסימום 2).`);
//         isBoardValid = false;
//     }
// }


// if (isBoardValid) {
//     console.log("הלוח תקין לחלוטין! עומד בכל הכללים.");
// } else {
//     console.log("הלוח נכשל בבדיקת החוקיות.");
// }