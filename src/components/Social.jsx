import React from 'react';

const Social = props => (
  <div className="Social">
    {props.social &&
      <ul>
        {props.social.map((item, index) =>
          <li key={`social-${index}`}>
            <a href={item.url} target='_blank'>
              {item.name}
            </a>
          </li>
        )}
      </ul>
    }
  </div>
);


export default Social;