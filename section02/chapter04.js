// 1. Spread 연산자
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
// 값이 나오긴하나, 아래는 위험한 방법이다
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
let arr2 = [4, ...arr1, 5, 6];

console.log(arr2);

// 객체에 적용
let obj1 = {
    a:1,
    b:2
};

let obj2 = {
    ...obj1,
    c:3,
    d:4
};

// 함수에 적용
function funcA(p1,p2,p3) {
    console.log(p1,p2,p3)
}

funcA(...arr1);

// Rest 매개변수
// 나머지, 나머지 매개변수
function funcB(one, two, ...rest) {
// one, two 매개변수를 받고 나머지를 rest로 받는다.
// 대신 rest 뒤에 다른 매개변수를 선언해선 안된다!
    console.log(rest);
}

funcB(...arr1);