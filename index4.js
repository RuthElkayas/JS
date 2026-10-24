const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["cow", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["bass", "tuna"],
    },
  },
];

//exe1

function name1(data1) {
  const names = data1.map((person) => person.name);
  return names;
}

console.log(name1(data));

//exe2

function year(data2) {
  

  const year = data2.filter((person) => {
    return +person.birthday.split("-")[2] < 1990;
  });

  return year;
}

console.log(year(data));

//exe3

function countFoods(data3) {

    const foodCount = {}; 

    data3.forEach(person => {
        
        const allFoods = [...person.favoriteFoods.meats, ...person.favoriteFoods.fish];

        
        allFoods.forEach(food => {
           if( foodCount[food])
           {
            foodCount[food]++;
           }
           else
           {
            foodCount[food]=1;
           }
        });
    });

    return foodCount;
}

console.log(countFoods(data));