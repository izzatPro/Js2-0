//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

let i1 = 1;
let out1 = document.querySelector('.out-1');
let b = '';
function t1() {
  while( i1 <= 50 ){
    b+= i1 + " ";
    i1++;
  }
  out1.innerHTML = b;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.

  let i2 = 2;
 let out2 = document.querySelector('.out-2');
function t2() {
    while(i2<=122){
         b+= i2 + " ";
         i2+=2;
    }
    out2.innerHTML = b;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.

i3 = 25;
out3 = document.querySelector('.out-3');
function t3() {
    while(i3 >= 7){
        b += i3 + " ";
        i3--;
    }
    out3.innerHTML = b;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.

out4 = document.querySelector('.out-4');
let i4 = 77;
function t4() {
 while( i4 >=35){
    b+=i4 + "_";
    i4-=3;
 }
 out4.innerHTML = b;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.

let out5 = document.querySelector('.out-5');
let i5 = 1;
function t5() {
    while(i5<=17){
        if( i5 % 2 == 0){
            b+=i5 + "_**";
            i5++;
        } else{
            b+= i5 + "_*";
            i5++;
        }
    }
    out5.innerHTML = b;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.



document.querySelector('.b-6').addEventListener('click', function(){
    let out6 = document.querySelector('.out-6');
    let input = document.querySelector('.i-6');
    out6.innerHTML = ' ';
    let i6 = 0;
    let c = 0;

    while(i6 < input.value ){
            while (c < 6){
                b+='*';
                c++;
            }
            c = 0;
            i6++;
            b+="<br>";
        }
        out6.innerHTML = b;
        
});


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.
let out7 = document.querySelector('.out-7');
let input7 =   document.querySelector('.i-7');
function t7() {
    let i7 = +input7.value;
    while(i7 >= 0 ){
        b+= i7 + " ";
        i7--;
    }
    out7.innerHTML = b;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.
let input81 = document.querySelector('.i-81');
let input82 = document.querySelector('.i-82');
let out8 = document.querySelector('.out-8');
function t8() {
    let a = +input81.value;
    let c = +input82.value;
    b = ' ';
    while (c >= a){
        b+= a + ' ';
        a++;
    }
    out8.innerHTML = b;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция t9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.

let input91 = document.querySelector('.i-91');
let input92 = document.querySelector('.i-92');
let out9 = document.querySelector('.out-9');

function t9() {
    let a = +input91.value;
    let c = +input92.value;
    if (a > c) {
        b = ' ';
        while ( a >= c){
            b += c + " ";
            c++;
        }
        out9.innerHTML = b;
    } else {
        b = ' ';
        while (c >= a){
            b += a + " ";
            a++;
        }
        out9.innerHTML = b ;
    }
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

let out10 = document.querySelector('.out-10');
let i10 = 1950;
function t10() {
  while(i10 <= 2000){
    b += i10 + ' ';
    i10+=2;
  }
  out10.innerHTML = b;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two

let div11 = document.querySelectorAll('.div-11');
let out11 = document.querySelector('.out-11');
let i11 = 0;
console.log(div11[0]);
function t11() {
    while( i11 < div11.length){
        b+= div11[i11].textContent + "<br>";
        i11++;
    }
    out11.innerHTML = b;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’

let out12 = document.querySelector('.out-12');
let div12 = document.querySelectorAll('.div-12');
function t12() {
    let i12 = 0
    while(i12 < div12.length){
        div12[i12].style.background = `rgb(${Math.round(-0.5 + Math.random() * 256)},${Math.round(-0.5 + Math.random()*256)},${Math.round(-0.5 + Math.random() * 256)})`;
        i12++;
    }

}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

let out13 = document.querySelector('.out-13');
let input13 = document.querySelectorAll('.i-13');
function t13() {
    let i = 0;
    while (i < input13.length){
        input13[i].value = i+1;
        i++;
    }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.

let input14 = document.querySelectorAll('.i-14');
let out14 = document.querySelector('.out-14');
function t14() {
    let i = 0;
    while( i < input14.length){
        if (input14[i].checked){
            out14.innerHTML = input14[i].value;
        }
        i++;
    }
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.
let out15 = document.querySelector('.out-15');
function t15() {
    let i = 10;
    let c = 0;
     while (i >= 0){
        b+= i + " " + c + " ";
        i--;
        c++;
     }
     out15.innerHTML = b;
}

document.querySelector('.b-15').onclick = t15;
