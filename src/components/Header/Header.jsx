import { useSelector } from 'react-redux'
import './Header.css'


const Header = (props) => {
    const todosArr = useSelector((state) => state.todos)
    const todosArrLen = todosArr.reduce((acc, item) => {
        return acc + item.status
      }, 0)
    
    return <div className='Todods'><span>Todos ({todosArrLen}/{todosArr.length})</span></div>
}
export default Header