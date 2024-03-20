let Arr = [1,6,3,4,5,0,0,0,6]

function ReachDestination(arr) {
  let currentFuel = arr[0]; // Start with the fuel available at the first airport
  let planesHired = 1; // Initialize the count of planes hired

  // Iterate through each airport starting from the second one
  for (let i = 1; i < arr.length; i++) {
    if (currentFuel <= 0) {
      // If the current fuel is not enough to proceed, return -1
      return -1;
      // If we can directly reach the last airport from the current airport, return the count of planes hired
    } else if (i + currentFuel >= arr.length - 1) {
      return planesHired; // We can directly reach the last airport
    } else {
      // Decrement the current fuel as we move to the next airport
      currentFuel--;
      if (arr[i] > currentFuel) {
        // If the fuel available at the current airport is greater than the current fuel, hire another plane
        currentFuel = arr[i]; // Update the current fuel to the fuel available at the current airport
        planesHired++; // Increment the count of planes hired
      }
    }
  }

  return -1; // Unable to proceed
}

console.log(ReachDestination(Arr));
