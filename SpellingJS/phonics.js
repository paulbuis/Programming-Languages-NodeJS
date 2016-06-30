const doubleMetaphone = require('double-metaphone');

function soundsLike(word1, word2) {
    const dm1 = doubleMetaphone(word1);
    const dm2 = doubleMetaphone(word2);
    
    const result = dm1[0] === dm2[0]; // || dm1[1] === dm2[0] ||
                //   dm1[0] === dm2[1] || dm1[1] === dm2[1];
    if (result) {
        console.log(word1 + " sounds like " + word2);
    }     
    return result;
}

/**
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
function editDistance(a, b){
    const aLength = a.length;
    const bLength = b.length;
    var i = 0;
    var j = 0;
    if  (aLength === 0) {
        return bLength;
    } 
    if (bLength === 0) {    
        return aLength;
    } 

    /**
     * @type {number[]}
     */
    const matrix = [];
    for(i = 0; i <= bLength; i++){
        matrix[i] = [i];
    }
    for(j = 0; j <= aLength; j++){
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for(i = 1; i <= bLength; i++){
        for(j = 1; j <= aLength; j++){
            let cost = b.charAt(i-1) === a.charAt(j-1) ? 0 : 1;
  
            matrix[i][j] = Math.min(matrix[i-1][j-1] + cost, // substitution
                           Math.min(matrix[i]  [j-1] + 1,    // insertion
                                    matrix[i-1][j] + 1));    // deletion
            // transposition
            if ((i >= 2) && (j >= 2) && 
                (a.charAt(i-1) === b.charAt(j-2)) &&
                (a.charAt(i-2) === b.charAt(j-1)) ) {
                    matrix[i][j] = Math.min(matrix[i][j],
                       matrix[i-2][j-2] + cost)
                }
        }
    }

    return matrix[b.length][a.length];
}
