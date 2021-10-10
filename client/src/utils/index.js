export const getPercentage = (x, y) => {
  x = Number(x)
  y = Number(y)
  let total = x + y
  if (total === 0) total = 1
  return ((x * 100) / total).toFixed(1)
}
