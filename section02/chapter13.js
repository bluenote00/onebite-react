function add10(num){
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executor
        setTimeout(() => {
            if(typeof num === 'number'){
                resolve(num + 10);
            } else {
                reject("num은 숫자가 아닙니다.")
            }
            // console.log("안녕");
            // resolve("안녕"); // promise 객체 상태를 완료로 바꾸어줌 -> 결과값도 담음
            // reject("왜 실패했는지 이유");  // promise 객체 상태를 실패로 바꾸어줌 -> 결과값도 담음
        }, 2000);
    })

    return promise;
}

add10(9)
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(undefined);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

// then 메서드 : 프로미스 함수의 결과값을 담음
// 그 후에
// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });
