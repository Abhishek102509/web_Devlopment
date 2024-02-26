var containsDuplicate = function(nums) {
    nums= nums.sort();
    for(i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            return true;
        }
    }
    return false;
    
};