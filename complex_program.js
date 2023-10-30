/* complex_program.js */

// This code implements a sophisticated algorithm for sorting and searching data
// It includes various data structures and functions to handle complex scenarios

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  insert(value) {
    if (this.value === value) {
      return; // Value already exists in the tree
    }
    
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinaryTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinaryTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }
  
  contains(value) {
    if (this.value === value) {
      return true;
    }
    
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }
  
  getMinValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }
  
  getMaxValue() {
    if (this.right === null) {
      return this.value;
    } else {
      return this.right.getMaxValue();
    }
  }
}

const binaryTree = new BinaryTree(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);

console.log(binaryTree.contains(4)); // true
console.log(binaryTree.contains(9)); // false
console.log(binaryTree.getMinValue()); // 2
console.log(binaryTree.getMaxValue()); // 8

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }
  
  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
  }
  
  addEdge(node1, node2) {
    this.edges[node1].push(node2);
    this.edges[node2].push(node1);
  }
  
  getNeighbors(node) {
    return this.edges[node];
  }
  
  getNodes() {
    return this.nodes;
  }
}

const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

console.log(graph.getNeighbors(1)); // [2, 3]
console.log(graph.getNodes()); // [1, 2, 3, 4]