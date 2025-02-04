// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr = [
    { name: "이정환", hobby: "테니스" },
    { name: "김효빈", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr.filter((item)=>{
    if(item.hobby === "테니스") 
        return true;
});

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각의 콜백 함수를 실행하고
// 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1,2,3];
const mapResult1 = arr2.map((item, idx, arr)=> {
    return item*2;
})

console.log(mapResult1);

let names = arr.map((item)=>item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = [10, 3, 5];
arr3.sort((a, b)=> {
    if(a > b) {
        // 오름차순
        return 1;
    } else if (a < b) {
        // 내림차순
        return -1;
    } else {
        // 자리 그대로
        return 0;
    }
});

// console.log(arr3);

// 4. toSorted
// 원본 배열을 놔두고 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "winterload"];
const joined = arr6.join("-");

console.log(joined);