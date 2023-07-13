import TodoItem from '../TodoItem/TodoItem'
import './TodoContainer.css'


function TodoContainer(props) {
    return (
        <div className='wrapper' >
            {
                props.todosArr.map((el) => 
                <TodoItem 
                    id={el.id}
                    key={el.id}
                    title={el.title}
                    status={el.status}
                    onDelete={props.onDelete}
                    onStatus={props.onChange}
                    onEdit={props.onEdit}
                />)
            }
        </div>
    )   
}


export default TodoContainer