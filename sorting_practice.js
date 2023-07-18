const sortString = (text, type) => {
  if (text.length <= 1) return text
  const textArr = text.split('')
  let sorted = []
  if (type == null || type === 'mergeSort') {
    sorted = mergeSort(textArr)
  } else if (type.alphabet != null) {
    sorted = linear(textArr, type.alphabet, type.sorted)
  } else if (type === 'quickSort') {
    sorted = quickSort(textArr)
  } else {
    console.log(`Unimplemented sorting algorithm '${type}'`)
    return text
  }
  return sorted.join('')
}

const mergeSort = (items) => {
  const divide = (arr) => {
    let midpoint = Math.floor(arr.length / 2)
    return {
      left: arr.slice(0, midpoint),
      right: arr.slice(midpoint, arr.length)
    }
  }
  
  const conquer = ({left, right}) => {
    if (left.length > 1) {
      left = conquer(divide(left))
    }
    if (right.length > 1) {
      right = conquer(divide(right))
    }
    return merge(left, right)
  }
  
  const merge = (left, right) => {
    let sorted = []
    console.assert(right.length >= left.length, 'right length greater')
    let i = 0
    let j = 0
    while (i < left.length || j < right.length) {
      if (left[i] <= right[j] || j >= right.length) {
        sorted = sorted.concat(left[i])
        i++
      }
      else {
        sorted = sorted.concat(right[j])
        j++
      }
    }
    console.assert(sorted.length === left.length + right.length, 'sorted length')
    return sorted
  }
  
  return conquer(divide(items))
}

const quickSort = (items) => {
  const choosePivot = (subArray) => {
    return {
      pivot: subArray.splice(subArray.length - 1)[0],
      arr: subArray
    }
  }
  
  const partition = (subArray) => {
    let { pivot, arr } = choosePivot(subArray)
    let left = []
    let right = []
    arr.forEach(item => {
      if (item <= pivot) left.push(item)
      else right.push(item)
    })
    return { left, pivot, right }
  }
  
  const combine = ({ left, pivot, right }) => {
    if (left.length > 1) {
      left = sort(left)
    }
    if (right.length > 1) {
      right = sort(right)
    }
    return left.concat(pivot).concat(right)
  }
  
  const sort = (arr) => combine(partition(arr))
  
  return sort(items)
}

const linearSort = (items, alphabet, sorted=true) => {
  if (typeof alphabet === 'string') alphabet = alphabet.split('')
  if (!sorted) alphabet = mergeSort(alphabet)
  
  const counts = items.reduce((soFar, symbol) => {
    soFar[symbol] = soFar.hasOwnProperty(symbol) ? soFar[symbol] + 1 : 1
    return soFar
  }, {})
  
  return alphabet.reduce((output, symbol) => {
    if (counts.hasOwnProperty(symbol)) {
      return output.concat(new Array(counts[symbol]).fill(symbol))
    }
    return output
  }, [])
}

if (false) { // DEBUG
  // let { jabberwocky: testString } = require('./string_practice')
  // testString = testString().replace(/\W/g, '')
  let testString = 'malcolmmccrimmon'
  
  // let result = sortString(testString)
  let result = sortString(testString, 'quickSort')
  // let result = sortString(testString, {
  //   alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  // })
  console.assert(testString.length === result.length, 'result string length')
  console.assert(testString.split('').sort().join('') === result, 'sorted')
  console.log(result)
}

module.exports = {
  sortString,
  mergeSort,
  linearSort,
}
