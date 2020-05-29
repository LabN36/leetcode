
var moveZeroes = function(nums) {
    for (let i = nums.length-1; i >=0 ; i--) {
        const element = nums[i];
        if(element == 0){
            for (var j = i; j < nums.length-1; j++) {
                nums[j] = nums[j+1];
                
            }
            nums[j] = 0;
        }
    }
    return nums;
};

console.log(moveZeroes([0,1,3,0,0,1,2]))