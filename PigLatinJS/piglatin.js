/**
 * piglatin.js 
 */


const
Char = require('./char.js');
const
StrModule = require('./str.js');
const
Str = StrModule.Str;


/**
 * 
 */ 
function Tokenizer(input) {
	const
	pairPattern = /[\w]*[\W]*/g;
	const
	wordPattern = /[\w]*/;
	const
	nonwordPattern = /[\W]+/;
	var match = pairPattern.exec(input);

	this.next = function() {
		if (match[0] != "") {
			const
			word = wordPattern.exec(match);
			const
			nonWord = nonwordPattern.exec(match);
			const
			pair = [ (word != null) ? String(word) : "",
					(nonWord != null) ? String(nonWord) : "" ];
			match = pairPattern.exec(input);
			return {
				value : pair,
				done : false
			};
		}
		return {
			done : true
		};
	};
}


/**
 * 
 * @param word
 * @returns {String}
 */
function translateWord(word) {
	const
	capitalized = word.isCaptialized();
	const
	indexOfFirstVowel = word.indexOfFirstVowel();
	if (indexOfFirstVowel > 0) {
		const
		wordHead = word.slice(0, indexOfFirstVowel);
		const
		wordTail = word.slice(indexOfFirstVowel);
		word = wordTail + wordHead.toLowerCase() + "ay";
	} else if (indexOfFirstVowel == 0) {
		word = word + "yay";
	}

	if (capitalized) {
		word = word.charAt(0).toUpperCase() + word.slice(1);
	}
	return word;
}


/**
 * 
 * @param inputPair
 * @returns
 */
function translatePair(inputPair) {
	if (inputPair == null) {
		throw "null";
	}

	var word = new Str(inputPair[0]);

	if (word.isEmpty() || word.containsNonAlpha()) {
		return inputPair[0] + inputPair[1];
	}
	return translateWord(word) + inputPair[1];
}


/**
 * 
 * @param fileName
 * @returns (String)
 */
function translateFileName(fileName) {
	return translateWord(new Str(fileName));
}


/**
 * 
 * @param s (Wtring)
 * @returns {String}
 */
function translateString(s) {
	const
	t = new Tokenizer(s);
	var iteratorResult = t.next();
	var result = "";
	while (!iteratorResult.done) {
		result += translatePair(iteratorResult.value);
		iteratorResult = t.next();
	}
	return result;
}


module.exports = {
	translateString : translateString,
	translateFileName : translateFileName
};