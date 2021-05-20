import React from 'react'

const Experience = () => {
    return (
      <div className="experience" id="experience">
        <div className="d-flex justify-content-center my-5">
          <h1>Academics</h1>
        </div>
        <div className="container experience-wrapper">
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2015-2016</h3>
              <p>High School<br/>CGPA: 10</p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2017-2018</h3>
              <p>Intermediate<br/>Percentage: 94.2%</p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2019-present</h3>
              <p>Pursuing B.Tech (CSE)<br/>CGPA (till current sem): 9</p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2020-present</h3>
              <p>Started with Webdevelopment, made several projects uploaded on github
              </p>
            </div>
          </div>

        </div>
      </div>
    )
  }
export default Experience

