import css from './filter.module.css'

const Filter = (props) => {
    const onStatus = (e) => {
        props.setStatus(e.target.name)
        console.log(e.target.name);
    }
    return (<div className={css.wrapper}>
        <label>
            <input 
                type="checkbox"
                checked={props.status === 'All'}
                name="All"
                onChange={onStatus} 
            />
            All
        </label>
        <label>
            <input 
                type="checkbox" 
                checked={props.status ==='Compleate'}
                name="compleate"
                onChange={onStatus}
            />
            Compleated
        </label>
        <label>
            <input 
                type="checkbox" 
                name='progress'
                checked={props.status ==='progress'}
                onChange={onStatus}
            />
            Unfinished
        </label>
    </div>)
}
export default Filter