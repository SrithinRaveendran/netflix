import './index.css'
const CategoryButton = (props) => {
    const {name} = props
    return (
        <div className='categorybuttoncontainer'>
            <button className='categorybutton'>{name}</button>
        </div>
    )
}

export default CategoryButton