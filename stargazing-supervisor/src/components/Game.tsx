import React, { useState, useEffect } from 'react';

function Game() {
  return (
    <>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => alert('Guess!')}>Caveman 🧌</button>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => alert('Guess!')}>Ancient Egyptian Scribe 🛕</button>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => alert('Guess!')}>Greek Philosopher 🏛️</button>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => alert('Guess!')}>Middle Age Wizard 🪄</button>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => alert('Guess!')}>Victorian Child Worker 👧🏻</button>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => alert('Guess!')}>WW2 Soldier 🪖</button>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => alert('Guess!')}>80s Teen 👦</button>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
          onClick={() => alert('Guess!')}>Vampire 🦇</button>
      </div>
    </>
  );
}

export default Game;
