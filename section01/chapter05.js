// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
// 나누고 난 나머지 값을 구하는 것을 '모듈러'라고 한다.

let inf = Infinity;
let mInf = -Infinity;
let nan = NaN; 
// NaN (Not of Number) : 수치 연산이 실패했을때의 결과값으로사용한다.

console.log(1 * "hello");


// 2. String Type
// let myName = "이정환";
// 반드시 ""와 ''를 포함해야하며, 그렇지 않을경우 변수명으로 취급한다.

// JS에서는 문자열간의 덧셈을 허용한다.
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;

console.log(introduce);


// 백틱 : 문자열의 값을 동적으로 넣을 수 있다.
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;

console.log(introduceText);
// 이것을 ‘템플릿 리터럴 문법’이라고 부른다.


// 3. Boolean Type : 참인지, 거짓인지 상태를 나타냄
let isSwichOn = true;
let isEmpty = false;


// 4. Null Type : 아무것도 없는 상태
// 현재 변수 안에 ‘아무런 값도 없는’ 상태를 의미한다.
let empty = null;

console.log(null);


// 5. Undefined Type : Undefined라는 단 하나의 값만 담고있다.
// 변수를 선언하고 그 변수안에 아무런 값도 할당하지 않았을때 자동으로 할당된다.
// 초기화 하지 못했거나, 존재하지 않는 어떤 값을 불러오려고 할 때 발생
let none;

console.log(none);