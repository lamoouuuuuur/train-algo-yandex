class Node{
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const bst = new Node(27);
bst.left = new Node(14);
bst.left.left = new Node(10);
bst.left.right = new Node(19);
bst.right = new Node(35);
bst.right.left = new Node(31);
bst.right.right = new Node(42);


const dfs = (node, arr = []) => {
    if(node) {
        arr.push(node.val);
        if(node.left) dfs(node.left, arr);
        if(node.right) dfs(node.right, arr);
    }
    return arr;
}
