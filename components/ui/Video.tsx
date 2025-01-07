export function Video() {
    return (
      <div className="relative flex justify-center items-center w-full max-w-xl mx-auto">
        <video
          width="640" // Adjust size as needed
          height="480" // Adjust size as needed
          controls
          autoPlay
          loop
          preload="none"
          className="w-full h-auto border-[6px] border-gray-300"
          style={{
            borderRadius: "30% 60% 40% 70% / 60% 40% 70% 30%", // Unique, asymmetrical shape
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          }}
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  