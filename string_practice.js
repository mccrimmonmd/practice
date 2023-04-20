const fs = require("fs")
const process = require("process")

const jabberwocky = (filePath='Jabberwocky.txt') => {
  try {
    let data = fs.readFileSync(filePath)
    if (data) {
      return data.toString().trim() //trim() removes BOM
    } else {
      console.log("No data!")
      return ''
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}

const masticate = (text) => {
  if (text == null) text = jabberwocky()
  console.log(charCounts(text))
  console.log(charCountsFunc(text))
  console.log("--------------------------------------------")
  console.log(wordCounts(text))
  console.log(wordCountsFunc(text))
}

const charCounts = (text) => {
  let counts = {}
  ;[...text].sort().forEach(character => {
      counts[character] = counts[character] == null ? 1 : counts[character] + 1
  })
  return counts
}

const charCountsFunc = (text) => [...text].sort().reduce((counts, character) =>
  {
    counts[character] = counts[character] == null ? 1 : counts[character] + 1
    return counts
  }, {})

const wordCounts = (text) => {
  let counts = {}
  text.replace(/(?:^|\s)\W+(\w)/g, ' $1')
    .replace(/(\w)\W+(?:\s|$)/g, '$1 ')
    .split(/\s/)
    .filter(w => w !== '')
    .sort()
    .forEach(word => {
      counts[word] = counts[word] == null ? 1 : counts[word] + 1
    })
  return counts
}

const wordCountsFunc = (text) =>
  text.replace(/(?:^|\s)\W+(\w)/g, ' $1')
    .replace(/(\w)\W+(?:\s|$)/g, '$1 ')
    .split(/\s/)
    .filter(w => w !== '')
    .sort()
    .reduce((counts, word) => {
      counts[word] = counts[word] == null ? 1 : counts[word] + 1
      return counts
    }, {})

if (false) { // DEBUG
  masticate()
}

module.exports = {
  jabberwocky,
  masticate,
  charCounts: charCountsFunc,
  wordCounts: wordCountsFunc,
}
