// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
};

animal.age = 2; // 추가
animal.name = "까망이" // 수정
delete animal.color; //삭제

console.log(animal);


// 오류 발생
// animal = 123;

// console.log(animal);

// 2. 메서드 
// 값이 함수인 프로퍼티를 말함

const person = {
    name : "이정환",
    // 메서드
    sayHi : function () {
        console.log("안녕!");
    },
    // 메서드 선언 : 객체의 동작을 정의한다.
    sayHi2() {
        console.log("안녕!2");
    },
};

person.sayHi();
person["sayHi2"]();