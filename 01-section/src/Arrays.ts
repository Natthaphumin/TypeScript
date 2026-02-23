// Arrays in typescript

const myArray: number[] = [1, 2, 3, 4, 5];
myArray.push(6);

const myStringArray: string[] = ["a", "b", "c", "d"];
myStringArray.push("e");
myStringArray.map((item) => {
  console.log(item);
});

const myMixedArray: (number | string)[] = [1, "a", 2, "b", 3, "c"];
myMixedArray.push(4);
myMixedArray.push("d");

myMixedArray.map((item) => {
  console.log(item);
});

// Tuples in typescript

const myTuple: [number, string, number] = [1, "hello", 3];
myTuple[0] = 2;
myTuple[1] = "world";
myTuple[2] = 4;

console.log(myTuple);
