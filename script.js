console.log('--------5');
let a = 12
let b = 4

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);

//

console.log('--------6');
for (let x = 1; x <= 5; x++) {
    console.log(x);
}


//

console.log('--------7');
for (let x = 5; x >= 1; x--) {
    console.log(x);
}

//

console.log('--------8');
let topMark = 'У вас максимальный балл';
let notTopMark = 'У вас средний балл';
function getMarkInfo(condition) {
    if (condition === 10) {
        console.log(topMark);
    } else { 
        console.log(notTopMark);
    }
}
getMarkInfo(10)
getMarkInfo(1)   

// function getMarkInfo(condition) {
//     (condition === 10) ? console.log(topMark) : console.log(notTopMark);
// }
// getMarkInfo(10)
// getMarkInfo(1) 

//

console.log('--------9');
function getDayInfo(position) {
    switch (position) {
        case 0 :
            console.log("Sunday");
            break;
        case 1 :
            console.log("Monday");
            break;
        case 2 :
            console.log("Tuesday");
            break;
        case 3 :
            console.log("Wednesday");
            break;
        case 4 :
            console.log("Thursday");
            break;
        case 5 :
            console.log("Friday");
            break;
        case 6 :
            console.log("Saturday");
            break;
        default:
            console.log("Wrong data");
            break; 
    }
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)
getDayInfo(7)
getDayInfo(-1)

//

console.log('--------10');
let  arr = ['a', 'b', 'c'];
arr.push (1,2,3);
console.log(arr);

//

console.log('--------11');
let f = [1, 2, 3];
let g = [4, 5, 6];
let h = f.concat(g);
console.log(h);

// 

console.log('--------12');
