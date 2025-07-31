const strs = ["flower","flow","flight"];
let  s1 = strs[0] ;
function common(str1, str2)
{
    let n = Math.min(str1.length,str2.length), c = "";
    for(let i = 0 ; i<n ; i++)
    {
        if(str1[i]==str2[i])
        {
            c = c + str1[i];
        }
         else 
        {
            break;  // stop at first mismatch
        }
    }
    return c;
}
 for(let i = 1 ; i< strs.length; i++)
 {
        s1 = common(s1,strs[i]);
        
 }
console.log(s1);
