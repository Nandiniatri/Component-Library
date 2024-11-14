import React from 'react';

const Card = ({ title, content, style , className}) => {
  return (
    <div style={style} className={className}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
