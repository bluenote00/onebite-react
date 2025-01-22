import './List.css'
import TodoItem from './TodoItem'
import { useState,useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getFilterdData = () => {
    if(search === "") {
      return todos;
    }
    return todos.filter((todo)=>
      todo.content.toLowerCase()
      .includes(search.toLowerCase()))
  }

  const filteredTodos = getFilterdData();

  // 의존성 배열 : deps
  const { totalCount, doneCount, notDoneCount } = 
  useMemo(() => {
    console.log("getAnalyzedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo)=>todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  }, [todos]);
  // deps를 기준으로 메모이제이션을 한다. -> 한번만 수행

  return (
    <div className="List">
      <h3>Todo List 💕</h3>
      <div>
       <div>total : {totalCount}</div>
       <div>done : {doneCount}</div>
       <div>notDone : {notDoneCount}</div>
      </div>

      <input value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요" />
      <div className='todos_wrapper'>
        {filteredTodos.map((todo) => {
          return (
          <TodoItem 
            key={todo.id} 
            {...todo}
            onUpdate={onUpdate} 
            onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  )
}

export default List
