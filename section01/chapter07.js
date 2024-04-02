// 1. 대입 연산자 : 숫자를 대입함
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2; 
// 산술 연산자에서는 모듈러가 우선 순위가 가장 높다.

let num6 = 1 + 2 * 10;
// 곱셈이 먼저 진행된다.

console.log(num6);


let num7 = (1 + 2) * 10;
// 괄호 부분이 먼저 연산 진행!

console.log(num7);


// 3. 복합 대입 연산자
let num8 = 10;
num8 = num8 + 20; 

// 위에 방법처럼 번거롭게 복합 대입하지 않고 쉽게 하는 방법은?
num8 += 20;

console.log(num8);

// 간단한 복합 대입 연산자
let num9 = 10;
num9 += 20;
num9 -= 20;
num9 *= 20;
num9  /= 20;
num9 %= 10;
console.log(num9);


// 4. 증감 연산자 : 값을 1씩 늘리거나 1씩 줄일때 씀
let num10 = 10;
num10++;
console.log(num10); // 11이 찍힌다!

// *주의할 점 : 연산자를 변수명 뒤에 쓰게 되면, 해당 라인이 끝나고, 
// 그 다음라인에 오고나서야 1이 추가된다.
// 이를 '후위 연산'이라고 부른다.

let num11 = 10;
console.log(num11++); 
// 10이 찍힌다. 왜냐하면 증감 연산자가 console안에서 찍혔기때문에 그 다음 라인이 시작되지 않았기 때문!

let num12 = 10;
console.log(++num12);
// 이렇게 증감연산자를 앞에 찍어주면 11이 찍힌다!
// 이를 '전위 연산'이라고 부른다.


// 5. 논리 연산자
// 5-1. 값이 하나만 참이어도 참 (or, ||)
let or = true || false;

// 5-2. 양쪽이 참이어야 참 (and)
let and = true && false;

// 5-3. 참이라면 거짓, 거짓이라면 참으로 변경해주는 not
let not = !true;

console.log(or, and, not);


// 6. 비교 연산자
let comp1 = 1 === 2; // 값이 같은지 보는 동등 연산자
let comp2 = 1 !== 2; // 값이 다른지 보는 비동등 연산자

console.log(comp1);
console.log(comp2);

// ==와 ===의 차이?
// == : 값만 비교함
// === : 값과 자료형까지 비교함
let comp3 = 1 == "1"; // true : 값만 비교했기때문에
let comp4 = 1 === "1";  // false : 값과 자료형까지 비교했기때문에 "1"은 string 타입이므로 false가 뜬다.

console.log(comp3, comp4);

// 대소비교
let comp5 = 2 > 1;
let comp6 = 2 < 1;

console.log(comp5, comp6);

let comp7 = 2 >= 2;
let comp8 = 2 <= 2;

console.log(comp7, comp8);

