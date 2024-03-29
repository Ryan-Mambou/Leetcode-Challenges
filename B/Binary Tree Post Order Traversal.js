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
 * @return {number[]}
 */
var postorderTraversal = function(root) {

    let result = [];

    function dfs(root){
        if(!root) return []

        dfs(root.left)
        dfs(root.right)
        result.push(root.val)
    }

    dfs(root)
    return result
    
};