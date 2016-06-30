"use strict";
    
const edit = require("./edit.js");
const edits1 = edit.edits1;
const candid = require("./candidates.js");
const candidates = candid.candidates;

console.time('candidates')
const cand = candidates("wrotten");
console.timeEnd('candidates');
console.log(cand);