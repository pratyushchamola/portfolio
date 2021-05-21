import React from 'react';
import author from '../images/avatars/home__title.png';

const AboutMe = () => {
    return (
        <div className="container py-5" id="about">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>

                <div className="col-lg-6 col-xm-12 p looks">
                    <h1 className="about-heading">about me</h1>
                    <p className="about-me-para">
                        Hello!, I'm <span className="name">Pratyush Chamola</span><br/>
                        Delhi based Computer Science Engineering Student,<br/>
                        Full-Stack Web Developer, <b>(MERN stack).</b><br/>
                        open-source enthusiast.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
