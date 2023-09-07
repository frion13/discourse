// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число



const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el===0) {
        console.log(`${el} - это ноль `)
    }
    else if (el%2===0) {
        console.log(`${el} - четное число `)
    }
    else {
        console.log(`${el} -  нечетное число `)
    }; 

}


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]


const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr = arr.slice(0, 3).concat(arr.slice(5));

console.log(newArr);


// Задание 3
// Используя Math.random() вам необходимо генерировать 
// цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const randomDigits = [];
for (let i = 0; i < 5; i++) {
  const randomDigit = Math.floor(Math.random() * 10);
  randomDigits.push(randomDigit); 
}
console.log(randomDigits); 
const sum = randomDigits.reduce((acc, current) => acc + current, 0);
console.log(`Сумма элементов массива: ${sum}`);

const min = Math.min(...randomDigits);
console.log(`Минимальное число в массиве: ${min}`);

const includesThree = randomDigits.includes(3);
console.log(`Число 3 ${includesThree ? "присутствует" : "отсутствует"} в массиве.`);




// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, 
// только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx


for (let i = 1; i <= 20; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += 'x';
    }
    console.log(row);
  }
  