[![Build Status](https://travis-ci.org/k03mad/homework-node.svg?branch=master)](https://travis-ci.org/k03mad/homework-node)

### Simple implementation of single linked list.

Linked list is a linear collection of data elements, called nodes, pointing to the next node by means of a pointer

NPM link: https://www.npmjs.com/package/homework-node

### Install & use:

```node
$ npm install homework-node
```

```js
const Node = require('homework-node');
const singleList = new Node();

// add next element to single list
singleList.addNext(value)
// return true if single list is circular
singleList.isCircular()
// returns the number of the following elements
singleList.getNextTotal()
// returns element which have both nodes
singleList.getIntersectionNode()
```
