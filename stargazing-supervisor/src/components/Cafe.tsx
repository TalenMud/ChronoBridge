import React from 'react';

function Cafe({ queue }) {
  return (
    <div>
      <h3>Cafe Queue</h3>
      <p>Customers in queue: {queue}</p>
      {/* Staff selection will go here */}
    </div>
  );
}

export default Cafe;
