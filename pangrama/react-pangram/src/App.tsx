import { InfoIcon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/react'
import { useState } from 'react'
import S from './styles/App.module.scss'

export function App() {
  const [userPangramText, setUserPangramText] = useState('')
  function clearSentence(_s_: string) {
    return _s_
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // troca as letras acentuadas por não acentuadas
      .replace(/\s/g, '') // retira os espaços
      .replace(/[^a-zA-Z\s]/g, '') // retira os caracteres especiais
  }

  function pangramDetector(_s_: string) {
    const alphabet = 'aeiousrndmbcfghjklpqtvwxyz'
    const clearedSentence = clearSentence(_s_)
    if (clearedSentence.length > Math.pow(10, 3)) {
      return 'maximum number of letters reached'
    }
    let alphabetCounter = alphabet.length
    for (let char of alphabet) {
      if (!clearedSentence.includes(char)) {
        return 'not pangram'
      } else if (clearedSentence.includes(char)) {
        alphabetCounter -= 1
        if (alphabetCounter == 0) {
          return 'pangram'
        }
      }
    }
  }
  return (
    <main className={S.container}>
      <header>
        <h1>Pangram Detector</h1>
        <Tooltip
          hasArrow
          label='A "pangram" is a sentence or verse that contains all the letters of the alphabet.'
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
        <textarea
          placeholder="Write here..."
          onChange={e => {
            setUserPangramText(e.target.value)
          }}
        />
      </div>
      <div>{pangramDetector(userPangramText)}</div>
    </main>
  )
}
