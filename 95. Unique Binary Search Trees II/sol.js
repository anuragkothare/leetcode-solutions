// https://leetcode.com/problems/unique-binary-search-trees-ii/description/




/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

var generateTrees = function(n) {
    if(n === 0) {
        return []
    }
    return getTree(1, n);

    function getTree(start, end){
        var ret = [], i, j, k, left, right, node;
        if(start > end){
            return [null];
        }else if (start === end){
            return [new TreeNode(start)];
        }
        for(i = start; i <= end; i++){
            left = getTree(start, i - 1);
            right = getTree(i + 1, end);
            for(j = 0; j < left.length; j++){
                for(k = 0; k < right.length; k++){
                    node = new TreeNode(i);
                    node.left = left[j];
                    node.right = right[k];
                    ret.push(node);
                }
            }
        }
        return ret;
    }
};