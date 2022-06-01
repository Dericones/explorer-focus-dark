import Sound from "./sounds.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import events from "./events.js"
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
  minutesDisplay,
  secondsDisplay,
  buttonLight,
  buttonDark,
  body,
  threeThumb,
  cloudThumb,
  coffeeThumb,
  firePitThumb
} from "./elements.js"

const sound = Sound()

const controls = Controls ({
  buttonPlay,
  buttonPause,
  buttonThree,
  buttonCloud,
  buttonCoffee,
  buttonFirePit,
  buttonLight,
  buttonDark,
  body
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay, 
  resetControls: controls.pause
})

events({controls, timer, sound})