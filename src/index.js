import Softkey from './js/softkey'

document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'Enter':
      return Softkey.Enter(event)
    // case "ArrowDown":
    //   return Navigation.Down(event)
    // case "ArrowUp":
    //   return Navigation.Up(event)
    // case 'ArrowLeft':
    case 'SoftLeft':
      return Softkey.SoftLeft(event)
    // case 'ArrowRight':
    case 'SoftRight':
      return Softkey.SoftRight(event)
    default:
  }
})
