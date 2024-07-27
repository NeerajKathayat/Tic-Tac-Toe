import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Player, setPlayer] = useState('X')

  const [box, setBox] = useState(['', '', '', '', '', '', '', '', ''])
  const [winner, setWinner] = useState('')
  const [transform , setTransform]  = useState([])

  const checkBox = [
    [0, 1, 2,6,38,0,287],
    [3, 4, 5,6,112,0,287],
    [6, 7, 8,6,186,0,287],
    [0, 3, 6,-56,111,90,217],
    [1, 4, 7,44,111,90,217],
    [2, 5, 8,143,111,90,217],
    [0, 4, 8,6,111,37,296],
    [2, 4, 6,2,111,143,296]
  ]

  const handleGame = (id) => {
    if (box[id] == '' && winner.length == '') {
      console.log(id)
      const newBox = [...box]
      newBox[id] = Player;

      setBox(newBox)


      setPlayer(Player === 'X' ? 'O' : 'X')
    }
  }

  useEffect(() => {
    checkWinner();
  }, [box])


  function checkWinner() {

    checkBox.map((ele) => {
      if ((box[ele[0]] === box[ele[1]]) && (box[ele[1]] === box[ele[2]]) && (box[ele[0]] !== '')) {
        console.log(box[ele[0]])

        setWinner(box[ele[0]])

        setTransform([ele[3],ele[4],ele[5],ele[6]])

      }
    })
  }

  const reset=()=>{
         const newBox =['', '', '', '', '', '', '', '', '']
         setBox(newBox)
         setWinner('');
         setPlayer('X')
         setTransform([0,0,0,0])
        
  }

  return (
    <>
      <div className='Header'>
        Tic Tac Toe
      </div>


      <div className='main'>
        <div className='container'>

            <div className='line'   style={{transform:`translate(${transform[0]}px, ${transform[1]}px) rotate(${transform[2]}deg)`, width:`${transform[3]}px`}}></div>

          {

            box.map((ele, id) => {
              return <div key={id} onClick={() => handleGame(id)} className='box'>{ele}</div>

            })
          }
        </div>

        {
          winner.length == '' &&
          (
            <div>Turn for {Player}</div>
          )
        }

        {
          winner.length != '' &&
          (
            <div>{winner} Won the Game!</div>
          )
        }

        {
           winner.length != '' &&
           (
             <button onClick={reset} className='reset'>reset</button>
           )
        }
      </div>


    </>
  )
}

export default App
