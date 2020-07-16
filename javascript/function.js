/*
<함수 선언>
function doSomething(parameter어떤값을전달받아올건지 인자들을 정의하고나서){
    함수안에서어떤코드가작동하는지 코드블럭을 작성
    console.log('hello');
}

function add(a, b){
    const sum = a + b
    return sum;
}


<함수 호출 - 선언한 함수를 수행하기 위해서 함수를 호출해야 하고
            함수를 호출하기 위해서는 함수에서 원하는 정해진 인자값을
            넣어서 호출해야 한다
            함수의 이름 자체는 함수를 가리키는 함수 자체다.
            괄호를 쓰지 않고 함수 자체만 다른 함수의 인자로 넣으면 된다.>
doSomething();

- doSomething(add); ----------------------- function add(a, b){
                                            const sum = a + b
                                            return sum;
                                            }


- doSomething(add(1, 2)) ------------------ 3

- const result = add(1, 2)
  console.log(reselt) ------------------------ 3

  function add(a, b){
    const sum = a + b;
    return sum;}
const addFun = add;
console.log(add); --------------------------- function add(a, b){
                                              const sum = a + b
                                              return sum;
                                               }
addFun(1, 2) ---------------------------------- 3
*/


//Function - subprogram

// 1. function declaration
// function name(parameter1, parameter2){body ... return}
// 동사형태로 이름 지정
// 함수는 object다. 그래서 변수나 parameter로 전달할 수 있고, 그리고 return할 수 있다.

function log(message){
    console.log(message);
}
log('hi');
log(1234)
// 함수 자체의 parameter만 보았을 때, 그것의 타입을 알 수 없다.

//2 parameter
//premitive type은 value가 메모리에 저장되어 있기 때문에, value가 전달된다.
//반면 object type은 reference가 전달된다.

//object인 상수의 parameter 바꾸기
function changeName(obj){
    obj.name = 'coder';
}
const zinn = {name: 'zinn'}
const minn = {name: 'minn'}
changeName(zinn)
console.log(zinn.name);

//3. default Parameters;
function showMessage(message, from = 'unknown' /* default값 지정 */){
    console.log(`${message}, ${from}`);
}
showMessage('hello');

// 4. rest parameter
function printAll(...args){
    /*for (let i = 0; i < args.length; i++)
    console.log(args[i])*/
    /*for (const arg of args){
        console.log(arg)
    }
    args.forEach(arg) => console.log(arg);
}

printAll('dream', 'coding', 'ellie');
*/
//5. local scope

let globalMessage = 'global'
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        let message = 'hello';
        console.log(message);
        let childMessage = 'hi'
        console.log(childMessage);
    }
    printAnother();
    console.log(childMessage);
}

printMessage();

/*console.log(message); ------------------ 이것은 닫혀 있어서 밖에서 불러올 수 없다.
console.log(globalMessage); ------------- 볼 수 있다.*/

//6. return
// return 이 안 적힌 함수들은 return undefined가 적용된 것과 같다. - 생략가능
function sum(a, b){
    return a + b;   
}
const result = sum(1, 2);
console.log(`sum: ${result}`);

//7. early return

let q
for (q = 0; q < 10; q++){
    const remainder = q % 2;
    if (remainder === 1){
        return;
    } //~~~~~~~~필요하지 않은 것을 빨리 제거하고 필요한 로직만 뒤에서  작업한다.

}

//함수 호출
// 이름없는 함수 = annoymous function : "function ()"
// 함수를 변수값으로 가지는 변수 혹으 상수는 파라미터()괄호를 가지고 호출되다.
//함수 표현과 함수 선언의 차이
print(); // ------------------ 불가능. 상수값이 정해지지 않은 상황에서 쓸 수 없다.
const print = function qwefasd(){
    console.log('hi')
}

qwefasd(); //-------------------- 가능. 이 함수를 정의하기 전에 호출할 수 있다. function 호이스팅 때문
function qwefasd(){
    console.log('hi')
}

// 8. callback

const printYes = function(){
    console.log('yes')
}
const printNo = function(){
    console.log('No')
}
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}
randomQuiz('wrong', printYes, PrintNo);
randomQuiz('love you', printYes, PrintNo);

// Arrow function                  ???????????
// alway anonymous function
const simpleFunction = () => console.log('simpleFunction')
const add = (a, b) => a + b;

// IIFE 선언함과 동시에 호출
(function hello(){
    console.log('iife')
})();



function calculate(command, a, b){
    if (command === 'add'){
        sum(a, b);
        console.log(sum(a, b))
    } else if (command === 'substraction'){
        substraction(a, b);
        console.log(substraction(a, b))
    }
    function sum(a, b){
        return a + b;
    }
    function substraction(a, b){
        return a - b;
    }

    

}


calculate('substraction', 10 ,5)
calculate('add', 5, 8)









/*
function calculate(command, a, b){
    switch (command){
        case 'add':
        return a + b;
        case 'substract':
            return a - b;

       case 'divide':
            return a / b;

        case 'multiply':
        return a * b;

        case 'remainder':
        return a % b;

        default:
        
        break;      
    }
}

calculate('add', 5, 8);
calculate('substract', 10 ,5)
*/