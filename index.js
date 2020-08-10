function findMinAndRemove(array){
  // start with first element. assume it is min for now
  // minIndex = 0

  let min = array[0];
  let minIndex = 0;
  
  
  // loop through array to check each element
  // if another elem is less than the current min, reassign min
  // also reassign minIndex

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  
  // after finding the min, remove it from the array using splice

  array.splice(minIndex, 1)

  // return min
  return min
}

function selectionSort(array){
  // use findMinAndRemove to get the min and push it into a new, empty array to get a sorted array
  let arrayLength = array.length;
  let sortedArr = [];

  for (let i = 0; i < arrayLength; i++) {
    let newMin = findMinAndRemove(array);
        console.log(newMin)

    console.log(array)
    sortedArr.push(newMin);
  }

  return sortedArr
}
