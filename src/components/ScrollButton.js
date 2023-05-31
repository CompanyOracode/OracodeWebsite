import React from "react";

const ScrollButton = () => {
  return (
    <button
      className="fixed bottom-4 right-4 p-4 rounded-full hover:opacity-90 bg-blue-600 text-white shadow-lg  focus:outline-none focus:ring-blue-600"
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
