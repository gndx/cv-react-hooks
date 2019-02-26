import React from 'react';

const Education = props => (
  <div className="Education">
    <h2>Education</h2>
    {props.data.map((edu, index) => (
      <div className='Education-item' key={`Education-${index}`}>
        <h3>{edu.degree} @ {edu.institution} <span>{edu.startDate} - {edu.endDate}</span></h3>
        <p>{edu.description}</p>
      </div>
    ))}
  </div>
);

export default Education;