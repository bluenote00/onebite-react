// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)


let arrC = [1,2,3];
console.log(arrC);

// 배열 내부에는 어떤 타입의 값이든 다 저장할 수 있다. 길이의 한계도 없다.
let arrD = [
    1,
    2,
    3,
    true,
    "hello",
    null,
    undefined,
    () => {},
    {},
    [],
];
console.log(arrD);


// 2. 배열 요소 접근
let item1 = arrD[0];
let item2 = arrD[1];

console.log(item1, item2);

// 배열 요소의 값을 바꾸는것도 가능하다.
arrD[0] = "hello";

console.log(arrD);
