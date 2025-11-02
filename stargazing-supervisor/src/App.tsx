import Game from './components/Game';
import Header from './components/Header';
// import Timeline from './components/Timeline';
import Chat from './Chat';
import { useState } from 'react';
import { getOrSetPersona } from './personaStore.ts';


function App() {
  getOrSetPersona();
  const [currentConversationId, setCurrentConversationId] = useState(`human-vs-bot-${crypto.randomUUID()}`);

  return (<>
    <div>
      <Header />
      <h3>A journey through time...</h3>
      <div className='chat-frame'>
        <div className='chat-container'>
          <Chat currentConversationId={currentConversationId}/>
        </div>
      </div>
      <h4>Choose wisely...</h4>
      <Game setCurrentConversationId={setCurrentConversationId}/>
    </div>
  </>
  );  
}

export default App;
