import React, { useState, useEffect } from 'react';


function Game() {
  const [guess, setGuess] = useState("none");

  function setAndLog(guessValue: string) {
    setGuess(guessValue);
    console.log("Guess selected:", guess);
  }

  return (
    <>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => setAndLog("Caveman")}>Caveman 🧌</button>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => setAndLog("AncientEgyptianScribe")}>Ancient Egyptian Scribe 🛕</button>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => setAndLog("GreekPhilosopher")}>Greek Philosopher 🏛️</button>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => setAndLog("Wizard")}>Middle Age Wizard 🪄</button>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => setAndLog("ChildWorker")}>Victorian Child Worker 👧🏻</button>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => setAndLog("SoldierWW2")}>WW2 Soldier 🪖</button>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => setAndLog("Teen80s")}>80s Teen 👦</button>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => setAndLog("Vampire")}>Vampire 🦇</button>
      </div>
    </>
  );
}

export default Game;
