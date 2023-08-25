import React from 'react';

function SearchResults({ pairs }) {
  return (
    <div>
      {pairs.map((pair) => (
        <div key={pair.pairAddress}>
          {/* Display pair information here */}
          <p>{pair.baseToken.name}/{pair.quoteToken.symbol}</p>
          <p>Price: {pair.priceUsd}</p>
          {/* Other pair information */}
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
