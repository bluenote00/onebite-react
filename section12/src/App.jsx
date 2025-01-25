import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import NotFound from './pages/NotFound'

// 1. "/" : 모든 일기를 조회하는 home
// 2. "/new" : t새로운 일기를 작성하는 new 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  return (
    <>
      <div>Hello</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />

        {/* 와일드 카드 : 스위치문의 default 같은 것 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
