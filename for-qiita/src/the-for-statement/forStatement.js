const arr = ['hoge', 'piyo', 'bar'];
for (let a of arr) {
    console.log(a)
}

for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}


for (let i = 1; i <= 10; i++) {
    // 平方数を求める
    console.log(i * i);
}

const obj = { name: 'Taro', age: 24, country: 'Japan' };
for (const o in obj) {
    const val = obj[o];
    obj[o] = 'new' + val;
}
console.log(obj);