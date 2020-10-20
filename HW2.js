function Repair(L,W,H) { // 1
    L = prompt('Введите длину офиса в метрах');
    W = prompt('Введите ширину офиса в метрах');
    H = prompt('Введите высоту офиса в метрах');
    if (L>1000||W>1000||H>1000){
    return
    }
    let area = (L*H+H*W)*2;
    let jar = 16;
    let sumjar = 0;
    sumjar = area/jar
    document.body.innerText = Math.ceil(sumjar);
    return Math.ceil(sumjar);
}
function GoldenSend(A1,A2,A3,B1,B2,B3) { //   2
    if (A1>100||A2>100||A3>100||B1>100||B2>100||B3>100){
        return
    }


    let smallA =0;
    let middleA =0;
    let largeA =0;
    let smallB =0;
    let middleB =0;
    let largeB =0;
    let smallsum =0;
    let middlesum =0;
    let largesum =0;


    if (A1>A2&&A1>A3){
        largeA = A1;
    }
    if (A2>A1&&A2>A3){
        largeA = A2;
    }
    if (A3>A1&&A3>A2){
        largeA = A3;
    }
    if (A1>A2&&A1<A3||A1>A3&&A1<A2){
        middleA = A1;
    }
    if (A2>A1&&A2<A3||A2>A3&&A2<A1){
        middleA = A2;
    }
    if (A3>A2&&A3<A1||A3>A1&&A3<A2){
        middleA = A3;
    }
    if (A1<A2&&A1<A3){
        smallA = A1;
    }
    if (A2<A1&&A2<A3){
        smallA = A2;
    }
    if (A3<A1&&A3<A2){
        smallA = A3;
    }







    if (B1>B2&&B1>B3){
        largeB = B1;
    }
    if (B2>B1&&B2>B3){
        largeB = B2;
    }
    if (B3>B1&&B3>B2){
        largeB = B3;
    }
    if (B1>B2&&B1<B3||B1>B3&&B1<B2){
        middleB = B1;
    }
    if (B2>B1&&B2<B3||B2>B3&&B2<B1){
        middleB = B2;
    }
    if (B3>B2&&B3<B1||B3>B1&&B3<B2){
        middleB = B3;
    }
    if (B1<B2&&B1<B3){
        smallB = B1;
    }
    if (B2<B1&&B2<B3){
        smallB = B2;
    }
    if (B3<B1&&B3<B2){
        smallB = B3;
    }

    largesum = largeA * largeB;
    middlesum = middleA * middleB;
    smallsum = smallA * smallB;
    document.body.innerText ="largesum = "+largesum+"  middlesum = "+middlesum+"  smallsum = "+smallsum;

}
function luckyTicket(number) { //   3
    let firstHalf = 0;
    let secondHalf = 0;
    let sumFirstHalf = 0;
    let sumSecondHalf = 0;
    if (1000000 < number||number < 100000){
        return
    }
    firstHalf = Math.floor(number/1000);
    secondHalf = Math.floor(number%1000);
    sumFirstHalf += Math.floor(firstHalf%10);
    sumFirstHalf += Math.floor(firstHalf/10%10);
    sumFirstHalf += Math.floor(firstHalf/100%10);
    sumSecondHalf += Math.floor(secondHalf%10);
    sumSecondHalf += Math.floor(secondHalf/10%10);
    sumSecondHalf += Math.floor(secondHalf/100%10);
    if (sumFirstHalf === sumSecondHalf){
        document.body.innerText = "YES"
    }
    else {
        document.body.innerText = "NO"
    }
}



function howOld() { //  4.1

    const age = Math.floor(Math.random() * 100 + 1);
    let level = '';

    if (age >= 0 && age <= 12) {
        level = 'child';
    }

    if (age >= 12 && age <= 18) {
        level = 'teenager';
    }


    if (age >= 18 && age < 60) {
        level = 'adult';
    }


    if (age >= 60) {
        level = 'retiree';
    }


}



