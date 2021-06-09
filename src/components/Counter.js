import { useReducer } from "react"
import counterReducer from "../reducers/counterReducer"
import NumberInput from "./NumberInput"

const counterInitialState = {
  count: 0,
  step: 1,
}

const Counter = ({ initialStep, onCount, isDisabled }) => {
  const [counterState, counterDispatch] = useReducer(counterReducer, {
    ...counterInitialState,
    step: initialStep,
  })

  const handleIncrement = () => {
    counterDispatch({ type: 'INCREMENT' })
    onCount((prev) => Number(prev) + 1)
  }

  const handleDecrement = () => {
    counterDispatch({ type: 'DECREMENT' })
    onCount((prev) => Number(prev) + 1)
  }

  const handleChangeStep = (event) => {
    if (!isNaN(event.target.value)) {
      counterDispatch({ type: 'SET_STEP', step: Number(event.target.value) })
    }
  }

  const handleReset = () => {
    counterDispatch({
      type: 'RESET',
      step: 0,
    })
  }

  return (
    <>
      {console.log('Counter draw')}
      <p>
        counter: {counterState.count}{' '}
        <button onClick={handleReset} disabled={isDisabled}>
          reset
        </button>
      </p>
      <button onClick={handleIncrement} disabled={isDisabled}>
        <strong>+</strong>
      </button>
      <button onClick={handleDecrement} disabled={isDisabled}>
        <strong>-</strong>
      </button>
      <NumberInput
        id={counterState.step}
        type="text"
        isDisabled={isDisabled}
        value={counterState.step}
        onInputChange={handleChangeStep}
      >
        step:
      </NumberInput>
    </>
  )
}

export default Counter;