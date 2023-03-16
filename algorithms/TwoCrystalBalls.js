// Big O notation: O(sqrt(N))

export default function twoCrystalBalls(breaks) {
  const jumpAmt = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmt;

  for (; i < breaks.length; i+=jumpAmt) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpAmt;

  for (let j = 0; j < jumpAmt && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return breaks[i];
    }
  }

  return -1;
}