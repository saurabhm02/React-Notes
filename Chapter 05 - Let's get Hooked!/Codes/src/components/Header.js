import logo from '/assets/logo.png';

const Logo=()=>{
    return(
        <a href="/">
            <img src={logo} alt="user-icon" className="icon"/>
        </a>
    )
};

const Header=()=>{

    
    return(
        <div className="header">
            <Logo/>
            <div className="header-items">
                <span>Home</span>
                <span>About</span>
                <span>Contact Us</span>
            </div>
        </div>
    )
};

export default Header;
