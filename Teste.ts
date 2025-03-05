let arr: any[] = ["1", 2, "7", 4, "6", 9, "11", "03"];
arr = arr.map(Number);
arr.sort((a, b) => a - b);
console.log(arr);
