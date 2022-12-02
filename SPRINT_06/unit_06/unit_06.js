//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
    let out = document.querySelector('.out-1');
    b = "";
    for(let i = 0 ; i < 3 ; i++ ){
        for(let j = 0 ; j < 3 ; j++){
            b += "*";
        }
        b+= '_';
    }
    out.innerHTML = b;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
function t2() {
 let out = document.querySelector('.out-2');
 let b = "";
 for(let i = 1 ; i < 4 ; i++){
    b += i + "<br>" ; 
    for(let j = 0 ; j < 3 ; j++){
        b += '*_';
    }
    b+= "<br>";
 }
 out.innerHTML = b;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
function t3() {
let out = document.querySelector('.out-3');
let b = "";
for( let i = 0 ; i < 4 ; i++){
    for(let i =0 ; i < 3 ; i++){
        b+="*_";
    }
    b+= "<br>";
}
out.innerHTML = b;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
function t4() {
    let out = document.querySelector('.out-4');
    let b = "";
    for(let i = 1 ; i < 4; i++){
        b+= i + "_1" + " ";
        for(let j = 2 ; j <=5 ; j++){
            b+= j + " ";
        }
    }
        out.innerHTML = b;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
function t5() {
 let out = document.querySelector('.out-5');
 let b = "";
 for (let i = 0 ; i < 3 ; i++){
    for(let j = 0 ; j < 6 ; j++){
        if ( j % 2 == 0){
            b+='1';
        } else {
            b+="0";
        }
    }
    b+='<br>';
 }
 out.innerHTML = b;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
function t6() {
    let out = document.querySelector('.out-6');
    let b = "";
    for(let i = 0 ; i < 3 ; i++){
        for(let j = 0 ; j < 6 ; j++){
            if ( j % 4 == 0){
                b+='1'
            }
            else if (j == 1 || j % 3 == 0){
                b+='0';
            }
            else {
                b+='x';
            }
        }
        b+= "<br>";
    } 
    out.innerHTML = b;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
function t7() {
    let out = document.querySelector('.out-7');
    let b = "";
    for (let i = 1 ; i < 5 ; i++){
        for(let j = 0 ; j < i ; j++){
            b+="*";
        }
        b+='<br>';
    }
    out.innerHTML = b;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
function t8() {
    let out = document.querySelector('.out-8');
    let b = "";
    for(let i = 5 ; i >= 0 ; i--){

        for(let j = 0 ; j < i ; j++ ){
            b+="*";
        }


        b+="<br>";
    }
    out.innerHTML = b;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
function t9() {
let out = document.querySelector('.out-9');
let b = "";
for(let i = 2 ; i < 7 ; i++){
    for(let j = 1 ; j < i ; j++){
        b+=j + " ";
    }
    b+= "<br>";
}
out.innerHTML = b;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
function t10() {
    let out = document.querySelector('.out-10');
    let b = "";
    let c = 9 ;
    for(let i = 0; i < 5 ; i++){

        for(let j = 1 ; j < 10 ; j++ ){       
            if( i == 0){
                b+= "0" + j + " ";
            }
            if ( (i == 0 && j == 9) || (i > 0) ){
                c+=1;
                b+= c + " ";
                if(i == 0) {continue;};
                if(j == 9){
                    c+=1;
                    b+=c;
                }               
            }
        }
        b+="<br>";
    }
    out.innerHTML = b;
}
document.querySelector('.b-10').onclick = t10;

// Используя вложенные циклы создайте таблицу умножения от 1 до 10. Т.е. вначале столбец 1x1, 1x2...1x9 потом 2x1, 2x2 ... 2x9 и так далее. Оформить в виде столбцов где выводятся множители и результат.

function t11() {
    let out = document.querySelector('.out-11');
    let b = "";
    let c = "";
        for(let i = 1 ; i < 10 ; i++){
            for(let j = 1 ;  j < 10 ; j++){
                b+= `${i} * ${j} = ${i * j} <br>`;
            }
            b+= "<br>";
        }
        out.innerHTML = b ;
    }
    
    document.querySelector('.b-11').onclick = t11;


