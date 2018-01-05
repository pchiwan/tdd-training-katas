/*
 * Function definitions
 */
function replaceAll (inputString, find, replace) {
  const regexp = new RegExp(find, 'gi')
  return inputString.replace(regexp, replace)
}

// Iterative solution (for loop)
function iterativeReplaceAll (inputString, findValues, replaceValues) {
  if (findValues.length !== replaceValues.length)
    return inputString

  for (let i = 0, l = findValues.length; i < l; i++) {
    inputString = replaceAll(inputString, findValues[0], replaceValues[0])
  }
  return inputString
}

// Recursive solution
function recursiveReplaceAll (inputString, findValues, replaceValues) {
  return findValues.length === replaceValues.length && findValues.length
    ? recursiveReplaceAll(replaceAll(inputString, findValues[0], replaceValues[0]), findValues.slice(1), replaceValues.slice(1))
    : inputString
}

// Array reduce solution
function reduceReplaceAll (inputString, findValues, replaceValues) {
  return findValues.length === replaceValues.length
    ? findValues.reduce((outputString, findString, i) => replaceAll(outputString, findString, replaceValues[i]), inputString)
    : inputString
}

/*
 * Test setup
 */
const input = 'con diez cañones por banda viento en popa a toda vela no corta el mar sino vuela un velero bergantín'
const findValues = ['diez', 'cañones', 'viento', 'popa', 'vela', 'corta', 'mar', 'vuela', 'velero', 'bergantín']
const replaceValues = ['sopotocientos', 'bazookas', 'fuego', 'proa', 'máquina', 'surca', 'cielo', 'arrasa', 'destructor', 'imperial']

console.time('iterativeReplaceAll')
console.log(iterativeReplaceAll(input, findValues, replaceValues))
console.timeEnd('iterativeReplaceAll')

console.time('recursiveReplaceAll')
console.log(recursiveReplaceAll(input, findValues, replaceValues))
console.timeEnd('recursiveReplaceAll')

console.time('reduceReplaceAll')
console.log(reduceReplaceAll(input, findValues, replaceValues))
console.timeEnd('reduceReplaceAll')
