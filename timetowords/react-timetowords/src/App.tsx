import { InfoIcon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import S from './styles/App.module.scss'
import { timeToWords } from './timeToWords'

export default function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined'

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null
    return {
      width,
      height
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow])

  return windowDimensions
}

export function App() {
  const {width } = useWindowDimensions()
  const [userInputHour, setUserInputHour] = useState(0)
  const [userInputMinute, setUserInputMinute] = useState(0)

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
              if (width && width < 500){
                return
              }
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
              if (width && width < 500){
                return
              }
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
