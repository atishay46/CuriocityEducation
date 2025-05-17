import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="relative w-full">
      <img
        src="/team-meeting.jpg"
        alt="Team meeting"
        className="w-full h-auto object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg tracking-wider">
          CurioCity
        </h1>
      </div>
    </div>
  );
};

export default HeroImage; 