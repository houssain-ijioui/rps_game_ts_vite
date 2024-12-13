import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import { moves } from './data/moves';
import computerPlay from './utils/computerPlay';
import compare from './utils/compare';


function App() {

  const [ open, setOpen ] = useState<boolean>(false);
  const [ playerScore, setPlayerScore ] = useState<number>(0);
  const [ computerScore, setComputerScore ] = useState<number>(0);
  const [ moveList, setMoveList ] = useState<typeof moves>(moves);
  const [ result, setResult ] = useState<string | null>();


  const showText = () => {
    setTimeout(() => {
      setOpen(!open);
    }, 200);
  }

  const buttonClicked = (move: string) => {
    let res: string = compare(move, computerPlay());
    setResult(res);
  }


  return (
    <>
      <h1>Let's play Rock, Paper, Scissors!</h1>
      <p onClick={() => { showText() }} id='rules'> <span id='title'> {open ? '\u25BC' : '\u25B6' }   Rules to the game</span> <br /> <span id='rulesBody' className={open ? ``: `removeBody`} >You will be playing against the computer. <br /> You can choose between Rock, Paper, and Scissors. <br /> The first one to three points wins. <br /> Here are the rules to getting a   point in the game: <br /> <br /> Rock beats Scissors <br /> Scissors beats Paper <br /> Paper beats Rock <br /> <br /> If the player and computer choose the same option (Ex. Paper and Paper), then no one gets the point. </span> </p>
      <div className='scores'>
        <h3>Player Score : {playerScore} </h3>
        <h3>Computer Score : {computerScore} </h3>
      </div>
      <div>
        <h3>Choose an option:</h3>
        <div className='options'>
          {moveList.map((move, key) => {
            return (
              <Button key={key} text={move} onClickFunction={() => { buttonClicked(move) }} />
            )
          })}
        </div>
        <h4>{result}</h4>
      </div>
    </>
  )
}

export default App
