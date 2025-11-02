import React, { useState } from 'react';
function EventButtons({ setAndLogGuess }: { setAndLogGuess: (guessValue: string) => void }) {
    // Note: The 'guess' state and 'setGuess' are now managed by the parent 'Timeline' component
    
    return (
        <div className="mt-8 flex flex-wrap justify-center gap-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
              onClick={() => setAndLogGuess("Caveman")}>Caveman 🧌</button>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
              onClick={() => setAndLogGuess("AncientEgyptianScribe")}>Ancient Egyptian Scribe 🛕</button>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
              onClick={() => setAndLogGuess("GreekPhilosopher")}>Greek Philosopher 🏛️</button>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
              onClick={() => setAndLogGuess("Wizard")}>Middle Age Wizard 🪄</button>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
              onClick={() => setAndLogGuess("ChildWorker")}>Victorian Child Worker 👧🏻</button>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
              onClick={() => setAndLogGuess("SoldierWW2")}>WW2 Soldier 🪖</button>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
              onClick={() => setAndLogGuess("Teen80s")}>80s Teen 👦</button>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
              onClick={() => setAndLogGuess("Vampire")}>Vampire 🦇</button>
        </div>
    );
}

// Define the timeline events (Era/Time)
const TIMELINE_EVENTS = [
  { year: 1990, title: 'Early 90s', color: 'red' },
  { year: 2005, title: 'Mid-2000s', color: 'blue' },
  { year: 2020, title: 'Modern Era', color: 'green' },
  { year: 2025, title: 'Future', color: 'purple' },
];

function Timeline() {
  // State for the TIMELINE position (controls the horizontal scroll)
  const [timelineIndex, setTimelineIndex] = useState(0); 
  
  // State for the GAME CHOICE (controls the user's selection)
  const [guess, setGuess] = useState("none"); 

  const totalEvents = TIMELINE_EVENTS.length;
  
  // Handlers for navigating the timeline
  const handlePrev = () => timelineIndex > 0 && setTimelineIndex(timelineIndex - 1);
  const handleNext = () => timelineIndex < totalEvents - 1 && setTimelineIndex(timelineIndex + 1);
  
  const offset = `-${timelineIndex * 100}%`;

  // Function to be passed down to the buttons to set the guess
  const setAndLogGuess = (guessValue: string) => {
    setGuess(guessValue);
    console.log("Guess selected:", guessValue); // Log the new value immediately
  };

  return (
    // Outer Container (Black Background)
    <div className="p-6 md:p-10 bg-gray-950 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-white">Timeline Game</h2>
      
      <p className="text-xl mb-4">Current Guess: <span className="font-semibold text-blue-400">{guess}</span></p>

      {/* ➡️ Timeline Container */}
      <div className="relative overflow-hidden w-full border-2 border-gray-700 rounded-lg shadow-xl">
        
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${offset})` }}
        >
          {TIMELINE_EVENTS.map((event, index) => (
            <div
              key={event.year}
              className="flex-shrink-0 w-full p-8 md:p-12 text-center"
            >
              <div 
                className={`w-4 h-4 mx-auto rounded-full mb-4 bg-${event.color}-500 ring-4 ring-${event.color}-300`}
              ></div>
              <p className="text-xl font-semibold text-gray-400">{event.year}</p>
              <h3 className="text-4xl font-extrabold my-2 text-white">{event.title}</h3>
              
              {/* 🎯 INTEGRATION POINT: Add the Game buttons here */}
              {/* Only show the buttons on the event that is currently active */}
              {index === timelineIndex && (
                <EventButtons setAndLogGuess={setAndLogGuess} />
              )}

            </div>
          ))}
        </div>
      </div>
      
      {/* 🖱️ Controls */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={handlePrev}
          disabled={timelineIndex === 0}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition disabled:bg-gray-800 disabled:text-gray-600"
        >
          Previous Era
        </button>
        
        <button
          onClick={handleNext}
          disabled={timelineIndex === totalEvents - 1}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition disabled:bg-gray-800 disabled:text-gray-600"
        >
          Next Era
        </button>
      </div>
    </div>
  );
}

export default Timeline;