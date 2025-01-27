import './App.css'
import { useReducer } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import NotFound from './pages/NotFound'

const mockData = [
  {
    id : 1,
    createdDate : new Date().getTime(),
    emotionId : 1,
    content : "1번 일기 내용"
  },
   {
    id : 2,
    createdDate : new Date().getTime(),
    emotionId : 2,
    content : "2번 일기 내용"
  },
]

function reducer(state, action) {
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />

        {/* 동적 경로 : URL Parameter */}
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />

        {/* 와일드 카드 : 스위치문의 default 같은 것 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
