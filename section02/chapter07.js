// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// 변경된 후의 배열의 길이를 반환한다.
let arr1 = [1,2,3]
const newLength = arr1.push(4,5,6,7);

 // console.log(arr1);
 // console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 요소를 반환
let arr2 = [1,2,3];
const poppedItem = arr2.pop();

// console.log(arr2);
// console.log(poppedItem);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환한다.
let arr3 = [1,2,3];
const shiftedItem = arr3.shift();

// console.log(shiftedItem, arr3);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
// push처럼 변경된 후의 배열의 길이를 반환한다.
let arr4= [1,2,3];
const newLength2 = arr4.unshift(0);

// console.log(newLength, arr4);


// 5. slice
// 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1,2,3,4,5];
// 뒤의 숫자 5는 5번 인덱스 전까지 잘라낸다는 의미 (5-1)
arr5.slice(2, 5); 

let sliced = arr5.slice(2, 5);
// console.log(sliced);

// 만약 두번째 인수를 쓰지 않을 경우, 맨 처음부터 적은 인수까지 자른다.
arr5.slice(2);
let sliced2 = arr5.slice(3);
// console.log(sliced2);

// 만약 뒤에서부터 자르고싶다면 음수값을 넣으면 된다.
let sliced3 = arr5.slice(-1);
// console.log(sliced3);


// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1,2];
let arr7 = [3,4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);