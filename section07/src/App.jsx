import "./App.css"
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // count가 실행될 때마다, 앞에 콜백 함수가 실행되게 된다.
  useEffect(()=> {
    console.log(`count : ${count} / input : ${input}`);
  }, [count, input]);
  // 의존성 배열 (dependency arry, deps) 
  // deps에는 값을 여러개 넣어도 된다.

  const onClickButton = (value) => {
    // 비동기 : 호출만 되고 완료는 되지 않은것
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
        <section>
          <input value={input} onChange={(e)=> {
            setInput(e.target.value);
          }} />
        </section>
        <section>
          <Viewer count={count} />
        </section>
        
        <section>
          <Controller onClickButton={onClickButton} />
        </section>
    </div>
  )
}

export default App
