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

// ***********************      Формирование строк через циклы в JavaScript

// 5. С помощью цикла сформируйте строку, заполненную 5-тью дефисами.

let res5 = "";

for (let i = 0; i < 5; i++) {
  res5 += "-";
}

console.log(res5);

// 6. С помощью цикла сформируйте строку '987654321'

let res6 = "";

for (let i = 9; i >= 1; i--) {
  res6 += i;
}
console.log(res6);

// 7. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9'.

let res7 = "";

for (let i = 0; i < 10; i++) {
  res7 += "-" + i;
}

console.log(res7);

// 8. Переберите циклом числа от 10 до 200 и выведите в консоль первую цифру
// каждого числа.

for (let i = 10; i <= 200; i = i + 10) {
  console.log(String(i)[0]);
}

/* 9. Переберите циклом числа от 10 до 200 и выведите в консоль
 сумму первой и второй цифры каждого числа. */

for (let i = 10; i <= 200; i = i + 10) {
  console.log(Number(String(i)[0]) + Number(String(i)[1]));
}

/* 10. Переберите циклом числа от 10 до 200 и выведите на экран те числа, 
сумма двух первых цифр которых равна 5. */

for (let i = 10; i <= 200; i++) {
  if (Number(String(i)[0]) + Number(String(i)[1]) == 5) {
    console.log(i);
  }
}

/* 11. Дан массив с числами. Запустите цикл, который будет по очереди выводить 
элементы этого массива в консоль до тех пор, пока не встретится элемент со 
значением 0. После этого цикл должен завершить свою работу. */

let arr11 = [1, 2, 3, 0, 9, 8, 7, 5];

for (let elem of arr11) {
  if (elem == "0") {
    break;
  }

  console.log(elem);
}

/* 12. Дан массив с числами. Найдите сумму элементов, расположенных от 
начала массива до первого отрицательного числа. */

let arr12 = [1, 2, 3, 0, -3, -2, -2];
let res12 = 0;

for (let elem of arr12) {
  if (elem < 0) {
    break;
  }

  res12 += elem;
}

console.log(res12);

/* 13. Дан массив с числами. Найдите позицию первого числа 3 
в этом массиве (считаем, что это число обязательно есть в массиве). */

let arr13 = [22, 44, 33, 55, 3, 8, 9, 7];

for (let i = 0; i < arr13.length; i++) {
  if (arr13[i] == 3) {
    console.log(i);
    break;
  }
}

/* 14. Определите, сколько целых чисел, 
начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100. */
let res14 = 0;

for (let i = 1; i < 100; i++) {
  if (res14 > 100) {
    break;
  }

  res14 += i;
}

console.log(res14);

/* 15. Пусть у нас дан массив с числами. Давайте переберем его циклом и числа,
которые делятся на 2, возведем в квадрат и выведем в консоль, а числа,
которые делятся на 3, возведем в куб и выведем в консоль. */

let arr15 = [4, 6, 8, 9, 15, 7];

for (let elem of arr15) {
  if (elem % 2 == 0) {
    elem = Math.pow(elem, 2);
  } else if (elem % 3 == 0) {
    elem = Math.pow(elem, 3);
  } else {
    continue;
  }
  console.log(elem);
}

/* 16. С помощью двух вложенных циклов выведите на экран следующую строку:
111222333444555666777888999 */

let str16 = "";

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 4; j++) {
    str16 += i;
  }
}

console.log(str16);

/* 17. С помощью двух вложенных циклов выведите на экран следующую строку:
11 12 13 21 22 23 31 32 33 */

let str17 = "";

for (let i = 10; i < 34; i = i + 10) {
  str17 = "";

  for (let j = 1; j < 4; j++) {
    let num17 = i + j;
    console.log(num17);
  }

  console.log(str17);
}

/* 18. Используя цикл и метод push заполните массив числами от 1 до 10. */

let arr18 = [];

for (let i = 1; i < 11; i++) {
  arr18.push(i);
}

console.log(arr18);

/* 19. Используя цикл и метод push заполните массив 5-ю буквами 'x'.*/
let arr19 = [];

for (let i = 1; i < 6; i++) {
  arr19.push("x");
}

console.log(arr19);

/* 20. Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел. */

let arr20 = [1, -2, 3, -4, 5];
let arr20New = [];

for (let elem of arr20) {
  if (elem > 0) {
    arr20New.push(elem);
  }
}

console.log(arr20New);
