
import React, { useEffect, useState } from 'react';

const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[999] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-t-4 border-purple-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-4 border-purple-300 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
          <div className="absolute inset-4 border-b-4 border-purple-200 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
        </div>
        <p className="mt-4 text-purple-500 text-xl font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
