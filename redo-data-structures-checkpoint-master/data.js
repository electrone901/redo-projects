'use strict';

/*
Fill in your own code where you see "your code here".
You can insert new lines at those locations, but you
will not need to edit the lines above and below them.
*/

// -----------------------------------------
// Stacks
class stackNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // Stack constructor function
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Stack.prototype.add
    add(item) {
        const newNode = new stackNode(item);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const temp = this.head;
            this.head = newNode;
            this.head.next = temp;
        }
        return this; // for chaining, do not edit
    }

    // Stack.prototype.remove
    remove() {
        if (!this.head) return undefined;

        const remove = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        return remove.value;
    }
}

// -----------------------------------------
// Queues

// EXTRA CREDIT: remove the `pending` line in the spec to attempt.

class queueNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class Queue {
    // Queue constructor function
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Queue.prototype.add
    add(item) {
        const newNode = new queueNode(item);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this; // for chaining, do not edit
    }

    // Queue.prototype.remove
    remove() {
        if (!this.head) return undefined;

        const remove = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return remove.value;
        }
        this.head = this.head.next;
        return remove.value;

        // your code here
    }
}

// -----------------------------------------
// Linked lists

// EXTRA CREDIT: remove the `pending` line in the spec to attempt.

class LinkedList {
    // LinkedList constructor function
    constructor() {
        this.head = this.tail = null;
    }

    // LinkedList.prototype.addToTail
    addToTail(item) {
        // your code here
        return this; // for chaining, do not edit
    }

    // LinkedList.prototype.removeFromTail
    removeFromTail() {
        // your code here
    }

    // LinkedList.prototype.forEach
    forEach(callbackFunc) {
        // your code here
    }
}

class ListNode {
    // ListNode constructor function
    constructor(item, prev, next) {
        this.item = item;
        this.next = next || null;
        this.prev = prev || null;
    }
}

//-----------------------------------------
// Association lists

class Alist {
    // Alist constructor function
    constructor() {
        this.head = null;
        this.tail = null;
        // your code here
    }

    // Alist.prototype.set
    set(key, value) {
        const newNode = new AlistNode(key, value, null)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const temp = this.head;
            this.head = newNode;
            this.head.next = temp;
        }
        // your code here
        return this; // for chaining; do not edit
    }

    // Alist.prototype.get
    get(key) {
        if (!this.head) return undefined;

        let current = this.head;
        while (current) {
            if (current.key === key) {
                return current.value;
            } else {
                current = current.next;
            }

        }
        return undefined;
        // your code here
    }
}

class AlistNode {
    // AlistNode constructor function
    constructor(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

//-----------------------------------------
// Hash Tables

function hash(key) {
    let hashedKey = 0;
    for (let i = 0; i < key.length; i++) {
        hashedKey += key.charCodeAt(i);
    }
    return hashedKey % 20;
}

class HashTable {
    // HashTable constructor function
    constructor() {
        this.buckets = Array(20);
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Alist
        }
        // your code here
    }

    // HashTable.prototype.set
    set(key, value) {
        const hashIdx = hash(key);
        const newNode = new AlistNode(key, value, null)

        if (!this.buckets[hashIdx].head) {
            this.buckets[hashIdx].head = newNode;
            this.buckets[hashIdx].tail = newNode
        } else {
            const temp = this.buckets[hashIdx].head;
            this.buckets[hashIdx].head = newNode;
            this.buckets[hashIdx].head.next = temp;
        }
        // your code here. DO NOT simply set a prop. on an obj., that's cheating!
        return this; // for chaining, do not edit
    }

    // HashTable.prototype.get
    get(key) {
        const hashIdx = hash(key);
        if (!this.buckets[hashIdx].head) return undefined;

        let current = this.buckets[hashIdx].head;
        while (current) {

            if (current.key === key) {
                return current.value;
            } else {
                current = current.next;
            }
        }
        return undefined;
        // your code here. DO NOT simply get a prop. from an obj., that's cheating!
    }
}

//-----------------------------------------
// Binary search trees

class BinarySearchTree {
    // BinarySearchTree constructor function
    constructor(val) {
        this.value = val;
        this.left = null;
        this.righ = null;
        this.parent = null;
    }

    // BinarySearchTree.prototype.insert
    insert(val) {
        const leaf = new BinarySearchTree(val);

        function insertion(leaf, root) {
            if (leaf.value < root.value) {
                if (root.left) {
                    return insertion(leaf, root.left)
                } else {
                    root.left = leaf;
                    leaf.parent = root;
                }
            } else {
                if (root.right) {
                    return insertion(leaf, root.right)
                } else {
                    root.right = leaf;
                    leaf.parent = root;
                }
            }
        }
        insertion(leaf, this)
            // your code here
        return this; // for chaining, do not edit
    }

    // BinarySearchTree.prototype.min
    min() {
        if (!this.left) return this.value;
        return this.left.min()
            // your code here
    }

    // BinarySearchTree.prototype.max
    max() {
        if (!this.right) return this.value;
        return this.right.max()

        // your code here
    }

    // BinarySearchTree.prototype.contains
    contains(val) {

        function check(val, current) {
            if (current.value === val) return true;
            else if (current.value > val) {
                return current.left ? check(val, current.left) : false;
            } else {
                return current.right ? check(val, current.right) : false
            }
        }

        return check(val, this);
        // your code here
    }

    // BinarySearchTree.prototype.traverse
    traverse(callbackFunc) {
        if (this.left) {
            this.left.traverse(callbackFunc);
        }
        callbackFunc(this.value)
        if (this.right) {
            this.right.traverse(callbackFunc)
        }
        // your code here
    }

}