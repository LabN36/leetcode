//hashtable implemetation
var checkIfExist = function(arr){
    var hashTable = {};
    for(let index = 0;index< arr.length;index++){
        element = arr[index];
        if(hashTable[element/2] != undefined || hashTable[2*element] != undefined){
            return true;
        } else {
            hashTable[element] = 1;
        }
    }
    return false
}

checkIfExist([7,1,14,11]);
