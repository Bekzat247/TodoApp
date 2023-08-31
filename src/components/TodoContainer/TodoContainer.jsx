import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem'
import './TodoContainer.css'

function TodoContainer() {    
    const todosArr = useSelector((state) => state.todos)
    return (
            <div className='wrapper' >
                {   todosArr.length
                    ? 
                    todosArr.map((el) => 
                    <TodoItem 
                        id={el.id}
                        key={el.id}
                        title={el.title}
                        status={el.status}
                    />) 
                    : 
                    <h1 className='wrapper_h1'>There are no items yet</h1>
                }
            </div>
    )   
}


export default TodoContainer