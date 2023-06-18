import React, { useState } from 'react';
import BallContainer from './Ball';
import { technologies } from '../constants';

const TechStack = () => {
  const [stack, setStack] = useState('languages');

  const handlePageChange = (stack) => {
    setStack(stack);
  };

  const stacks = ['languages', 'frameworks', 'tools'];

  return (
    <div>
      <div className="pagination">
        {stacks.map((currentStack) => (
          <button
            key={currentStack}
            className={currentStack === stack ? "active" : ""}
            onClick={() => handlePageChange(currentStack)}
          >
            {currentStack}
          </button>
        ))}
      </div>
      <BallContainer technologies={technologies} stack={stack} />
    </div>
  )
}

export default TechStack;