#Main program in test.js

test.js requires module in piglatin.js  
piglatin.js requires modules str.js and char.js  
str.js depends on char.js  

##Assignment:  
1. Run "wc -l *.js" in project directory, noting total lines of code
2. Run "node test.js | tee test0.txt" to save output of program as given to you.
3. Rewrite isCapitalized(), startsWithVowel(), firstIndexOf(), and indexOfFirstVowel in str.js to use regular expressions
4. Remove require('./char.js') from both piglatin.js and str.js
5. Remove some() and every() from str.js
6. Run "node tset.js | tee test1.txt" to save output of your program
7. Run "diff test0.txt test1.txt" to see difference in output (ideally, none).
8. Run "rm char.js" to get rid of unneeded source code file.
9. Run "wc -l *.js" and note reduction in total line count.
