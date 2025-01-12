// 1. 스코프란? 우리말로 '범위'를 뜻함. 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함
//function funcA() {
//   let a = 1;
//}

// 오류 발생! 함수 밖에서 실행했기 때문에. 변수 a는 위 함수 내부에서만 유효한다.
//console.log(a);


// 스코프는 전역 스코프와 지역 스코프로 나뉜다.
// 전역 스코프 : 전체 영역에서 접근 가능
// 지역 스코프 : 특정 영역에서만 접근 가능

// 전역 스코프
let a = 1;

function funcA() {
    console.log(a);
}

funcA();


// 지역 스코프
// function funcB() {
//     let b = 2;
// }

// console.log(b);

if(true) {
    let c = 1;
}

// 조건문이나 반복문 안에서는 지역 스코프를 갖지않는다. 함수 선언식에만 적용

if (true) {
    let c = 1;
}

for (let i = 0; i < 10; i++) {
    let d = 1;
    function funcB() {}
}

funcB();