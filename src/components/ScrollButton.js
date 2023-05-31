import React from "react";

const ScrollButton = () => {
  return (
    <button
      className="fixed bottom-4 right-4 p-4 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <span className="text-sm font-medium">Back to Top</span>
    </button>
  );
};

export default ScrollButton;
