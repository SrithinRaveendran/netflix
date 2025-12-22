import './index.css'
const FrontPage = () => {
    return (
        <div className="FrontPageMainBackground" >
            <div className="posterContainer"></div>
            <div className="chooseYourProfileMainContainer">

                <div className="chooseYourProfileContainer">
                    <div className="oval"></div>
                </div>

                <div className="ProfileSectionMainConatiner">
                    <div className="profile">
                        <img className="profile-image" src="./ai-generated-8035998_1280.png" alt="profile-1"/>
                         <p className="profileName">AR</p>
                    </div>
                    <div className="profile">
                        <img className="profile-image" src="./spiderman.png" alt="profile-2"/>
                         <p className="profileName">Guest</p>
                    </div>
                    <div className="profile">
                        <img className="profile-image" src="./boy.png" alt="profile-3"/>
                         <p className="profileName">AH</p>
                    </div>
                    <div className="profile">
                        <img className="profile-image" src="./anime.png" alt="profile-2"/>
                         <p className="profileName">Srithin</p>
                    </div>
                </div>
                
            </div>
        </div>
    )

}

export default FrontPage