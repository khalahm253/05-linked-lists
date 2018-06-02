'use strict';

const LinkedList = require('./lib/ll.js');

let callback = (err,data) => {
  if(err) { throw err; }
  console.log(data);
};


LinkedList();