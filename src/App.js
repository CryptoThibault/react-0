import { useEffect, useState } from 'react';
import Counter from './components/Counter';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [nbOperations, setNbOperations] = useLocalStorage('nbOperations', 0)
  const [isDisabled, setIsDisabled] = useState(false)

  const clearLocalStorage = () => {
    setNbOperations(0)
    setIsDisabled(false)
  }

  useEffect(() => {
    if (nbOperations > 20) {
      const disable = async () => {
        setIsDisabled(true)
        try {
          //const audio = new Audio(soundFile)
          //await audio.play()
        } catch (e) {
          console.log(e)
        }
      }
      disable()
    }
  }, [nbOperations])

  return (
    <>
      <h1>Hello HardFork</h1>
      <p>nb operations: {nbOperations}</p>
      {nbOperations > 20 && (
        <>
          <h3 style={{ color: 'red' }}>
            You have reachead the limit, please{' '}
            <a
              href={
                'https://thephnompen.files.wordpress.com/2012/02/i-am-not-a-scammer-he-is.jpg'
              }
            >
              PAY
            </a>
          </h3>
          <button onClick={clearLocalStorage}>clear local storage</button>
        </>
      )}
      <Counter
        initialStep={1}
        onCount={setNbOperations}
        isDisabled={isDisabled}
      />
    </>
  )
}

export default App;
