import './App.css';
import Header from './components/Header/Header'
import CreateTodo from './components/CreateTodo/CreateTodo'
import TodoContainer from './components/TodoContainer/TodoContainer';
import { useState } from 'react';


function App() {
  const [todosArr, setTodosArr] = useState([
    {title: 'Купить бананы',status: false, id: 1},
    {title: 'Купить яблоки',status: false, id: 2},
    {title: 'Купить ческнок',status: false, id: 3},
    {title: 'Купить арбуз',status: false, id: 4},
    {title: 'Купить картошку',status: false, id: 5},
    {title: 'Купить грушу',status: false, id: 6}
  ])

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
