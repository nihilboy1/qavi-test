import { MyTimer } from './MyTimer'
import S from './styles/App.module.scss'

export function App() {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 300)
  return (
    <main className={S.blueSquareContainer}>
      <MyTimer expiryTimestamp={time} />
    </main>
  )
}
