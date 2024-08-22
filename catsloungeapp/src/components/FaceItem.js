import React from 'react';


function FactItem({ fact }) {
  return (
    <div className="fact-item">
      <p>{fact.text}</p>
    </div>
  );
}

export default FactItem;
