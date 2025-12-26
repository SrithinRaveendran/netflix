import './index.css'

import Profile from '../Profile'


const profileDetails = [
    { name: "AR", image: "./ai-generated-8035998_1280.png" },
    { name: "Guest", image: "./spiderman.png" },
    { name: "AH", image: "/boy.png" },
    { name: "Srithin", image: './anime.png' }
]
const FrontPage = () => {
    
    return (
        <div className="FrontPageMainBackground" >
            <div className="posterContainer"></div>
            <div className="chooseYourProfileMainContainer">
                {/* background of profile selectio which i made using elipise from clip path css */}
                <div className="chooseYourProfileContainer">
                    <div className="oval"></div>
                </div>

                <div className="ProfileSectionMainConatiner">
                    {/* here maping the small container of image in the frontstart page */}
                    {profileDetails.map(each => <Profile data={each} key={each.name} />)}
                </div>

            </div>
        </div>
    )

}

export default FrontPage