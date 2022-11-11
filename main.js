
class LinkedList {
    constructor(head = null) {
        this.head = new Node(head);
        this.tail = this.head;

      
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        
        return this;

    }
    Printlist(head) {

       let current = head;
        while (current !== null) {
            
            
            console.log(current.value);
            current = current.next

            return this;
        
        }
    }
    size() {
        let current = this.head;
        let count = 0;
        while (current !== null) {
            count++;
            current = current.next
        }
        return count;
    }
    tail() {
        let tail = this.head;
        if (tail) {
            while (tail.next) {
                tail = tail.next
            }
        }
        return tail;
    }
}


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}




let list2 = new LinkedList(5)

list2.append(3)
list2.append(15)
list2.append(73)


console.log(list2.size())
console.log(list2.tail)
