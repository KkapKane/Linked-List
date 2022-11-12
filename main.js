
class LinkedList {
    constructor(head = null) {
        this.head = new Node(head);
        this.tail = this.head;
        this.size = 0;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
        return this;

    }
    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty() === 0) {
            this.head = newNode;
            
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
       
    }
    isEmpty() {
        return this.size === 0;
    }
    Print() {
     
        let current = this.head;
        while (current !== null) {
            
            
            console.log(current.value);
            current = current.next

            
        
        }
    }

  
    Size() {
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

    currentHead() {
        let head = this.head;
        return head;
    }

    at(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        
       
        return null;

    }

    pop() {
        let second2Last = this.at(this.size - 1)
        second2Last.next = null;
        this.size--;
        return this;
    }

    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value == value) {
                return true;
            }
            
            
            
            current = current.next
        }
        return false;
    }

    find(value) {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            if (current.value == value) {
                return count;
            }
            current = current.next;
            count++;
        }
        return null;
    }

    MakeString() {
        let temp = []
        let current = this.head;
        
        while (current !== null) {
           
            temp.push(current.value.toString())
        
        current = current.next;
        
        }

        if (current == null) {
            return temp.join('->') + '->' + 'null'
        }
        
        return temp.join('->');
    }



}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


let list2 = new LinkedList(15)



list2.append(2)
list2.append(3)

list2.append(16)
list2.prepend(910)




console.log(list2.size)
console.log(list2.MakeString())