import './App.css';
import Header from './components/Header/Header'
import CreateTodo from './components/CreateTodo/CreateTodo'
import TodoContainer from './components/TodoContainer/TodoContainer';
import { useState, useEffect } from 'react';


function App() {
  const [todosArr, setTodosArr] = useState(JSON.parse(localStorage.getItem('list')) || [])
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(todosArr))
    
  }, [todosArr])
  const addTodo = (newStr) => {
    setTodosArr(
      [...todosArr,
        {title: newStr, status: 0, id: Date.now()}
      ]
    )
  }
  
  const onDelete = (id) => {
    const newTodosArr = todosArr.filter((item) => item.id !== id)
    setTodosArr(newTodosArr)
  };

  const uneversal = (id, text) => {
    const newTodosArr = todosArr.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status, title: text};
      }
      return item;
    });
    setTodosArr(newTodosArr);
  }

  const onStatusChange  = (id, text) => {
    uneversal(id, text)
  };

  const onInputChange = (id, text) => {
    uneversal(id , text)
  }

  const todosArrLen = todosArr.reduce((acc, item) => {
    return acc + item.status
  }, 0)

  return (
    <div className="App">
      <Header first_id={todosArrLen} last_id={todosArr.length}/>
      <CreateTodo addTodo={addTodo}/>
      <TodoContainer
      
        todosArr={todosArr} 
        onDelete={onDelete} 
        onChange={onStatusChange}
        onEdit={onInputChange}
      />
    </div>
  );
}


export default App;
