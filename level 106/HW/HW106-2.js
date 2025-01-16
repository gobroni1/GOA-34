function sort(initialArray, sortingArray) {
    let sortedArray = [];
    for (let i = 0; i < sortingArray.length; i++) {
        sortedArray[sortingArray[i]] = initialArray[i];
    }
    return sortedArray;

}