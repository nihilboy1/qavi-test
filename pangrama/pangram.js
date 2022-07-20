const alphabet = 'aeiousrndmbcfghjklpqtvwxyz'
const frase = 'The quick brown fox jumps over a lazy dog'
const frase2 = 'O serviço gratuito do Google traduz instantaneamente palavras'

function clearSentence(_s_) {
  return _s_
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // troca as letras acentuadas por não acentuadas
    .replace(/\s/g, '') // retira os espaços
    .replace(/[^a-zA-Z\s]/g, '') // retira os caracteres especiais
}

function pangramDetector(_s_) {
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

console.log(pangramDetector(frase))
