/* Pseudocode:
function coldColdWetDay() {
  var sallyAndI = 5
  function hopOnBall(var bigRedWoodBox) {
    if (not hasValue(bigRedWoodBox)) {
      bigRedWoodBox = []
    }
    if (sallyAndI > 0) {
      return hopOnBall(bigRedWoodBox.append(sallyAndI--))
    }
    return bigRedWoodBox
  }
  print(sallyAndI)
  ...TODO
}
coldColdWetDay()
*/

(function coldColdWetDay() {
  let sallyAndI = 5
  let [thingOne, thingTwo] = [
    function hopOnBall(bigRedWoodBox=[]) { 
      return sallyAndI 
        ? hopOnBall(bigRedWoodBox.concat(sallyAndI--))
        : bigRedWoodBox
    },
    function fanWithFan(milkOnDish) {
      let fish = {
        value: sallyAndI + 1,
        playthings: [],
        inThe: function(pot) { return this.value + pot }
      }
      let catInTheHat = milkOnDish.reduce((cat, hat) => {
        cat.playthings.push(cat.inThe(hat))
        cat.value -= 1
        return cat
      }, fish)
      catInTheHat.pickUp = function() { return this.playthings.join(', ') }
      return catInTheHat.pickUp()
    }
  ]
  console.log(sallyAndI)
  let shakeHands = thingOne()
  console.log(shakeHands)
  console.log(thingTwo(shakeHands))
  console.log(sallyAndI ? 'I will show you another good game that I know!' : 'oh dear! you did not like our game...')
})()
