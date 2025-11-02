import React, { useState, useEffect } from 'react';
import { getPersonaInternalId, overwritePersona } from '../personaStore.ts';
import { personaList, type PersonaPrompt} from '../randomGuy.ts';

// Define a map for button text and emojis (since they are not in the list object)
const buttonDisplayMap: { [key: string]: { text: string; emoji: string } } = {
  Caveman: { text: 'Caveman', emoji: '🧌' },
  AncientEgyptianScribe: { text: 'Ancient Egyptian Scribe', emoji: '🛕' },
  GreekPhilosopher: { text: 'Greek Philosopher', emoji: '🏛️' },
  Wizard: { text: 'Middle Age Wizard', emoji: '🪄' },
  ChildWorker: { text: 'Victorian Child Worker', emoji: '👧🏻' },
  SoldierWW2: { text: 'WW2 Soldier', emoji: '🪖' },
  Teen80s: { text: '80s Teen', emoji: '👦' },
  Vampire: { text: 'Vampire', emoji: '🦇' },
};

// Function to get a random subset of an array
const getRandomSubset = (array: PersonaPrompt[], count: number): PersonaPrompt[] => {
  // 1. Create a copy of the array to avoid modifying the original
  const shuffled = [...array]
      // 2. Sort the array using a random comparator (the key to shuffling)
      .sort(() => 0.5 - Math.random())
  
  // 3. Take the first 'count' elements
  return shuffled.slice(0, count);
};

function Game(props:{setCurrentConversationId:(id:string)=> void}) {

  // Use useState to store the 4 randomly selected personas.
  // The function passed to useState runs once on the initial render.
  const [buttonPersonas, setButtonPersonas] = useState<PersonaPrompt[]>(() => 
    getRandomSubset(personaList, 4)
  );

  function resetGame(){
    overwritePersona();
    props.setCurrentConversationId(`human-vs-bot-${crypto.randomUUID()}`);
    
    // IMPORTANT: When you reset the game, you should generate a new random set of buttons
    setButtonPersonas(getRandomSubset(personaList, 4));
  }

  function checkID(guessValue: string) {
    const personaID = getPersonaInternalId();
    console.log("Persona ID:", personaID);
    console.log("Guess Value:", guessValue);
    if (personaID === guessValue) {
      alert("Correct! You guessed the historical person!");
    } else {
      alert("Incorrect guess. Try again!");
    }
    resetGame();
  }

  // Use slice(0, 4) to get only the first 4 items from the list
  const limitedPersonas = personaList.slice(0, 4);

  return (
    <>
      <div className="flex flex-col">
        {/* Map over the state variable which holds the 4 random personas */}
        {buttonPersonas.map((persona) => {
          const display = buttonDisplayMap[persona.internalId] || { text: persona.internalId, emoji: '' };
          return (
            <button 
              key={persona.internalId} 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded-full" 
              onClick={() => checkID(persona.internalId)}
            >
              {display.text} {display.emoji}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Game;
