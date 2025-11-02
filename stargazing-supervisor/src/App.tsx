import Game from './components/Game';
import Header from './components/Header';
import Chat from './Chat';
import { useState } from 'react';
import { getOrSetPersona } from './personaStore.ts';

function App() {
  getOrSetPersona();
  const [currentConversationId, setCurrentConversationId] = useState(`human-vs-bot-${crypto.randomUUID()}`);
  const [isUserCorrect, setIsUserCorrect] = useState<boolean | null>(null);
  
  return (
    <>
      <div>
        <Header />
        <h3>A journey through time...</h3>
        <div className='chat-frame'>
          <div className='chat-container'>
            <Chat 
              currentConversationId={currentConversationId}
              isUserCorrect={isUserCorrect}
              setIsUserCorrect={setIsUserCorrect}
            />
          </div>
        </div>
        <h4>Choose wisely...</h4>
        <Game 
          setCurrentConversationId={setCurrentConversationId}
         setIsUserCorrect={setIsUserCorrect}
        />
      </div>
    </>
  );  
}

export default App;