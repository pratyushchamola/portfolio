import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        // <div className="container">
            <div className="header-wraper" id="home">
                <div className="container">
                    <div className="main-info">
                        <canvas></canvas>
                        <h1 className="hello">Hello,</h1>
                        <h1>I'm Pratyush Chamola,</h1>
                        {/* <h1>& I am<span> */}
                            <Typed
                                className="typed-text"
                                strings={[" an Engineering student", " Web Developer", " Competitive Coder"]}
                                typeSpeed={40}
                                backSpeed={60}
                                loop
                            />
                        {/* </span></h1> */}
                        {/* <a href="#" className="btn-main-offer">contact me</a> */}
                        <Link smooth={true} to='contact' offset={-110} className="btn-main-offer" href="#">contact me</Link>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Header
