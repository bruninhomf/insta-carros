import React from 'react';
import Logo from './../img/logo.png';
import Phone from './../img/phone.svg';
import User from './../img/user.svg';
import Caret from './../img/caret.svg';


const Header = props => {
    return (
        <div className="nav">
            <div className="card-nav">
                <div className="card-logo">
                    <img src={Logo} className="logo"></img>
                </div>
                <div className="card-divider"><div className="divider"></div></div>
                <div className="card-phone">
                    <img src={Phone} className="logo-phone"></img>
                    <div className="phone">(11) 3569-3465</div>
                </div>
                <div className="card-user">
                    <div className="user-group">
                        <img src={User} className="user"></img>
                        <div className="user-name">User test</div>
                    </div>
                    <img src={Caret} className="caret"></img>
                </div>
            </div>
        </div>
    )
}

export default Header