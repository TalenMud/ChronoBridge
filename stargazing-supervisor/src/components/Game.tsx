import React, { useState, useEffect } from 'react';


function Game() {
  const [guess, setGuess] = useState("none");

  function setAndLog(guessValue: string) {
    setGuess(guessValue);
    console.log("Guess selected:", guess);
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 my-4 buttons">
      <div>
        <button className="bg-black text-white border-2 border-white 
               font-bold py-2 px-4 rounded transition duration-300 
               hover:bg-white hover:text-black hover:border-black"
          onClick={() => setAndLog("Caveman")}>Caveman 🧌</button>
      </div>
      <div>
        <button className="bg-black text-white border-2 border-white 
               font-bold py-2 px-4 rounded transition duration-300 
               hover:bg-white hover:text-black hover:border-black" 
          onClick={() => setAndLog("AncientEgyptianScribe")}>Ancient Egyptian Scribe 🛕</button>
      </div>
      <div>
        <button className="bg-black text-white border-2 border-white 
               font-bold py-2 px-4 rounded transition duration-300 
               hover:bg-white hover:text-black hover:border-black" 
          onClick={() => setAndLog("GreekPhilosopher")}>Greek Philosopher 🏛️</button>
      </div>
      <div>
        <button className="bg-black text-white border-2 border-white 
               font-bold py-2 px-4 rounded transition duration-300 
               hover:bg-white hover:text-black hover:border-black" 
          onClick={() => setAndLog("Wizard")}>Middle Age Wizard 🪄</button>
      </div>
      <div>
        <button className="bg-black text-white border-2 border-white 
               font-bold py-2 px-4 rounded transition duration-300 
               hover:bg-white hover:text-black hover:border-black" 
          onClick={() => setAndLog("ChildWorker")}>Victorian Child Worker 👧🏻</button>
      </div>
      <div>
        <button className="bg-black text-white border-2 border-white 
               font-bold py-2 px-4 rounded transition duration-300 
               hover:bg-white hover:text-black hover:border-black" 
          onClick={() => setAndLog("SoldierWW2")}>WW2 Soldier 🪖</button>
      </div>
      <div>
        <button className="bg-black text-white border-2 border-white 
               font-bold py-2 px-4 rounded transition duration-300 
               hover:bg-white hover:text-black hover:border-black" 
          onClick={() => setAndLog("Teen80s")}>80s Teen 👦</button>
      </div>
      <div>
        <button className="bg-black text-white border-2 border-white 
               font-bold py-2 px-4 rounded transition duration-300 
               hover:bg-white hover:text-black hover:border-black" 
          onClick={() => setAndLog("Vampire")}>Vampire 🦇</button>
      </div>
    </div>
  );
}

export default Game;
