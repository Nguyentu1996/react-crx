import React from 'react';
import './app.scss';

export const App: React.FC = ({}) => {

  const handleClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log('tab', tabs);
      chrome.tabs.sendMessage(tabs[0].id!, { message: "Hello from popup" });
    });
  }

  return <h1 onClick={handleClick}>Hello Extension, React!</h1>;
}

