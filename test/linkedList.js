'use strict';

const expect = require('chai').expect;
const LinkedList = require('../index.js');

describe('npm package tests', () => {

    let list = new LinkedList();

    it('LinkedList should be a function', () => {
        expect(typeof LinkedList).to.equal('function');
    });

    describe('add nodes', () => {

        it('list should be null by default', () => {
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
            expect(list.getNextTotal()).to.equal('node is circular');
        });

        it('should print message if there are no nodes', () => {
            list = new LinkedList();
            expect(list.getNextTotal()).to.equal('no nodes');
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

});
