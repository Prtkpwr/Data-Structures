//Linear Data Strustures
//-------------------------------------------//
//1. Array
//using array constructor 
const constructedArray = new Array(1,2,3,4,5,6)
console.log(constructedArray)

//using array literal method
const literalArray = [1,2,3,4,5,6]
console.log(literalArray)

//-------------------------------------------//
//2. Linked List
//for creating a node
class Node{
	constructor(value){
  	this.value = value,
    this.next = null
  }
}

//for creating linked list 
class LinkedList{
	constructor(head = null){
  	this.head = head
  }
  
  size(){
  	let count = 0;
    let node = this.head;
    while(node){
    count++
    node = node.next
    }
    return count;
  }
  
  clear(){
  	this.head = null
  }
  
  getLast(){
  	let lastNode = this.head;
    while(lastNode.next){
    	lastNode = lastNode.next
    }
    return lastNode
  }
  
  getFirst(){
  	return this.head
  }
}

//Example
let node1 = new Node(2)
let node2 = new Node(4)
node1.next = node2

let linkedList1 = new LinkedList(node1)

console.log(linkedList1.size()) // 2
console.log(linkedList1.getLast()) // 4
console.log(linkedList1.getFirst()) // 2
console.log(linkedList1.clear()) // 0

//-------------------------------------------//
//3. Stack
class Stack{
	constructor(){
  	this.data = []
    this.top = 0
  }
  
  Push(x){
  	this.data[this.top]=x
    this.top = this.top + 1
  }
  
  Pop(){
    if(this.IsEmpty() === false){
      this.top = this.top -1;
      return this.data.pop() // removes the last element
    }
  }
  
  Peek(){
  	return this.data[this.top - 1]
  }
  
  Length(){
  	return this.top
  }
  
  Search(x){
  	return this.data.indexOf(x)
  }
  
  IsEmpty(){
  	return (this.top === 0)
  }
  
  Print(){
  	let top = this.top - 1; // because top points to index where new element to be inserted
  	while(top >= 0) { // print up to 0th index
    console.log(this.data[top]);
    top--;
  }
  }
}

