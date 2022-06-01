import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonUp,
  buttonDown,
  buttonThree,
  buttonCloud,
  buttonCoffee,
  buttonFirePit,
  buttonLight,
  buttonDark,
  threeThumb,
  cloudThumb,
  coffeeThumb,
  firePitThumb
} from './elements.js'

export default function events({ controls, timer, sound }) {

  let threeVol = 0.5
  let cloudVol = 0.5
  let coffeeVol = 0.5
  let fireVol = 0.5

  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countDown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function () {
    sound.pressButton()
    timer.reset()
    controls.pause()
  })

  buttonUp.addEventListener('click', function () {
    timer.increase()
    sound.pressButton()
  })

  buttonDown.addEventListener('click', function () {
    timer.decrease()
    sound.pressButton()
  })

  buttonThree.addEventListener('click', function () {
    controls.three()
    sound.pressThree(threeVol)
  })

  threeThumb.addEventListener('input', function () {
    threeVol = this.value
  })

  buttonCloud.addEventListener('click', function () {
    controls.cloud()
    sound.pressCloud(cloudVol)
  })

  cloudThumb.addEventListener('input', function () {
    cloudVol = this.value
  })

  buttonCoffee.addEventListener('click', function () {
    controls.coffee()
    sound.pressCoffee(coffeeVol)
  })

  coffeeThumb.addEventListener('input', function () {
    coffeeVol = this.value

  })

  buttonFirePit.addEventListener('click', function () {
    controls.firePit()
    sound.pressFire(fireVol)
  })

  firePitThumb.addEventListener('input', function () {
    fireVol = this.value
  })

  buttonLight.addEventListener('click', function () {
    controls.light()
    sound.pressButton()
  })

  buttonDark.addEventListener('click', function () {
    controls.dark()
    sound.pressButton()
  })
}
