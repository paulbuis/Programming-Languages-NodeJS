/**
 * 
 *
 */
 
const PigLatin = require('./piglatin.js');

const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

const instream = fs.createReadStream('./test.txt');
const outstream = new stream;
const rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
   console.log(PigLatin.translateString(line))
});

rl.on('close', function() {
  // do something on finish here
});