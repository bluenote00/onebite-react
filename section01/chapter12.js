// 1. 함수 표현식
function funcA() {
    console.log("funcA");
}

let varA = funcA;

varA();


// 함수를 변수에 담아 선언하는 것도 가능하다.
// 변수에 담은 함수명은 이름을 생략해도 된다 '익명함수'
// 익명 함수는 호이스팅에서 제외된다.
let varB = function funcB() {
    console.log("funcB");
}

varB();

// 2. 화살표 함수
let varC = () => {
    return 1;
};

console.log(varC());

// 2-1. 화살표 함수는 RETURN문 생략도 가능하다!
let varD = () => 1;


// 2-2. 화살표 함수에서 매개변수와 추가 함수 작성해보기
let varE = (value) => {
    console.log(value);
    return value + 1;
}

