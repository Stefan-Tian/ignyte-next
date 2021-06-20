import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="container h-screen w-full flex items-center justify-center">
      <svg className="animate-spin h-24 w-24" viewBox="0 0 60 60"></svg>
    </div>
  );
};

export default Loading;
