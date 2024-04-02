// 1. null 병합 연산자
// 존재하는 값을 추려내는 기능
// null, undefined가 아닌 값을 찾아내는 연산자.

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4); // 10이 뜸
// var1는 값을 선언하지 않았기때문에, undefined가 떠야한다.
// 그러나 var2는 10으로 선언했기때문에, 10이 대입되어 var4는 10이어야한다.


let var5 = var1 ?? var3;
console.log(var5); // var3의 값이 대입되어 20이 뜬다.


let var6 = var2 ?? var3; // var2의 값인 10이 된다.
console.log(var6);

// 만약 var2와 var3의 자리를 바꾸면? 앞에 있는 var3의 값인 20이 된다.

let userName = "이정환";
let userNickName = "Winterlood";

let displayName = userName ?? userNickName;
// userName이나 userNickName 둘 중 하나가 null이거나 undifined일 경우
// 나머지 하나의 값을 넣어라!

console.log(displayName);

// 2. typeof 연산자
// 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
// 현재 변수에 저장된 값의 자료형이 궁금할때에는?

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// 항을 3개 사용하는 연산자
// 조건식을 이용해 참,거짓 일 때의 값을 다르게 반환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
        // 1.조건식    2.참일때 반환값 3.거짓일때 반환값

console.log(res);