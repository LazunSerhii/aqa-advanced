const originalArray = [1, 2, 3, 4, 5];

const newArray = originalArray.map((value, index) => value * index);

console.log("Новий масив: " + newArray);