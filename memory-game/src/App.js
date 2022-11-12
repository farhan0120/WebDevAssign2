import { useState } from 'react';
import './App.css';

const cardImages = [
  { "src" : "/img/bulbasaur.png"},
  { "src" : "/img/charmander.jpg"},
  { "src" : "/img/squirtle.png"},
  { "src" : "/img/torchic.png"},
  { "src" : "/img/mudkip.png"},
  { "src" : "/img/treecko.png"},
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  //shuffle cards 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards,turns)

  return (
    <div className="App">
      <h1> Pokemon Memory Game</h1>
      <button onClick={shuffleCards}> New Game </button>

      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key ={card.id}>
            <div> 
              <img className="front" src={card.src} alt="card front"/>
              <img className="back" src="/img/cover.png" alt="card back"/>
            </div>
          </div> 
        ))}
      </div> 

    </div>
  );
}

export default App;
