import './CreateTodo.css'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux'


const CreateTodo = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const submit = (e) => {
        e.preventDefault()
        dispatch(addTodo(value))
        setValue('')
    }
    const handlechange = (e) => {
        setValue(e.target.value)
    }
    return (
            <form onSubmit={submit}  className="CraeteTododiv">
                <input value={value} onChange={handlechange} type="text" placeholder='Add your list...'/>
                <button>Send</button>
            </form>
    )
}
export default CreateTodo   