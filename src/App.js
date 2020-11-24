import React, { useState, useEffect } from 'react';
import randomWords from 'random-words';
import './App.css';

import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import { showNotification as show } from "./helpers/helpers";
import Hint from "./components/Hint";

let selectedWord = randomWords();

function App() {
    console.log(selectedWord);
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
       const handleKeydown = event => {
           const {key, keyCode} = event;
           if (playable && keyCode >= 65 && keyCode <= 90) {
               const letter = key.toLowerCase();

               if (selectedWord.includes(letter)) {
                   if (!correctLetters.includes(letter)) {
                       setCorrectLetters(correctLetters => [...correctLetters, letter]);
                   } else {
                       show(setShowNotification);
                   }
               } else {
                   if (!wrongLetters.includes(letter)) {
                       setWrongLetters(wrongLetters => [...wrongLetters, letter]);
                   } else {
                       show(setShowNotification);
                   }
               }
           }
       }
       window.addEventListener('keydown', handleKeydown);

       //Will cleanup the event listener
       return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, playable]);

    function playAgain() {
        setPlayable(true);
        setCorrectLetters([]);
        setWrongLetters([]);
        selectedWord = randomWords();
    }

    return (
        <>
            <Header/>
            <div className="game-container">
                <Figure wrongLetters={wrongLetters}/>
                <WrongLetters wrongLetters={wrongLetters}/>
                <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
                {wrongLetters.length > 3 && <Hint selectedWord={selectedWord} /> }
            </div>
            <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
            <Notification showNotification={showNotification}/>
        </>
    );
}

export default App;
