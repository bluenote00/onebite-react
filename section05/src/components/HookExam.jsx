import { useInput } from "./../hooks/useinput"

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다. (if문과 반복문)
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.

// 함수 앞에 use라는 단어만 붙여주면 커스텀 훅으로 인식힌다. (getInput을 사용했을때는 useState에서 오류가 발생함)
const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />  
      <input value={input2} onChange={onChange2} />
    </div>
  );
}

export default HookExam;
