// 호이스팅 : 함수는 어느 순서에 선언해도 알아서 선언 -> 호출된다.

// return문을 사용해 동적 함수 만들기
let area1 = getArea(10, 20); 
// area1에 값이 저장된다.

console.log(area1);

// 함수
function getArea (width, height) { 

        // 중첩 함수 : 함수 내부에 또 다른 함수 선언
        function another() {
            console.log("another");
        }

        another();
        let area = width * height;
        return area;
}