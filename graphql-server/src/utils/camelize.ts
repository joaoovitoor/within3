export const camelizeString = (str: string): string => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) return '' // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase()
  })
}

export const camelizeObjectKeys = (theObject: Record<string, string | Record<string, string[]>>): Record<string, string | Record<string, string[]>> => {
  const camelizedObjectKeys: Record<string, string | Record<string, string[]>> = {}
  for (const [key, value] of Object.entries(theObject)) {
    const camelizedKey = camelizeString(key)
    camelizedObjectKeys[`${camelizedKey}`] = value
  }
  return camelizedObjectKeys
}
