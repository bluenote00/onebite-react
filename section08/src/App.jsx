import './App.css'
import { useState, useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

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

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3)

  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone: false,
      content: content,
      date : new Date().getTime()
    }

    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId) => {
    // todos State의 값을 통해 targetId와 일치하는 id를 값는 아이템의 isDone을 변경
    // 인수 : todos를 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열
    setTodos(todos.map((todo)=>
      todo.id === targetId
        ? {...todo, isDone: !todo.isDone}
        : todo
    ));
  };

  const onDelete = (targetId) => {
    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} 
        onUpdate={onUpdate} 
        onDelete={onDelete} />
    </div>
  );
}

export default App;
