import React from 'react';
import PropTypes from 'prop-types';
import "../styles/FactsList.css";

function FactsList({ facts }) {
  if (!facts) {
    return <p>No facts available.</p>;
  }

  return (
    <div className="facts-list">
      {facts.length > 0 ? (
        facts.map((fact) => (
          <div key={fact._id} className="fact-item">
            <p>{fact.text}</p>
          </div>
        ))
      ) : (
        <p>No facts available.</p>
      )}
    </div>
  );
}

FactsList.propTypes = {
  facts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FactsList;
