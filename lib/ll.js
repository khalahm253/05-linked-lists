'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
  }

  append(value) { // Big O(1)

    let node = new Node(value);   
    if(! this.head) {
      this.head = node;
      return this;
    }    
    let currentNode = this.head; 
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  prepend(value) { // Big O(1)

    let node = new Node(value);
    if(! this.head) {
      this.head = node;
      return this;
    }
    let newHead = node;
    if(this.head){
      newHead.next = this.head;
      this.head = newHead; 
    }   
  } 
  reverse(list) { // big O(n)
    let currentNode = this.head;
    let nextNode = null;
    let prevNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
    return this;
  }
  remove(list, value){ // Big O(1)
    if(this.head.value === value){
      this.head = this.head.next;
    }
    let prevNode = this.head;
    let currentNode = this.head.next;
    while(currentNode){
      if(currentNode.value === value){
        prevNode.next = currentNode.next;
        currentNode = currentNode.next;
        break;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }
}
module.exports = LinkedList;
