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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    let levels = [];

    function bfs(root){
        let queue = [root]

        while(queue.length){
            let level = [];
            let levelSize = queue.length
            while(levelSize){
                let node = queue.shift()
                
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)

                level.push(node.val)
                levelSize--
            }
            levels.push(level)
        }
    }

    bfs(root)
    return levels
};