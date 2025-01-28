import './App.css'
import { useReducer, useRef, createContext, useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import NotFound from './pages/NotFound'

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      { nextState = [action.data, ...state];
        break;
      }
    case "UPDATE":
      {nextState = state.map((item) =>
        String(item.id) === String(action.data.id)
          ? action.data
          : item
      );
      break;
    }
    case "DELETE":
      { nextState = state.filter(
        (item) => String(item.id) !== String(action.id)
      );
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0)

  useEffect(()=>{
    const storedData = localStorage.getItem("diary");
    if(!storedData) {
      return;
    }

    const parsedData = JSON.parse(storedData);
    if(!Array.isArray(parsedData)) {
      return;
    }

    let maxId = 0;

    parsedData.forEach((item) => {
      if(Number(item.id) > maxId){
        maxId = Number(item.id)
      }
    });

    idRef.current = maxId + 1;

    dispatch ({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, [])

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
      dispatch({
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

    if(isLoading) {
      return <div>데이터 로딩 중입니다...</div>
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
  );
}

export default App;
