import "./login_Form.css"
import profile_icon from '../assets/user.png'
import password_icon from '../assets/password.png'
import fb_icon from '../assets/facebook.png'
import google_icon from '../assets/google.png'
import x_icon_icon from '../assets/x.png'

var su =()=>(alert("page not linked 😃"))
var lo =()=>(alert ("go sign up first 😒 "))



export default function Login(){
    return(
        <div>
            <div className="container">
                <div className="header">
                    <div className="text">
                        Sign Up
                    </div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img className="icon" src={profile_icon} alt="" />
                        <input type="email" />
                    </div>
                    <div className="input">
                        <img className="icon" src={password_icon} alt="" />
                        <input type="password" />
                    </div>
                </div>
                <div className="submit-container">
                    <div className="submit">
                        <button onClick={su}>Sign Up</button>
                    </div>
                    <div className="submit">
                        <button onClick={lo}>Login</button>
                    </div>

                </div>
                <div className="forgot-password">
                    Lost Password?
                    <span className="click_here"> click here</span>
                </div>
                <span className="others">
                    <a href="https://www.facebook.com/login.php"><img className="other_icons" src={fb_icon} alt="" /></a>
                    <a href="https://accounts.google.com/Login"><img className="other_icons" src={google_icon} alt="" /></a>
                    <a href="https://twitter.com/i/flow/signup"><img className="other_icons" src={x_icon_icon} alt="" /></a>
                </span>
            </div>
        </div>
    )
}
