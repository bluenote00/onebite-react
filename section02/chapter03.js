// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// 각각 arr 배열의 1,2,3 값이 할당된다.
// let [one, two, three] = arr;
// console.log(one, two, three);


// 만약 배열을 늘려도 오류가 발생하진 않고 없는 배열의 값은 undefined가 뜨게 된다.
let [one, two, three, four = 4] = arr;

console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
    name : "이정환",
    age : 27,
    hobby : "테니스"
};

// 각각의 프로퍼티를 키 값으로 구조 분해 할당한다.
// 객체의 구조 분해 할당은 배열과는 다르게 중괄호를 사용한다.
let {name, age : myAge, hobby} = person;

console.log(name, myAge, hobby);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
}

// 객체 구조 분해 할당은 객체를 넘겼을때만 중괄호와 함게 구조분해 할당을 받을 수 있다.
func(person)
