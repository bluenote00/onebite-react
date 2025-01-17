import './App.css'
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"
import Button from "./components/Button.jsx"

// App 컴포넌트
function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
    <Button {...buttonProps} />
    <Button text={"카페"} />
    <Button text={"블로그"}>
      <div>자식요소</div>
    </Button>
    </>
  )
}

export default App