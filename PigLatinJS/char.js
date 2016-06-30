/**
 * char.js 
 *
 */

const aCode = 'a'.charCodeAt(0);
const zCode = 'z'.charCodeAt(0);
const ACode = 'A'.charCodeAt(0);
const ZCode = 'Z'.charCodeAt(0);
const ECode = 'E'.charCodeAt(0);
const ICode = 'I'.charCodeAt(0);
const OCode = 'O'.charCodeAt(0);
const UCode = 'U'.charCodeAt(0); 

function isUpper(ch) {
  const code = ch.charCodeAt(0);
  return (code >= ACode) && (code <= ZCode);
}
  
function isLower(ch) {
  var code = ch.charCodeAt(0);
  return (code >= aCode) && (code <= zCode);
}
  
function isAlpha(ch) {
  const code = ch.charCodeAt(0);
  return ((code >= ACode) && (code <= ZCode)) ||
	     ((code >= aCode) && (code <= zCode));
}
  
function isNonAlpha(ch) {
  return !isAlpha(ch);
}
  
function isVowel(ch) {
  var code = ch.charCodeAt(0);
  if  (code >= aCode) {
	code -= (aCode - ACode); 
  }
  return ((code == ACode) || (code == ECode) || (code == ICode) ||
          (code == OCode) || (code == UCode));  
}


module.exports = {
  isUpper : isUpper,
  isLower : isLower,
  isAlpha : isAlpha,
  isNonAlpha : isNonAlpha,
  isVowel : isVowel
};