import './App.css';
import Header from './components/Header/Header'
import CreateTodo from './components/CreateTodo/CreateTodo'
import TodoContainer from './components/TodoContainer/TodoContainer';
import { useState } from 'react';
import Filter from './components/filter/filter';
// import { useSelector } from 'react-redux';


function App() {
  const [status, setStatus] = useState('All') 
  // const todosArr = useSelector((state) => state.todos)

  //This is Filter! Thats be used in future!
  // const newTodo = todosArr.filter((item) => {
  //   if (status ==='All') return item
  //   if (status === 'compleate' && item.status) return item
  //   if (status === "Progress" && !item.status) return item
  // })


  return (
    <div className="App">
      <Header />
      <CreateTodo />
      <TodoContainer/>
      <Filter setStatus={setStatus} status={status}/>
    </div>
  );
}


export default App;
