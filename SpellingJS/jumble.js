"use strict";

const words = require("./words.js");
const lexicon = words.getLexicon();

/**
 * @param {string} str
 * @returns {Iterator<string>} 
 */   
function* permutations(str) {
    
    function* permute(prefix, str) {
        const n = str.length;
        if (n == 0) {
            yield prefix;
        }
        let i = 0;
        for (; i < n; i += 1) {
            yield* permute(prefix + str.charAt(i), str.substring(0,i) + str.substring(i+1, n) );
            
        }
    }
    
    yield* permute("", str);
}


console.log("\npermutations of 'ourf' in lexicon:")
permutations("ourf").filter(s=>lexicon[s]).map(s=> console.log(s));
