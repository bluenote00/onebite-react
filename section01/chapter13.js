// 1. 콜백 함수 : 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미. 지금 당장이 아니라 원하는 타이밍에 실행되게 할 수 있다.
function main(value) {
   value();
}

main(() => {

}); 

// 2. 콜백 함수의 활용 : 중복 코드를 발생시키지 않고 함수를 활용할 수 있다.
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
       callback(idx);
    }
}

repeat(5, function (idx) {
    console.log(idx * 2);
}); 


function repeatDouble(count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx * 2);
    }
}

repeat(5);
repeatDouble(5);
