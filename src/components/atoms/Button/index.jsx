import React from 'react';

export default function Button(props) {
  const {
    children,
    color = 'bg-blue-900',
    hover = 'hover:bg-blue-950',
  } = props;
  return (
    <button
      {...props}
      className={`px-4 py-2 w-full rounded-lg ${color} ${hover} outline-none text-gray-100 tracking-wider font-bold `}
    >
      {children}
    </button>
  );
}
