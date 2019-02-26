import React from 'react';

const Experience = props => (
  <div className="Experience">
    <h2>Experience</h2>
    {props.data.map((exp, index) => (
      <div className='item' key={`Experience-${index}`}>
        <h3>{exp.jobTitle} @ {exp.company} <span>{exp.startDate} - {exp.endDate}</span></h3>
        <p>{exp.jobDescription}</p>
      </div>
    ))}
  </div>
);

export default Experience;


