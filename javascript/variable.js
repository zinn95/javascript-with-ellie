'use strict';
/*
//2. Variable(read/write): [let] 메모리 어딘가의 할당된 박스를 가리키고 있어서 포인터를 이용해 값을 변경가능
//           mutable data type

{//block scope: {}밖에서는 {}안의 내용을 불러올 수 없다.
let name = 'zinn';
console.log(name);
name = 'hello';
console.log(name);
}
let globalName = 'global name'//grobal scope: {블럭}을 쓰지 않고 쓰는 변수/ 항상 메모리에 저장되어 있음

/*var의 문제점
1. var hoisting: 어디에 선언했냐에 상관없이 항상 var 선언을 위로 끌어올리는 것
2. var은 block scope이 없다.*/

/*3. constant(only read): immutable date type
            안전하다/ thread safety/실수를 줄인다
*/

/*4. variable type
        1. primitive type: 더 이상 작은 단위로 나눠질 수 없는 단일한 것
            - number, string, boolean, null, 
        2. object type
        어떤 타입인지에 따라 메모리에 저장되는 방법이 다르다.
        1)은 value 자체가 메모리에 저장된다.
        2)는 object를 가리키는 ref가 메모리에저장된다.
        console.log(A)는
        만약 A가 함수라면, 그리고 그 함수가 1)primitve type이라면 메모리에 저장된 value를 바로 읽어오고
        그 함수가 2) object type이라면 value를 바로 읽지 않고, 그것이 object임만 알려주다.
*/
const count = 17;
console.log(`value: ${count}, type: ${typeof count}`);

//number - spectial numertic value: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 0;
console.log(infinity);             //  --------------- Infinity
console.log(negativeInfinity);     //  --------------- -Infinity
console.log(nAn);// ------------------------------------ NaN

//bigInt
const bigInt = 123456789012345678901234567890n;

/*string
const brendan = 'brendan'
A. const greeing = 'hello' + brendan;
    console.log(`value: ${greeting}, type: ${typeof greeting}`);
B. const helloBob = `hi ${brendan}!`; //template literals (string): 백틱``
    console.log(`value: ${helloBob} type: ${typeof helloBob}`);
*/
//boolean: 참과 거짓
// false: 0, null, undefined, NaN
// true: any other value
const canRead = true;
const test = 3< 1; // fals
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null
console.log(`value: ${nothing}, type: ${typeof nothing}`);
//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol: create unique identifiers for objects
const symbol1 = symbol('id');
const symbol2 = symbol('id');
console.log(symbol1 === symbol2);
//동일한 string으로 작성했어도 다른 symbol로 만들어진다.
const gSymbol1 = symbol.for('id');
const gSymbol2 = symbol.for('id');
//주어진 스트링에 맞는 심볼을 만들어서, id가 같기 때문에 같은 심볼이 만들어진다.
console.log(`value: ${symbol1.decription}, type: ${typeof symbol1}`);
//.description을 이용해 string으로 변환한 다음 출력해야 정상출력된다.

//object : 일상생활에서 볼 수 있는 물건과 물체를 대체할 수 있는 박스형태
const zinn = { name: 'zinn', age: 20}; //object 내의 요소는 변경할 수 있다.
zinn.age = 25;
console.log(zinn);
console.log(`value: ${zinn}, type: ${typeof zinn}`);
console.log(`value: %{zinn.name}, type: ${typeof zinn.name}`);

/*
5. Dynamic typing: dynamically typed language <-> status type language
: 선언할 때 어떤 타입인지 설정하지 않고 실행할 때 타입이 변경될 수 있다.*/
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));//   ---- h
text = 1;
text = '7' + 5;
text = '8' / '2'
console.log(text.charAt(0));// ---------- error


6. 연산
*/

