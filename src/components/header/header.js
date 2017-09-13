import React from 'react';

const Header = () =>{
    return(
        <div className="navWrap">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/home">NEXT GEN TOOL</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right"> 
                        <li classID="active"><a href="/login">Logout</a></li>
                        <li classID="active"><a href="#">Download</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;