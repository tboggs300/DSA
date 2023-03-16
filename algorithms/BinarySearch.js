// Big O notation: O(log(N))

export default function binarySearch(list, element) {
  let low = 0;
  let high = list.length;

  do {
    const mid = Math.floor(low + (high - low) / 2);
    const val = list[mid];

    if (val === element) {
      return true;
    } else if (val > element) {
      high = mid;
    } else {
      low = mid + 1; // Redundent to include the previous value
    }
  } while (low < high);

  return false;
};