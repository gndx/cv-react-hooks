import React from 'react';

const Skills = props => (
  <div className="Skills">
    <h2>Skills</h2>
    {props.data.map((skill, index) => (
      <div className='Skills-item' key={`Skills-${index}`}>
        <h5>{skill.name}</h5>
        <div className='skills'>
          <span style={{ width: skill.percentage }}></span>
        </div>
      </div>
    ))}
  </div>
);

export default Skills;