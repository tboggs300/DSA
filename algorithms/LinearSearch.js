// Big O notation: O(N)

export default function linearSearch(list, element) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element)
    return true;
  }

  return false;
}