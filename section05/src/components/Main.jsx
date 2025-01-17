import "./Main.css"
// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. (true, false, null는 표현 안됨)
// 3. 모든 태그는 닫혀 있어야한다.
// 4. 최상위 태그는 반드시 하나여야만 한다. (빈 태그도 상관없다.)
const Main = () => {
  const user = {
    name : "이정환",
    isLogin: true,
};

  if(user.isLogin) {
    return (
    <div className="logout"
    >로그아웃</div>);
  } else {
    return <div>로그인</div>;
  }

  // return (
  //   <>
  //     {user.isLogin ? (
  //       <div>로그아웃</div>
  //       ) : (
  //       <div>로그인</div>
  //     )}
  //   </>
  //   );
};

export default Main