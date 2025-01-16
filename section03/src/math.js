// 간단한 계산기 기능을 하는 math 모듈
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}

// common js 모듈 시스템 이용
//module.exports = {
    // 이름 : 값 -> 이름과 값이 같을 경우 하나만 써줘도 상관없다.
    //add : add,
    //sub : sub,
    //add,
    //sub
//}

// ES6 모듈 시스템 이용
//export {add, sub};