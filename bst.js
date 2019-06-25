let root = [10,5,15,3,7,null,18]
let L = 7
let R = 15


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if (!root) return null
    counter = 0;
//     dfs is short for def first search. dfs goes down the list of nodes from the parent.
    const dfs = (node) => {
        if (!node) return null

        dfs(node.left)
//         this is checking if the value is greater or less than the value of L
        if (node.val >= L && node.val <= R){
            counter += node.val
        }

        dfs(node.right)
    }
    dfs(root)
    return counter
};
