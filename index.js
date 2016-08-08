'use strict';

class LinkedList {

    constructor() {
        this.head = null;
    }

    addNext(val) {

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
    }

    isCircular () {
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
    }

    getNextTotal() {
        let current = this.head;
        let i = 0;

        if (this.head === null) {
            throw new Error('No nodes');
        }

        if (this.isCircular()) {
            throw new Error('Node is circular');
        }

        while (current.next) {
            i++;
            current = current.next;
        }

        return i;
    }

}

function getIntersectionNode(list1, list2) {
    let firstListLength = list1.getNextTotal();
    let secondListLength = list2.getNextTotal();
    
    while (firstListLength > secondListLength) {
        list1.head = list1.head.next;
        firstListLength--;
    }
    
    while (secondListLength > firstListLength) {
        list2.head = list2.head.next;
        secondListLength--;
    }

    while (list1.head !== null) {

        if (list1.head === list2.head) {
            return list1.head.value;
        }

        list1.head = list1.head.next;
        list2.head = list2.head.next;
    }

    throw new Error('No intersection');
}

module.exports = {
    LinkedList,
    getIntersectionNode
};

