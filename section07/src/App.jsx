import "./App.css"
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import Even from './components/Even';

import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  
  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  // 처음 실행될때만 useEffect를 사용하고싶다면 빈 배열을 넣는다.
  useEffect(()=>{
    console.log("mount");
  }, [])

  // 2. 업데이트 : 변화, 리렌더링
  // 콜백 함수에서 배열을 아예 제거한다. 화면이 리렌더링 될때마다 갱신됨
  // 정말 업데이트 할때만 사용하고싶다면, useRef를 사용해 플래그를 세운다.
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update");
  })

  // 3. 언마운트 : 죽음


  // count가 실행될 때마다, 앞에 콜백 함수가 실행되게 된다.
  // useEffect(()=> {
  //   console.log(`count : ${count} / input : ${input}`);
  // }, [count, input]);
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
          {count % 2 === 0? <Even /> : null}
        </section>
        
        <section>
          <Controller onClickButton={onClickButton} />
        </section>
    </div>
  )
}

export default App
