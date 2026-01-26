import './index.css'
import { useContext } from 'react'
import { MyContext} from '../context'
import { useNavigate } from 'react-router-dom'
const Profile = (props) => {
    const { data } = props
    const {setName} = useContext(MyContext)
    const navigate= useNavigate()

    const onProfileclick = (nameofprofile) => {
        setName(nameofprofile)  
        // console.log(name)
        navigate('/home')
    }

    return (
        <div className="profile" onClick={() => onProfileclick(data.name)}>
            <img className="profile-image" src={data.image} alt={data.name} />
            <p className="profileName">{data.name}</p>
        </div>
    )
}

export default Profile