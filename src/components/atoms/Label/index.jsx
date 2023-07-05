import React from 'react';

export default function Label(props) {
  const { children, color = 'text-blue-900' } = props;
  return (
    <label
      {...props}
      className={`flex justify-between w-full text-sm font-semibold tracking-wider ${color}`}
    >
      {children}
    </label>
  );
}
