'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = undefined;
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
}
module.exports = LinkedList;
  
