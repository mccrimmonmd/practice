/* Pseudocode (TODO):
function coldColdWetDay(var sallyAndI) {
  function hopOnBall(var bigRedWoodBox) {
    if (not hasValue(bigRedWoodBox)) {
      bigRedWoodBox = []
    }
    if (sallyAndI > 0) {
      return hopOnBall(bigRedWoodBox.concat(sallyAndI--))
    }
    return bigRedWoodBox
  }
  var thingOne = hopOnBall()
  print(thingOne)
  print(sallyAndI)
  var fish = 1
  var thingTwo = thingOne.reduce((hat, cat) => hat[cat] + fish++, thingOne.slice()) // TODO
  console.log(thingTwo)
}
coldColdWetDay(10)
*/

(function coldColdWetDay(sallyAndI) {
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
  console.log(sallyAndI)
})(5)
