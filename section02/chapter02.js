// function returnFalse(){
//     console.log("false 함수");
//     return undefined;
// }

// function returnTrue() {
//     console.log("true 함수");
//     return 10;
// }

// console.log(returnTrue() && returnFalse());

// 단락 평가 활용 사례
function printName(person) {
    // if(!person) {
    //     console.log("person에 값이 없음")
    //     return
    // }

    const name = person && person.name;
    // 단락 평가를 사용하면 아래 if 조건문이 필요 없다!
        console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });