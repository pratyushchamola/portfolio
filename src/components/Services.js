import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCogs,
    faCube,
    faFileCode,
    faMobile,
    faLaptop
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="services" id="services">
            <div className="container">
                <h1 className="py-5">Skills</h1>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                {" "}
                                <FontAwesomeIcon
                                className="icon"
                                icon={faFileCode}
                                size={"2x"}
                                />
                            </div>
                            <h3>Front End</h3>
                            <p>
                                HTML, CSS, Javascript, React.js, Bootstrap
                            </p>
                            </div>
                    </div>
                {/*-*/}
                <div className="col-md-3 col-sm-6">
                    <div className="box">
                    <div className="circle">
                    
                        <FontAwesomeIcon className="icon" icon={faMobile} size={"2x"} />
                    </div>
                    <h3>Backend</h3>
                    <p>
                        Mongodb, Nodejs, Expressjs, Firebase 
                    </p>
                    </div>
                </div>
                {/*-*/}
                <div className="col-md-3 col-sm-6">
                    <div className="box">
                    <div className="circle">
                        {" "}
                        <FontAwesomeIcon className="icon" icon={faLaptop} size={"2x"} />
                    </div>
                    <h3>Languages</h3>
                    <p>
                        C, C++, Javascript, Python
                    </p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="box">
                    <div className="circle">
                        {" "}
                        <FontAwesomeIcon className="icon" icon={faCogs} size={"2x"} />
                    </div>
                    <h3>ToDo</h3>
                    <p>Python, Django, and other</p>
                    </div>
                </div>
                </div>
            </div>
    
        </div>

    );
}

export default Services
