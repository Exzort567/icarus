import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/[0.86] z-50">
      <span className="loading loading-spinner text-warning"></span>
      <span className="loading loading-spinner text-warning"></span>
      <span className="loading loading-spinner text-warning"></span>
    </div>
  );
};

export default LoadingSpinner;
