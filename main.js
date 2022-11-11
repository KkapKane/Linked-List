
class LinkedList {
    constructor(head) {
        this.head = head;
       
    }
    Printlist() {
    if (this.head == null) return;
    console.log(this.head.value);
        Printlist(this.head.next);
        
        
    }
}


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}




node1 = new Node(1)
node2 = new Node(2)
node3 = new Node(3)
node4 = new Node(4)
node5 = new Node(5)
node6 = new Node(6)

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
const list = new LinkedList(node1)
list.Printlist()