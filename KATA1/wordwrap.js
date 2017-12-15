function wrap (text, lineBreak) {
  if (text.length <= lineBreak) return text

  const wrappedText = `${text.substring(0, lineBreak)}\n`
  const rest = text.substring(lineBreak)
  return `${wrappedText}${wrap(rest, lineBreak)}`
}

function betterWrap (text, lineBreak) {
  return text
    .split(' ')
    .map(word => wrap(word, lineBreak))
    .join('\n')
}

module.exports = betterWrap