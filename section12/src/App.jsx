import './App.css'
import { useReducer, useRef, createContext } from 'react'
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
  switch(action.type) {
    case "CREATE" : return [action.data, ...state];
    case "UPDATE" : return state.map((item) => 
      String(item.id) === String(action.data.id) ? action.data : item
    );
    case "DELETE" : return state.filter(
      (item) => String(item.id) !== String(action.id)
    );

    default : return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3)

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data : {
        id : idRef.current++, 
        createdDate,
        emotionId,
        content,
      }
    })
  }

  // 기존 일기 수정
    const onUpdate = (id, createdDate, emotionId, content) => {
      dispatch(
        {
          type: "UPDATE",
          data : {
            id, 
            createdDate, 
            emotionId, 
            content,
          }
        }
      )
    }

  // 기존 일기 삭제
    const onDelete = (id) => {
      dispatch({
          type: "DELETE",
          id, 
        }
      )
    }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider 
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />

            {/* 동적 경로 : URL Parameter */}
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />

            {/* 와일드 카드 : 스위치문의 default 같은 것 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
