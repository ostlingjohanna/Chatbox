
import './App.css';
import React, { useState } from 'react';
import MessageList from './MessageList';
import ChatBox from './ChatBox'




function App() {
  const [state, setState] = useState([]);

  const addMessage = (user, message) =>{
    const newState = [...state];
    newState.push({
      user: user,
      text: message
    });

    
    setState(newState);
    
  }

  return (
    <div className="App">
    <ChatBox name="User 1: " onMessage={addMessage}/>
    <ChatBox name="User 2: " onMessage={addMessage}/>
    
    <MessageList message= {state} />




    </div>
  );
}

export default App;
