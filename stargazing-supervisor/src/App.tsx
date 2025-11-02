import Game from './components/Game';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Chat from './Chat';
import { getRandomPersonaPrompt } from './randomGuy';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';





function App() {
  const PersonaPrompt = getRandomPersonaPrompt();
  return (<>
  
    
      <div>
        <Header />
        <h3>A journey through time...</h3>
        <div className='chat-frame'>
          <div className='chat-container'>
            <Chat />
          </div>
        </div>
        <h4>Choose wisely...</h4>
        <Game />
      </div>
    </>
  );  
}

export default App;
