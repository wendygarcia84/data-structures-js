class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Add
    add(element) {
        //new node
        var node = new Node(element);
        //to store current node
        var current;

        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;

            //iterate to the end of the list
            while (current.next) {
                current = current.next;
            }

            //add node to the end
            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) {
        var node = new Node(element);
        var current, prev;

        if (index > this.size) return false;
        else {
            current = this.head;
            if (index === 0) {
                node.next = current;
                this.head = node;
            } else {
                var i = 0;

                while( i < index ) {
                    i++;
                    prev = current;
                    current = current.next;
                }
                
                node.next = current;
                prev.next = node;
            }
            this.size++;
        }
    }
}

var l = new LinkedList();
var o1 = {
    name: "Wendy",
    age: 35
}

var o2 = {
    name: "Aria",
    age: 1
}

var o3 = {
    name: "Joseph",
    age: 6
}

var o4 = {
    name: "Jose",
    age: 35
}

var o5 = {
    name: "Roy",
    age: 1
}

l.add(o1);
l.add(o2)
l.add(o3);
l.add(o4); 
l.insertAt(o5, 5); //Wendy, Aria, Joseph, Jose

var current = l.head;

for(var i = 0; i < l.size ; i++) {
    console.log(current.element)
    current = current.next;
}