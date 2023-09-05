import logo from '/assets/loggo.png';
import { useState } from 'react';

const Logo=()=>{
    return(
        <a href="/">
            <img src={logo} alt="user-icon" width={180} height={90} className="icon"/>
        </a>
    )
};

const Header=()=>{
    
    const [isLoggedin, setIsLoggedin] = useState(true);
    
    return(
        <div className="header">
            <Logo/>
            <div className="header-items">
                <span>Home</span>
                <span>About</span>
                <span>Contact Us</span>
                <span>
                {isLoggedin ? (
                    <button
                        className="logout-btn"
                        onClick={() => setIsLoggedin(false)}
                    >
                        Logout
                    </button>
                    ) : (
                    <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                        Login
                    </button>
                )}
                </span>
            </div>
        </div>
    )
};

export default Header;
