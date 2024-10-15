import { MagicCard } from '@/components/ui/magic-card';
import TypingAnimation from '@/components/ui/typing-animation';
import React, { useState } from 'react';

const Events = () => {
  const [theme, setTheme] = useState("light");

  const previousEvents = [
    { id: 1, title: "Magic Event 1" },
    { id: 2, title: "Magic Event 2" },
    { id: 3, title: "Magic Event 3" },
    { id: 4, title: "Magic Event 4" },
  ];

  // Create a new array to include the looping effect
  const loopingEvents = [...previousEvents, ...previousEvents.slice(0, 1)];

  return (
    <>
      <div className="relative w-full m-10 flex justify-center items-center rounded-full">
        <img
          src="/party.jpg" // Path to the image in the public directory
          alt="Background Image"
          className="max-w-full max-h-full object-cover" // Ensures the image is responsive
        />
        <h1 className="text-5xl mt-10 mb-20 ml-20 text-center relative z-10">
        <TypingAnimation
          className="text-4xl font-bold text-black dark:text-white"
          text="Events Calender"

        />
      </h1>

      </div>

      <h1 className="text-5xl mt-10 text-center relative z-10">
          Upcoming Events
      </h1>

      {/* Upcoming Events Section */}
      <div className="mt-10 flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Magic
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Card
        </MagicCard>
      </div>

      <div className="mt-20 mb-20 flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Magic
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Card
        </MagicCard>
      </div>

      <h1 className="text-5xl mt-20 mb-20 text-center relative z-10">
       
          Previous Events
        
      </h1>

      <div className="mt-10 overflow-hidden">
        <div className="flex animate-loop">
          {loopingEvents.map((event) => (
            <MagicCard
              key={event.id}
              className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl p-10 mx-2"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              {event.title}
            </MagicCard>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-loop {
          display: flex;
          animation: loop 10s linear infinite; /* Adjust timing as needed */
          width: calc(100% + 50px); /* Adjust based on card width */
        }

        @keyframes loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(100 / loopingEvents.length)}%);
          }
        }
      `}</style>

<h1 className="text-5xl mt-20 mb-20 text-center relative z-10">
          Featured Events</h1>
    </>
  );
};

export default Events;
