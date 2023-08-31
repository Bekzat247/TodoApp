import { useState } from 'react';
import css from'./TodoItem.module.css'
import { useDispatch } from 'react-redux';
import { InputChangeTodo, deleteTodo, statusChangeTodo } from '../../redux';



function TodoItem (props) {
    const [isEdit, setIsEdit] = useState(true)
    const [inputValue, setInputValue] = useState(props.title)
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteTodo(props.id))
    };
    const handlechange = (e) => {   
        setInputValue(e.target.value)
    }

    const handleStatus = () => {
        dispatch(statusChangeTodo(props.id))
    }
    const handleSave = () => {  
        dispatch(InputChangeTodo({id: props.id, text: inputValue}))
        setIsEdit(true)
    }
    return <div className={css.Todo}>
        {isEdit ? 
        (
            <label className={css.checkbox1}>
                <input type="checkbox" checked={props.status} onChange={handleStatus}/>
                <span className={props.status ? css.compleate : ''}>{props.title}</span>
            </label>
        )
        :
        (<input type="text" value={inputValue} placeholder='Your text' onChange={handlechange} className={css.input}/>)}
        
        <div>
            {
                isEdit ? 
                <button onClick={( ()=> setIsEdit(false))}>Edit</button> 
                :
                <button onClick={handleSave}>Save</button>
            }
            <button onClick={handleDelete}>Del</button>
        </div>
    </div>
}


export default TodoItem