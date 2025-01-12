// 1. 객체 생성

// JS에는 객체를 생성하는 방법이 두가지가 있다.
// 객체 생성자라고 불리는 내장 함수를 이용한 방법
let obj1 = new Object()

// 객체 리터럴 방법 (대부분 이 방법을 사용한다.)
let obj2 = {};


// 2. 객체 프로퍼티
// person : 객체
// name,age,hobby를 객체 프로퍼티(속성)이라고 부른다.
// 프로퍼티들은 객체의 정보를 담고 있다.
// key : value
// 프로퍼티에는 갯수와 자료형의 제한이 없다. (객체, 함수도 가능)
let person = {
    name : "이정환",
    age : 27,
    hobby : "테니스",
    job : "FE Developer",
    extra : {},
    "like cat" : true // 띄어쓰기가 있을 경우, 따옴표로 감싸주어야 한다.
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근하는 방법 (점 표기법, 괄호 표기법)
// 점 표기법
let name = person.name;
//console.log(name);

// 괄호 표기법
let age = person["age"];
//console.log(age);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

//console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator"
person["favoriteFood"] = "초콜릿";

//console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

//console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result1);
console.log(result2);