
var twoSum = function(nums, target) {
let op = [];
for(let i = 0; i<nums.length; i++)
{
  
  for(let j = i+1; j<nums.length; j++)
  {
   if((nums[i]+nums[j]) == target)
  {
    op.push(i);
    op.push(j);
  }
  }
}

return op;
};


console.log(twoSum([2,7,11,15],9));
