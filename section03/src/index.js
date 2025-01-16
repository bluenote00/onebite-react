
// commonJS 모듈 형식 호출
//const moduleData = require("./math");

// 객체의 구조분해 할당 방식
//const {add, sub} = require("./math");

//console.log(moduleData.add(1,2));
//console.log(moduleData.sub(1,2));

// ES6 모듈 형식 호출 - 확장자까지 표기해야함
import {add, sub} from "./math.js";

// ES6의 default 호출 - 중괄호를 뺀다.
import multiply from "./math.js";

// default 함수의 경우 이름을 바꾸는 것도 가능하며, 이렇게 합쳐서 호출하는 것도 가능하다.
// import mul, {add, sub} from "./math.js";

console.log(add(1,2));
console.log(sub(1,2));
console.log(multiply(1,2));
