export function timeToWords(_H_: number, _M_: number) {

  const timeInWriting = [
    'zero',
    'uma',
    'duas',
    'três',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove',
    'dez',
    'onze',
    'doze',
    'treze',
    'catorze',
    'quinze',
    'dezesseis',
    'dezessete',
    'dezoito',
    'dezenove',
    'vinte',
    'vinte e uma',
    'vinte e dois',
    'vinte e três',
    'vinte e quatro',
    'vinte e cinco',
    'vinte e seis',
    'vinte e sete',
    'vinte e oito',
    'vinte e nove',
    'trinta',
    'trinta e uma',
    'trinta e dois',
    'trinta e três',
    'trinta e quatro',
    'trinta e cinco',
    'trinta e seis',
    'trinta e sete',
    'trinta e oito',
    'trinta e nove'
  ]

  if (_M_ == 0) {
    return `${
      timeInWriting[_H_].includes('uma')
        ? 'uma hora em ponto'
        : `${timeInWriting[_H_]} horas em ponto`
    } `
  } else if (_M_ == 30) {
    return `${
      timeInWriting[_H_] == 'zero' ? 'meia noite' : timeInWriting[_H_]
    } e meia`
  } else if (_M_ < 40) {
    return `${
      timeInWriting[_H_] == 'zero' ? 'meia noite' : timeInWriting[_H_]
    } e ${
      timeInWriting[_M_].includes('uma')
        ? timeInWriting[_M_].replace('uma', 'um')
        : timeInWriting[_M_]
    }`
  } else if (_M_ == 60) {
    return `${
      _H_ != 23
        ? `${timeInWriting[_H_ + 1]} horas em ponto`
        : 'meia noite em ponto'
    } `
  } else if (_H_ == 23 && _M_ >= 40) {
    return `${timeInWriting[60 - _M_]} para a meia noite`
  } else if (_M_ >= 40) {
    return `${timeInWriting[60 - _M_]} para as ${timeInWriting[_H_ + 1]}`
  }
}
