export default function ({
  buttonPlay,
  buttonPause,
  buttonThree,
  buttonCloud,
  buttonCoffee,
  buttonFirePit,
  buttonLight,
  buttonDark,
  body
}) {

  function play () {
    buttonPause.classList.remove('hide')
    buttonPlay.classList.add('hide')
  }

  function pause () {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function three () {
    buttonCloud.classList.remove('on')
    buttonCoffee.classList.remove('on')
    buttonFirePit.classList.remove('on')
    buttonThree.classList.add('on')
  }

  function cloud () {
    buttonThree.classList.remove('on')
    buttonCoffee.classList.remove('on')
    buttonFirePit.classList.remove('on')
    buttonCloud.classList.add('on')
  }

  function coffee () {
    buttonThree.classList.remove('on')
    buttonCloud.classList.remove('on')
    buttonFirePit.classList.remove('on')
    buttonCoffee.classList.add('on')
  }

  function firePit () {
    buttonThree.classList.remove('on')
    buttonCloud.classList.remove('on')
    buttonCoffee.classList.remove('on')
    buttonFirePit.classList.add('on')
  }

  function light () {
    buttonLight.classList.add('hide')
    buttonDark.classList.remove('hide')
    body.classList.add('dark')
    body.classList.remove('light')
  }
  
  function dark () {
    buttonLight.classList.remove('hide')
    buttonDark.classList.add('hide')
    body.classList.add('light')
    body.classList.remove('dark')
  }

  return {
    play,
    pause,
    three,
    cloud,
    coffee,
    firePit,
    light,
    dark
  }
}