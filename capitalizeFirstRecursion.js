// Problem Statement: Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst (arr) {
    let result = [];
    function helper(arr){
        if(arr.length == 0) return result;
        let x = arr.pop();
        result.push(x.charAt(0).toUpperCase() + x.slice(1));
        helper(arr);
    }
    helper(arr);
    return result;
}
  
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
console.log(capitalizeFirst(['car','taco','banana']));