// App.jsx에서 구조분해할당으로 props를 받아와 렌더링한다.
const Viewer = ({count}) => {
    return (
    <div>
        <div>현재 카운트 :</div>
        <h1>{count}</h1>
    </div>
    );
}

export default Viewer