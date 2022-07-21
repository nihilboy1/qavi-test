import { useEffect, useState } from 'react'
import { AiOutlinePauseCircle } from 'react-icons/ai'
import { VscDebugRestart, VscDebugStart } from 'react-icons/vsc'
import { useTimer } from 'react-timer-hook'
import S from './styles/MyTimer.module.scss'

interface myTimerProps {
  expiryTimestamp: Date
}

export function MyTimer({ expiryTimestamp }: myTimerProps) {
  const [rotateState, setRotateState] = useState(false)
  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.log('Time is over!')
  })
  const [timeLeft, setTimeLeft] = useState(minutes * 60)

  useEffect(() => {
    pause()
  }, [])

  useEffect(() => {
    setTimeLeft(oldState => {
      const newState = oldState - 1
      return newState
    })
    console.log(timeLeft)
  }, [seconds, minutes])

  return (
    <>
      <div className={S.progressBar}>
        <div
          style={{
            backgroundColor: `${isRunning ? '#2ecef2' : '#03318c'}`,
            width: `${(timeLeft / 300) * 100}%`
          }}
          className={S.innerProgressBar}
        ></div>
      </div>
      <div className={S.innerContainer}>
        <h1>5 Minutes Timer</h1>
        <div className={S.timeBox}>
          <div
            className={S.backgroundTimeBox}
            style={{ backgroundColor: `${isRunning ? '#2ecef2' : '#03318c'}` }}
          ></div>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <p
          style={{
            textDecoration: 'overline',
            textDecorationColor: `${isRunning ? '#2ecef2' : '#03318c'}`
          }}
        >
          {isRunning ? 'Running' : 'Not running'}
        </p>
        <div className={S.buttonsBox}>
          {isRunning ? (
            <button className={S.pause} onClick={pause}>
              Pause
              <AiOutlinePauseCircle size="1.2rem" />
            </button>
          ) : (
            <button className={S.start} onClick={resume}>
              Start
              <VscDebugStart size="1.2rem" />
            </button>
          )}

          <button
            style={{
              transform: `${rotateState ? "rotate(-360deg)": "rotate(90deg)"}`
            }}
            className={S.reset}
            onClick={() => {
              const time = new Date()
              time.setSeconds(time.getSeconds() + 300)
              restart(time)
              setRotateState(!rotateState)
            }}
          >
            <VscDebugRestart size="1.8rem" />
          </button>
        </div>
      </div>
    </>
  )
}
