
//1. string concatenation
console.log('my' + 'cat')
console.log('1' + 2);
console.log(`string literals:
,,,,
1 + 2 = ${1+2}`)

console.log('zinn\'s name'); // 작은따옴표가 겹칠 때: "\" 백슬러쉬 사용
console.log("zinn's \nname"); // 줄바꿈: "\n"
console.log("zinn's \tname"); // tab키: "\t"

//2. numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2); //remainder
console.log(2**3); //exponentiation

//3. increment and decrement operators
let counter = 2;

const preIncrement = ++counter;
//=counter = counter + 1; preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++
//=postIncrement = counter; counter = counter + 1
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

//4. Assignment operators
let x = 7;
let y = 6;
x += y; // x = x + y;
console.log(x);
x -= y;
console.log(x);
x *= y;
console.log(x);
x /= y;
console.log(x);

//5. 비교 operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6.논리 연산자Logical operators:  ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;
console.log(`or: ${value1||value2||check()}`);
console.log(`and: ${value1&&value2&&check()}`); // null 체크할 때 사용
console.log(`!: ${!check}`)

function check(){
    for (let i = 0; i < 10; i++){
       // wasting Time
        console.log('WOW')
    }
    return true;
}

//7. equality 연산자
// == : loose equality, type을 바꿔서 검사한다.
// === : strick equality, type을 바꾸지 않는다. 타입이 다르면 다른 존재다.
const stringFive = '5'
const numberFive = 5

console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const zinn1 = {name: 'zinn'};
const zinn2 = {name: 'zinn'};
const zinn3 = zinn1;          
console.log(zinn1 == zinn2);   
console.log(zinn1 === zinn2);
console.log(zinn1 === zinn3);
 //object의 저장값은 reference다. 따라서 object간 비교는 reference간 비교가 된다.
console.log(zinn1.name == zinn2.name);   
console.log(zinn1.name === zinn2.name);
console.log(zinn1.name === zinn3.name);

// 연습 equality - puzzler
// 0, empty string, null은 모두 false로 간주된다. null과 undefined은 같은 것으로 간주된다.
console.log(0 == false);
console.log(0 === false); // 0은 boolean type이 아니다.
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

//8. if, else if, else

const name = 'coder';
if (name === 'zinn'){
    console.log(`welcome zinn!`)
} else if(name === 'coder') {
    console.log(`you are amazing coder`);
} else {
    console.log(`unknown`);
}

//9. ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'zinn' ? 'yes' : 'no');

//10. switch statement

const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all');
        break;        
}

//11-1. while loop: 조건문이 맞을 때만 블럭을 쓰고 싶으면 while을 사용
//        do-while loop: 조건문보다 블럭을 먼저 실행하고 싶을 때 사용
let i = 3;
/*while (i>0){
    console.log(`while: ${i}`);
    i--
}
*/
//11-2. do-while loop

do{
    console.log(`do while: ${i}`);
    i--
} while (i>0)

//11-3 for loop: 시작하는 문장, 조건, 어떤 스텝을 밟아나갈 것인지 명시
/*
let c;
for (c = 3; c > 0; c--){
    console.log(`for: ${c}`);
}

//inline variable declaration
for (let d = 3; d > 0; d = d - 2){
    console.log(`inline variable for: ${d}`);
}

//nested loop
for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}
*/

// break, continue: loop안에서 이들을 써서 loop를 끝냄
// break는 전체를 끝내는 것, continue는 하던 걸 끝내고 다음 것으로 넘어가는 것

/*
let q
for (q = 0; q <= 10; q++){
    if (q%2 === 1){
       continue;
    } else if (q%2 === 0){
        console.log(q);
    }
}*/


let q
for (q = 0; q < 10; q++){
    const remainder = q % 2;
    if (remainder === 0 && q !== 0){
        console.log(q);
        continue;

    }
    

}

let p
for (p = 0; p < 10; p++){
    if (p < 8){
        console.log(p)
    } else {
        break;
    }
}




