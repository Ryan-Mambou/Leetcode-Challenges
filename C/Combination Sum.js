/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    let tempArr = [];
    let index = 0;

    function backtracking(index, target, tempArr){
        if (target === 0) result.push([...tempArr])
        if (target < 0) return

        for(let i = index; i < candidates.length; i++){
            tempArr.push(candidates[i])
            backtracking(i, target - candidates[i], tempArr)
            console.log("before: " + tempArr)
            tempArr.pop() //This is executed after all given possibilities for the algorithm to backtrack
            console.log("after: " + tempArr)
        }
    }
    backtracking(index, target, tempArr)
    return result
};