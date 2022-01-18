'use strict'
// Task1
function oneNum (a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}
    // oneNum (5,9);
    let res2148 = oneNum (52, 1);
    console.log(res2148);


// Task 2
    function getFactorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        console.log("Factorial", factorial);
    }
    getFactorial(5);
    getFactorial(11);
    

    // Task 3
    function getNum(firstNum, secondNum, thirdNum) {
        return '' + firstNum + secondNum + thirdNum;
    }
    let num = getNum(4, 5, 8)
    console.log(num)


    // Task 4
    function getSquare(a, b) {
        if (a && b) {
            return a * b;
        } else {
            return a * a;
        }
    }
    let result = getSquare(6);
    console.log(result);

    // Task 5
    function perfectNum(a) {
        let result = 0;
        for (let i = 1; i < a; i++) {
            if ((a % i) === 0) {
                result = result + i;
            }
        }
        if (result === a) {
            return true;
        } else {
            return false;
        }
    }
    console.log(perfectNum(6));

    // Task 6
    function getAllPerfectNums(a, b) {
        for (let i = a; i < b; i++) {
            if (perfectNum(i)) {
                console.log(i);
            }
        }
    }
    getAllPerfectNums(3, 50);

    // Task 7
    function time(a, b = '00', c = '00') {
        console.log(`${a}:${b}:${c}`);
    }
    time(12, 15, 10);


    // Task 8
    function seconds(a, b, c) {
        return (a * 60) * 60 + b * 60 + c;
    }
    let result__11 = seconds(3, 20, 10);
    console.log(result__11);

    // Task 9
    function task9lesson25(sec) {
        let h = '';
        let m = '';
        let s = '';
        h = Math.floor(sec / 3600);
        m = Math.floor((sec % 3600) / 60);
        s = Math.floor(sec % 3600) % 60;

        if (sec < 0) {
            return 'Error'
        } else if (sec === 0) {
            return 'Error000'
        }
        else if (h < 10 && m < 10 && s < 10) {
            h = '0' + h;
            m = '0' + m;
            s = '0' + s;
            return `Your time1 ${h}:${m}:${s}`;
        }
        else if (h < 10 && m < 10) {
            h = '0' + h;
            m = '0' + m;
            return `Your time ${h}:${m}:${s}`;
        }
        else if (h < 10 && s < 10) {
            h = '0' + h;
            s = '0' + s;
            return `Your time ${h}:${m}:${s}`;
        }
        else if (m < 10 && s < 10) {
            m = '0' + m;
            s = '0' + s;
            return `Your time ${h}:${m}:${s}`;
        }

        else if (s < 10) {
            s = '0' + s;
            return `Your time ${h}:${m}:${s}`;
        }
        else {
            return `Your time ${h}:${m}:${s}`;
        }
    }

    let res1512 = task9lesson25(3680);
    console.log(res1512);
