/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    if (!root) return 0;
    
    let max = 0;

    function dfs(root){
        let currMax = 0;
        left = Math.max(0, dfs(rool.left))
        right = Math.max(0, dfs(rool.right))

        currMax = left + root.val + right;
        return max + Math.max(left, right);
    }

    dfs(root)
    return max
}