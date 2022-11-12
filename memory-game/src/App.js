import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

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
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  

  //shuffle cards 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }

  //Handle the choices
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card):setChoiceOne(card)
  }

  return (
    <div className="App">
      <h1> Pokémon Memory Game</h1>
      <button onClick={shuffleCards}> New Game </button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
           key={card.id}
           card={card} 
           handleChoice={handleChoice}
           ></SingleCard>
        ))}
      </div> 

    </div>
  );
}

export default App;