function random(){ // 4.2
    let asknumber = prompt('Введите число от 0 до 9');

    switch (asknumber){
        case '0':
            alert('%');
            break;
        case '1':
            alert('(');
            break;
        case '2':
            alert('+');
            break;
        case '3':
            alert('=');
            break;
        case '4':
            alert('%');
            break;
        case '5':
            alert('@');
            break;
        case '6':
            alert('*');
            break;
        case '7':
            alert('_');
            break;
        case '8':
            alert('^');
            break;
        case '9':
            alert('#');
            break;
    }
}


function tripleNumber(num) { //4.3
    if (num<100||num>999){
        return
    }
    let firstnum = 0;
    let secondnum = 0;
    let thirdnum = 0;

    firstnum += Math.floor(num%10);
    secondnum += Math.floor(num/10%10);
    thirdnum += Math.floor(num/100%10);

    if (firstnum === secondnum||firstnum === thirdnum ||secondnum === thirdnum){
        document.body.innerText = "you have duplicate numbers!!!"
    }
    else {
        document.body.innerText = "all the numbers are different)"
    }

}

function leap_year(){ // 4.4
    let year = prompt('Введите год');

    if (Number.isInteger(year/400)){
        alert('Этот год является высокосным');
    }else if(Number.isInteger(year/4)){
        alert('Этот год является высокосным');
    }else{
        alert('Этот год не является высокосным');
    }

}


function palendrom(num) {   // 4.5
    if (num<10000||num>99999){
        return
    }
    var number5 = Math.trunc(num % 10);
    var number4 = Math.trunc(num /10 % 10);
    var number3 = Math.trunc(num /100 % 10);
    var number2 = Math.trunc(num /1000 % 10);
    var number1 = Math.trunc(num / 10000 % 10);

    if (number5 == number1 && number4 == number2 && number3 == number3)
        alert("Number palindrome");
    else
        alert("Number not palindrome");
}



function converter(){ //4.6
    let number = prompt('Cколько у вас долларов?');
    let currency = prompt('Напишите номер одной из нижепредствленных валют \n1. UAH \n2. AUD \n3. EUR');

    switch (currency) {
        case '1':
            alert(number*28.37 + 'Украинских гривен')
            break;
        case '2':
            alert(number*1.41 + 'Австралийских долларов');
            break;
        case '3':
            alert(number*0.85 + 'Евро');
            break;

    }
}



function victory() { // 4.9
    let question1 = prompt('Сколько зубов у улитки? \n1. 5-25 тысяч \n2. сто зубов \n3. нет зубов');
    mark = 0;
    switch (question1) {
        case '1':
            alert('Правильно!');
            mark += 2;
            break;
        case '2':
            alert('Ответ неверный!');
            break;
        case '3':
            alert('Ответ неверный!');
            break;

    }
    let question2 = prompt('Сколько стран в мире? \n1. 57 \n2. 152 \n3. 197');
    switch (question2) {
        case '1':
            alert('Ответ неверный!');
            break;
        case '2':
            alert('Ответ неверный!');
            break;
        case '3':
            alert('Правильно!');
            mark += 2;
            break;

    }

    let question3 = prompt('Сколько языков в мире? \n1. 2045 \n2. 7098 \n3. 7117');
    switch (question3) {
        case '1':
            alert('Ответ неверный!');
            break;
        case '2':
            alert('Ответ неверный!');
            break;
        case '3':
            alert('Правильно!');
            mark += 2;
            break;

    }
    if (mark == 2) {
        alert('Вы набрали 2 очка!');
    } else if (mark == 4) {
        alert('Вы набрали 4 очка!');
    } else if (mark == 0) {
        alert('Вы не набрали очков');
    } else {
        alert('Поздравляем! Вы набрали максимальный бал - 6 очков!')
    }
}

