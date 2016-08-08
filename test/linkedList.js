'use strict';

const expect = require('chai').expect;
const assert = require('chai').assert;

const {
    LinkedList,
    getIntersectionNode
} = require('../index.js');

describe('single linked list tests', () => {

    let list;

    it('LinkedList should be a function', () => {
        expect(typeof LinkedList).to.equal('function');
    });

    describe('add nodes', () => {

        it('list should be null by default', () => {
            list = new LinkedList();

            expect(list.head).to.be.null;
        });

        it('should add first node', () => {
            list.addNext(1);
            expect(list.head.value).to.equal(1);
        });

        it('next node should be null', () => {
            expect(list.head.next).to.be.null;
        });

        it('should add second node', () => {
            list.addNext(10);
            expect(list.head.next.value).to.equal(10);
        });

    });

    describe('loops', () => {

        it('isCircular should be false if there is no node', () => {
            list = new LinkedList();

            expect(list.isCircular()).to.be.false;
        });

        it('isCircular should be false by default', () => {
            for (let i = 0; i < 15; i++) {
                list.addNext(`loop${i}`);
            }

            expect(list.isCircular()).to.be.false;
        });

        it('isCircular should be true after loop add', () => {
            list.head.next.next.next.next.next = list.head.next.next;

            expect(list.isCircular()).to.be.true;
        });
 
    });

    describe('next counter', () => {

        it('should print message if list circular', () => {
            assert.throws(() => {
                list.getNextTotal();
            }, 'Node is circular');
        });

        it('should print message if there are no nodes', () => {
            list = new LinkedList();

            assert.throws(() => {
                list.getNextTotal();
            }, 'No nodes');
        });

        it('should have 0 next nodes after add 1 node', () => {
            list.addNext('abc');
            expect(list.getNextTotal()).to.equal(0);
        });

        it('should have 1 next nodes after add another 1 node', () => {
            list.addNext('def');
            expect(list.getNextTotal()).to.equal(1);
        });

        it('should have 16 next nodes after add another 15 nodes', () => {
            for (let i = 0; i < 15; i++) {
                list.addNext(`def${i}`);
            }

            expect(list.getNextTotal()).to.equal(16);
        });

    });

    describe('intersection', () => {

        let list1;
        let list2;

        it('should add intersection', () => {
            list1 = new LinkedList();
            list2 = new LinkedList();

            for (let i = 0; i < 10; i++) {
                list1.addNext(`list1_elem${i + 1}`);
            }

            for (let i = 0; i < 5; i++) {
                list2.addNext(`list2_elem${i + 1}`);
            }

            list2.head.next.next.next.next.next = list1.head.next.next.next.next;
        });

        it('should get intersection element', () => {
            expect(getIntersectionNode(list1, list2)).to.equal('list1_elem5');
        });

        it('should throw error if there is no intersection', () => {
            list1 = new LinkedList();
            list2 = new LinkedList();

            list1.addNext(7);
            list2.addNext(8);

            assert.throws(() => {
                getIntersectionNode(list1, list2);
            }, 'No intersection');
        });

    });


});
