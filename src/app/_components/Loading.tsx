import React from "react";

const Loading: React.FC = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col gap-5">
        <img
          alt="logo"
          loading="lazy"
          width="100"
          height="100"
          decoding="async"
          data-nimg="1"
          className="h-32 w-full animate-bounce object-contain"
          style={{ color: "transparent" }}
          src="https://dev.prosights.co/_next/image?url=%2Flogo.png&w=256&q=75"
        />
        <div className="text-center">
          <div className="text-4xl font-bold tracking-tight">
            Loading .... 
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
