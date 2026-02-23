// JS TYPEs
let firstName = "Jason";
let isStudent = false;
let myAge = 27;

let myHobbies = ["Cooking", "Sports", "Reading", "Traveling", "Coding"];
let myCar = null;
let myHouse = undefined;

let sayHello = () => {
  console.log("Hello, Jason");
};

let mySalary = 350000;
let myBigNumber = 50n;
let mySymbol = Symbol("mySymbol");

let all = [
  firstName,
  isStudent,
  myAge,
  myHobbies,
  myCar,
  myHouse,
  sayHello,
  mySalary,
  myBigNumber,
  mySymbol,
];

for (let item of all) {
  console.log(`${String(item)} is of type ${typeof item}`);
}
