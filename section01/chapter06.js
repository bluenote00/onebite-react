// 묵시적 형 변환
// 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10;
let str = "20";

const result = num + str;
console.log(result);

// 앞의 let num = 10;이 묵시적으로 str타입으로 변환되어 ‘1020’이라는 문자열 덧셈이 되었다.


// 명시적 형 변환
// 프로그래머 내장 함수 등을 이용하여 직접 형 변환을 명시

// let str1 = "10";
//let strToNum1 = Number(str1);

//console.log(10 + strToNum1);

//let str2 = "10개";
//let strToNum2 = Number(str2); 제대로 형변환이 되지 않음
//let strToNum2 = ParseInt(str2); // 형변환 가능

//console.log(strToNum2);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");