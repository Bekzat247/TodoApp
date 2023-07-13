import { useState } from 'react';
import css from'./TodoItem.module.css'

function TodoItem (props) {
    const [isEdit, setIsEdit] = useState(true)
    const [inputValue, setInputValue] = useState(props.title)

    const handleDelete = () => {
        props.onDelete(props.id);
    };
    const handlechange = (e) => {
        setInputValue(e.target.value)
    }

    const handleStatus = () => {
        props.onStatus(props.id, props.title)
    }
    const handleSave = () => {
        props.onEdit(props.id, inputValue)
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