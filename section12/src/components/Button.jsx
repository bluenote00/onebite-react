import './Button.css'

// 같은 버튼이지만 들어오는 값에 따라 다른 버튼을 띄우게 하기 위해 생성
const Button = ({ text, type, onClick }) => {
    return (
        <button onClick={onClick} className={`Button Button_${type}`}>
            {text}
        </button>
    );
};

export default Button;
