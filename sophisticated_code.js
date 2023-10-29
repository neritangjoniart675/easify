/* sophisticated_code.js */

// This code implements a data structure called a Binary Search Tree (BST), which is used to efficiently store and retrieve data in sorted order.

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  // Helper function to insert a node into the BST
  insert(data) {
    const newNode = new Node(data);
    
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  
  // Helper function to search for a given key in the BST
  search(key) {
    return this.searchNode(this.root, key);
  }
  
  searchNode(node, key) {
    if (node === null) {
      return null;
    }
    
    if (key < node.data) {
      return this.searchNode(node.left, key);
    } else if (key > node.data) {
      return this.searchNode(node.right, key);
    } else {
      return node;
    }
  }
  
  // Helper function to remove a node from the BST
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  
  removeNode(node, key) {
    if (node === null) {
      return null;
    }
    
    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      
      const aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
  
  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }
  
  // Helper function to perform an in-order traversal of the BST
  inOrderTraversal(node, callback) {
    if (node !== null) {
      this.inOrderTraversal(node.left, callback);
      callback(node.data);
      this.inOrderTraversal(node.right, callback);
    }
  }
  
  // ... Additional methods and properties for the BST ...
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Example usage of the Binary Search Tree

const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

console.log("In-order traversal:");
bst.inOrderTraversal(bst.root, (data) => console.log(data));

console.log("Searching for 6:", bst.search(6));
console.log("Searching for 11:", bst.search(11));

bst.remove(6);
console.log("In-order traversal (after removing 6):");
bst.inOrderTraversal(bst.root, (data) => console.log(data));

// ... More code for advanced operations on the BST ...