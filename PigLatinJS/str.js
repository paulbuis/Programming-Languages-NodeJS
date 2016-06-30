
/**
 * str.js 
 *
 * A string-like class
 */

const Char = require('./char.js');

function Str(s) {

	/**
	 * 
	 */
	this.isEmpty = function() {
		return s.length == 0;
	}
	
	
	/**
	 * 
	 */
	this.charAt = function(i) {
		return s.charAt(i);
	};

	
	/**
	 * 
	 */
	this.slice = function(start, len) {
		return s.slice(start, len);
	};

	
	/**
	 * 
	 */
	this.toString = function() {
		return s.toString();
	}

	
	/**
	 * 
	 */
	this.toLowerCase = function() {
		return new Str(s.toLowerCase());
	}

	
	/**
	 * 
	 */
	this.toUpperCase = function() {
	  return new Str(s.toUpperCase());
	}

	
	/**
	 * 
	 */
	this.isCaptialized = function() {
		return Char.isUpper(s.charAt(0));
	}

	
	/**
	 * 
	 */
	this.startsWithVowel = function() {
		return Char.isVowel(s.charAt(0));
	}

	
	/**
	 * 
	 */
	this.some = function(pred) {
      const n = s.length;
	  var i;

	  for (i=0; i<n; i++) {
		if (pred(s.charAt(i))) {
			return true;
		}
	  }
	  return false;
	}

	
	/**
	 * 
	 */
	this.every = function(pred) {
	  const n = s.length;
	  var i;
	  
	  for (i=0; i<n; i++) {
		if (!pred(s.charAt(i))) {
		  return false;
		}
	  }
	  return true;
	}

	
	/**
	 * 
	 */
	this.firstIndexOf = function(pred) {
	  const n = s.length;
	  for (i=0; i<n; i++){
		if (pred(s.charAt(i))) {
		    return i;
		}
	  }
	  return -1;
	}

	
	/**
	 * 
	 */
	this.indexOfFirstVowel = function() {
		return this.firstIndexOf(Char.isVowel);
	}

	
	/**
	 * 
	 */
	this.containsNonAlpha = function() {
		return this.some(Char.isNonAlpha);
	}
}


module.exports = {
  Str: Str
};