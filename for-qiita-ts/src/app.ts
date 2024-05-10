interface Lengthwise {
  length: number;
}

function getLength<T extends Lengthwise>(obj: T): number {
  return obj.length;
}

const str = "Hello";
console.log(getLength(str)); // 5

const arr = [1, 2, 3];
console.log(getLength(arr)); // 3

const obj = { length: 10 };
console.log(getLength(obj)); // 10

const num = 42;
console.log(getLength(num)); // エラー