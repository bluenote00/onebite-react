const Button = ({text, color, children}) => {
    return (
    <button style={{color: color}}>
        {text} - {color}
        {/* 값이 전달이 안될 경우, 아래는 오류가 뜸 */}
        {text} - {color.toUpperCase()}
        {children}
    </button>
    );
};

// 값이 전달 안될 경우 오류가 뜰 것을 방지해 기본값을 설정함
Button.defaultProps = {
    color: "black",
}

export default Button;