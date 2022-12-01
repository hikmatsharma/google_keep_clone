import React from "react";
import Logo from "./Images/logo1.png";

const Header = ()=>{
    return (<>
    <div className="header">
        <img src={Logo} alt="logo" width='70' />
        <h1> Google Keep</h1>
    </div>

    </>);
};
export default Header;