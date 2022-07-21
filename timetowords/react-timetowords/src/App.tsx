import { InfoIcon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/react'
import { useState } from 'react'
import S from './styles/App.module.scss'
import { timeToWords } from './timeToWords'

export function App() {
  const [userInputHour, setUserInputHour] = useState(0)
  const [userInputMinute, setUserInputMinute] = useState(0)
  const [finalValue, setFinalValue] = useState()

  return (
    <main className={S.container}>
      <header>
        <h1>Time to Words</h1>
        <Tooltip
          hasArrow
          label="This application transforms a numeric date input into a text"
          bg="gray.300"
          color="black"
        >
          <InfoIcon
            transform="translate(-50%, -50%)"
            position="absolute"
            cursor="help"
            right="1rem"
            top="50%"
            w="1.3rem"
            h="1.3rem"
          />
        </Tooltip>
      </header>
      <div>
        <div className={S.inputBoxes}>
          <label htmlFor="hours">hours</label>
          <input
            onKeyDown={event => {
              event.preventDefault()
            }}
            type="number"
            max={23}
            min={0}
            id="hours"
            value={userInputHour}
            onChange={e => setUserInputHour(parseInt(e.target.value))}
          />
        </div>
        <div className={S.inputBoxes}>
          <label htmlFor="minutes">minutes</label>
          <input
            onKeyDown={event => {
              event.preventDefault()
            }}
            type="number"
            max={60}
            min={0}
            id="minutes"
            value={userInputMinute}
            onChange={e => setUserInputMinute(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className={S.resultsBox}>
        {timeToWords(userInputHour, userInputMinute)}
      </div>
    </main>
  )
}
