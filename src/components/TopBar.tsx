'use client';

import React from 'react';

const TopBar: React.FC = () => {
  return (
    <header className="w-full bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-md mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">NoTes</h1>
        {/* Add theme toggle or other features later */}
        <div className="text-sm"></div>
      </div>
    </header>
  );
};

export default TopBar;