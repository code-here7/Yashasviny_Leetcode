var removeDuplicates = function(nums) {
let k = 0;
for(let i = 0; i< nums.length ; i++)
{   
    let strt = nums[i],temp;
    for(let j = i+1; j< nums.length ; j++)
    {
        if(nums[i]==nums[j])
        {
            nums[j] = "_";
        }
    }
}
for(let i = 0; i<nums.length ; i++)
{
    let temp;
    if(typeof(nums[i]) == 'number')
    {
        k++;
    }
}
for(let i = 0; i<nums.length ; i++)
{ 
    let temp;
    if(nums[i]=="_")
    {
       for(let j = i+1; j<nums.length ; j++)
       {
           if(typeof(nums[j])== 'number')
           {
               temp = nums[i];
               nums[i] = nums[j];
               nums[j] = temp;
               break;
           }
       }
    }
}
return nums.slice(0,k);
};


let res = removeDuplicates([0,0,1,1,1,2,2,3,3,4])
console.log(res);