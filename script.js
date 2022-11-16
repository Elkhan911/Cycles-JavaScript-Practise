/* 1. Выведите в консоль все элементы следующего массива, 
за исключением нулевого и последнего: let arr = ['a', 'b', 'c', 'd', 'e']; */

let arr1 = ["a", "b", "c", "d", "e"];
for (let i = 1; i < arr1.length - 1; i++) {
  console.log(arr1[i]);
}

/* 2. Выведите в консоль элементы следующего массива в обратном порядке:
let arr = ['a', 'b', 'c', 'd', 'e']; */

let arr2 = ["a", "b", "c", "d", "e"];
for (let i = arr2.length - 1; i >= 0; i--) {
  console.log(arr2[i]);
}

/* 3. Дан массив: let arr = [2, 5, 9, 3, 1, 4];
Найдите сумму элементов элементов, являющихся нечетными числами. */

let arr3 = [2, 5, 9, 3, 1, 4];
let res3 = 0;

for (let elem of arr3) {
  if (elem % 2 !== 0) {
    res3 += elem;
  }
}

console.log(res3);

/* 4. Дан массив:
let arr = [1, 2, 3, 4, 5];
Найдите произведение элементов этого массива. */

let arr4 = [1, 2, 3, 4, 5];
let res4 = 1;

for (let elem of arr4) {
  res4 *= elem;
}

console.log(res4);
