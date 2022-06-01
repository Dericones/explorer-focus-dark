export default function () {
  const forest = new Audio('./assets/rain.wav')
  const rain = new Audio('./assets/rain.wav')
  const coffeeShop = new Audio('./assets/coffee.wav')
  const firePit = new Audio('./assets/fire-pit.wav')
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const finished = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  function pressThree(vol) {
    forest.loop = true
    rain.pause()
    coffeeShop.pause()
    firePit.pause()
    forest.play()
    forest.volume = vol
  }

  function pressCloud(vol) {
    rain.loop = true
    forest.pause()
    coffeeShop.pause()
    firePit.pause()
    rain.play()
    rain.volume = vol
  }

  function pressCoffee(vol) {
    coffeeShop.loop = true
    rain.pause()
    coffeeShop.pause()
    firePit.pause()
    coffeeShop.play()
    coffeeShop.volume = vol
  }

  function pressFire(vol) {
    firePit.loop = true
    rain.pause()
    coffeeShop.pause()
    forest.pause()
    firePit.play()
    firePit.volume = vol
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  function finish() {
    finished.play()
    rain.pause()
    coffeeShop.pause()
    firePit.pause()
    firePit.pause()
  }

  return {
    pressThree,
    pressCloud,
    pressCoffee,
    pressFire,
    pressButton,
    finish
  }
}
