import React from 'react';

const Skills = props => (
  <div className="Skills">
    <h2>Skills</h2>
    <div className="Skills-container">
      {props.data.map((skill, index) => (
        <div className='Skills-item' key={`Skills-${index}`}>
          <h5>{skill.name}</h5>
          <div className='skills-line'>
            <span style={{ width: skill.percentage }}></span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;