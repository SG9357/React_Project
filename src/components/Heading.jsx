import { useState } from "react";
import { Company_logo } from "../Utils/Constants";
import { Link } from "react-router-dom";
import UseStatus from "../Utils/useStatus";

const Heading=()=>{
    const [btnVal,setBtnval]=useState('Login')
    const onlineStatus=UseStatus()

    return(
        <div className="heading">
            <div className="image">
            <Link to="/"><img  className="logo" src={Company_logo} alt="Logo"/></Link>
            </div>
            <div className="links">
                <ul >
                    {/* <li><Link to="/">Home</Link> </li> */}
                    <li>{onlineStatus? "Online:✅":"Offline:🔴"} </li>
                    <li><a href="/"> Home</a></li>
                    <li><Link to="/about">About Us</Link> </li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className='login' onClick={()=>{
                        btnVal=='Login' ?setBtnval('Logout'):setBtnval('Login');
                    }}>{btnVal}</button>
                </ul>
            </div>
        </div>
    )
}

export default Heading;