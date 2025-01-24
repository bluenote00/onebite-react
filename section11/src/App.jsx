import './App.css'
import { 
    useState, 
    useRef, 
    useReducer, 
    useCallback,
    createContext,
    useMemo 
  } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
// import Exam from "./components/Exam"

const mockData = [
  {
    id : 0,
    isDone : false,
    content : "리액트 공부하기",
    date : new Date().getTime(),
  },    
  {
    id : 1,
    isDone : false,
    content : "그림 공부하기",
    date : new Date().getTime(),
  },   
  {
    id : 2,
    isDone : false,
    content : "책 읽기",
    date : new Date().getTime(),
  },   
]

function reducer(state, action) {
  switch(action.type) {
    case "CREATE" : return [action.data, ...state]
    case "UPDATE" : return state.map((item)=>
      item.id === action.targetId? {...item, isDone: !item.isDone
      } : item);
    case "DELETE" : return state.filter(
      (item) => item.id !== action.targetId
    );
    default: return state;
  }
}

// context 선언
// export const TodoContext = createContext(); 

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  //const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3)

  const onCreate = useCallback((content) => {
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current ++,
        isDone : false,
        content : content,
        date : new Date().getTime(),
      },
    })
  },[])

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type : "UPDATE",
      targetId : targetId,
    })
  }, [])

  // useCallback에 의해 마운트 되었을때만 딱 한 번 생성이 된다!
  // 그 이후에 리렌더링이 아무리 많이 되어도 다시 생성되지 않도록 최적화가 된다.
  const onDelete = useCallback((targetId) => {
    dispatch({
      type : "DELETE",
      targetId : targetId,
    });
  }, [])

  const memoizeDispatch = useMemo(()=>{
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
          value={ memoizeDispatch }>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
