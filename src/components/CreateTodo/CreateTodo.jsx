import {useState} from 'react'
import './CreateTodo.css'


const CreateTodo = (props) => {
    const [value, setValue] = useState('')
    const submit = (e) => {
        e.preventDefault()
        props.addTodo(value)
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