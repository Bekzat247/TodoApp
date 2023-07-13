import './Header.css'


const Header = (props) => {
    // console.log(props);
    return <div className='Todods'><span>Todos ({props.first_id}/{props.last_id})</span></div>
}
export default Header