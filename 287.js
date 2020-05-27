//hashtable implemetation
var findDuplicate = function(nums){
    var hashTable = {};
    for(let index = 0;index< nums.length;index++){
        element = nums[index];
        if(hashTable[element] != undefined){
            return element;
        } else {
            hashTable[element] = 1;
        }
    }
}

console.log(findDuplicate([3,1,3,4,2]))
