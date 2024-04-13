
// 반복문의 기본 문법
for (초기식; 조건식; 증감식) {
        console.log("반복");
}


// 반복문
for (let idx=0; idx < 5; idx++) {
        console.log("반복");
}

// 반복문 중간에 조건식을 걸어 중단시키는 방법
for (let idx=1; idx < 10; idx++) {
        console.log(idx);

        if (idx >= 5) {
                break;
        }
}

// 반복문 중간에 특정 회차를 건너뛰는 방법
for (let idx=1; idx < 10; idx++) {

        if (idx % 2 === 0) {
                continue;
        }
        console.log(idx);

        if (idx >= 5) {
                break;
        }
}