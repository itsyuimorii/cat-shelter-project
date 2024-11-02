import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

export const CatCard: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <div className="border-4 border-black rounded-md shadow-pixelShadow p-4 bg-white relative max-w-60 flex flex-col items-center justify-center ">
      <h1 className="text-2xl font-bold text-black">Cat Name</h1>
      <p className="text-gray-800 mt-2">Breed: alien</p>

      <button className="mt-4 text-black font-bold  hover:shadow-pixelShadow border-black border-4 px-4 py-2 transition hover:-translate-x-1 hover:-translate-y-1 duration-300 ease-in-out">
        More info
      </button>
    </div>
  );
};

// Usage example
const App = () => {
  return (
    <CatCard
      src="https://via.placeholder.com/150" // Replace with the actual image URL of your screenshot
      alt="Gemma2 2B Model Screenshot"
    />
  );
};

export default App;
