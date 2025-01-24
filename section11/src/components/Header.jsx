import './Header.css'
import { memo } from "react";

function Header() {
  return (
    <div className="Header">
    <h2>오늘은 📆</h2>
    <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

// props가 바뀌지 않으면 리렌더링 하지 않도록 설정
// const mamoizedHeader = memo(Header)

export default memo(Header)
