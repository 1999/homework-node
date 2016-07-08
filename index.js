'use strict';

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.addNext = function(val) {

    let node = {
        value: val,
        next: null
    };

    if (!this.head) {

        this.head = node;

    } else {

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;

    }
};

LinkedList.prototype.isCircular = function() {
    if (this.head === null) {
        return false;
    }

    let slow = this.head;
    let fast = this.head;

    for (;;) {
        slow = slow.next;

        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return false;
        }

        if (slow === null) {
            return false;
        } else if (fast === null) {
            return false;
        }

        if (slow === fast) {
            return true;
        }
    }
};

LinkedList.prototype.getNextTotal = function() {
    let current = this.head;
    let i = 0;

    if (this.head === null) {
        return 'no nodes';
    }

    if (this.isCircular()) {
        return 'node is circular';
    }

    while (current.next) {
        i++;
        current = current.next;
    }

    return i;
};

module.exports = LinkedList;
