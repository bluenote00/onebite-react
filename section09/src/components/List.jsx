import './List.css'
import TodoItem from './TodoItem'
import {useState} from "react";

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

  return (
    <div className="List">
      <h3>Todo List 💕</h3>
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
