'use client';

import { useState } from 'react';

export default function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div className='bg-slate-100 p-8'>
      <div>Current Count: {count}</div>
      <button
        className='px-8 py-2 rounded border-2'
        onClick={() => setCount(count + 1)}
      >
        {children}
      </button>
    </div>
  );
}
