let progressTimer = null

let counter = document.querySelector('.counter').textContent

const intervals = ['25:00', '05:00', '25:00', '05:00', '25:00', '05:00', '25:00', '10:00']
let currentInterval = 0

// Eliminar al final
// counter = intervals[0]

const Enter = event => {
  middleBtn() === 'START' ? startTimer() : pauseTimer()
}

const pauseTimer = () => {
  middleBtn('Start')
  clearTimeout(progressTimer)
}

const stopTimer = () => {
  middleBtn('Start')
  clearTimeout(progressTimer)
  document.querySelector('.circle').classList.remove('green')
  document.querySelector('.counter').textContent = intervals[0]
}

const middleBtn = (val) => {
  if (!val) return document.getElementById('center').innerText
  document.getElementById('center').innerText = val
}

const startTimer = () => {
  middleBtn('Pause')
  counter = document.querySelector('.counter').textContent
  let startTime = null

  const selectedTimeInterval = parseInt(counter) * 60 + parseInt(counter.substring(3))

  progressTimer = window.setTimeout(() => {
    if (!startTime) {
      startTime = Date.now()
    }
    const timerFired = () => {
      const elapsed = parseInt((Date.now() - startTime) / 1000.0)
      const timeRemaining = selectedTimeInterval - elapsed

      const minutesRemaining = parseInt(timeRemaining / 60)
      const secondsRemaining = timeRemaining % 60

      function doubleDigits (num) {
        if (num < 10) {
          return `0${num}`
        }
        return num
      }
      document.querySelector('.counter').textContent = `${doubleDigits(minutesRemaining)}:${doubleDigits(secondsRemaining)}`

      if (timeRemaining > 0) {
        progressTimer = window.setTimeout(timerFired, 1000)
      } else {
        currentInterval++
        if (!intervals[currentInterval]) return false
        document.querySelector('.counter').textContent = intervals[currentInterval]
        document.getElementById('title').textContent = changeTitle()
        startTimer()
      }
    }
    // Aqui entra al inicio y cada vez que cambia de ciclo
    // console.log('holi!')
    /* $("#bell").get(0).play(); */
    timerFired()
  })
}

const changeTitle = () => {
  console.log('hhhhh')
  document.querySelector('.circle').classList.toggle('green')
  if (currentInterval === 7) return 'Long break!'
  if (currentInterval % 2 === 0) return `Focus time! (${currentInterval}/4)`
  return `Short break! (${currentInterval}/3)`
}

const SoftLeft = event => {
  stopTimer()
}

const SoftRight = event => {
  console.log('SoRight')
}

export default { Enter, SoftRight, SoftLeft }
