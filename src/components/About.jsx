import React from 'react';
import Social from './Social';

const About = ({ avatar, name, profession, bio, address, social }) => (
  <div className="About">
    <div className="About-container">
      <div className="About-avatar">
        <figure>
          <img src={avatar} alt={name} />
        </figure>
      </div>
      <div className="About-name">
        <h2>{name}</h2>
      </div>
      <div className="About-profession">
        <p>{profession}</p>
      </div>
      <div className="About-desc">
        {bio}
      </div>
      <div className="About-location">
        {address}
      </div>
      <div className="About-social">
        <Social social={social} />
      </div>
    </div>
  </div>
);

export default About;