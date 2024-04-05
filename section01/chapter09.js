// 1. if 조건문 (if문)
let num = 9;

// if(num >= 10) {
//         console.log("num은 10 이상입니다."); 
//         // 위의 조건이 참이 아닐 경우, cosole.log가 찍히는 결과는 실행되지 않는다.
//         console.log("조건이 참입니다."); // 조건문 내부에 코드를 여러줄 작성 할 수 있다.

// } else if(n >= 5) {
//         console.log("num은 5 이상입니다.");
// } else if(n >= 3) {
//         console.log("num은 5 이상입니다.");
// }else { // 그렇지 않으면이라는 조건문
//         console.log("조건이 거짓입니다.")        
// }
// // 조건은 if로 시작해서, 마지막은 else로 끝나야 한다.


// 2. Switch문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "owl";

switch(animal) {
        case "cat" : {
                console.log("고양이")
                break;
        }
        case "dog" : {
                console.log("강아지")
                break;
        }
        case "bear" : {
                console.log("곰")
                break;
        }
        case "snake" : {
                console.log("뱀")
                break;
        } 
        case "tiger" : {
                console.log("호랑이")
                break;
        }
        default :  {
        console.log("그런 동물은 전 모릅니다.")
        }
}