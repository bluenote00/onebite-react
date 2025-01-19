import { useRef, useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Resister = () => {
  const [input, setInput] = useState({
    name : "",
    birth : "",
    country : "",
    bio: "" ,
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  // count가 아무리 호출되도 0에서 리셋되고 시작함
  let count = 0;

  const onChange = (e) => {
    // CountRef.current ++;
    count++;
    console.log(count);

    setInput({
      ...input,
      // 프로퍼티 키 설정 : input 태그의 name 값을 따라가겠다!
      [e.target.name] : e.target.value,
    })
  }

  const onsubmit = () => {
    if(input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      console.log(inputRef.current)
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input 
          ref={inputRef}
          name="name"
          value={input.name} 
          onChange={onChange} 
          placeholder={"이름"} 
        />
        {input.name}
        </div>
        <div>
          <input
            name="birth"
            value={input.birth} 
            type="date" 
            onChange={onChange} 
        />
        {input.birth}
      </div>
      <div>
          <select
            name="country"
            value={input.country} 
            onChange={onChange} 
          >
            <option></option>
            <option value="kr">한국</option>
            <option value="usa">미국</option>
            <option value="eu">영국</option>
          </select>
          {input.country}
      </div>
        <div>
          <textarea
            name="bio"
            value={input.bio} 
            onChange={onChange} 
        />
        {input.bio}
      </div>
      <button onClick={onsubmit}>제출</button>
    </div>
  )
}

export default Resister;