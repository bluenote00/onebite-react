// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 배열의 모든 요소를 순회하며 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];

// item : 배열의 각 요소
// idx : 몇번 돌았는지 횟수
// arr : 배열
arr1.forEach( function (item, idx, arr) {
    //console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];
let isinclude = arr2.includes(3);

// console.log(isinclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1,2,3];
let index = arr3.indexOf(2);

// console.log(index);

let objectArr = [
    { name : "이정환" },
    { name : "홍길동" },
];

// console.log(
//     objectArr.indexOf({ name: "이정환" })
// )

// 값이 여러개일 경우, index는 앞에서부터 순환하여 가장 먼저 찾는 값의 위치를 찍는다.
// 값이 없는 경우 -1을 반환한다.
let arr4 = [2,2,2];
let index2 = arr4.indexOf(2);

// console.log(index2);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr5 = [1,2,3];
const findedIndex = arr5.findIndex((item)=>{
    if(item === 2) return true;
})

// console.log(findedIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데,
// 요소를 그대로 반환

let arr6 = [
    { name : "이정환" },
    { name : "홍길동" }
];

const finded = arr6.find(
    (item) => item.name === "이정환"
);

console.log(finded);

