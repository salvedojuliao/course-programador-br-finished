// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

function myFunction(a) {
    return a.slice(3);
}


/*

There are two equally suitable and almost identical methods to remove characters from a string: substring and slice. 
My personal favorite is the slice() method because you can use the same method when you want to remove elements from an array. 
That way, you only have to remember one. Also, I easily confuse the substring() and the substr() method.


Approach 1: slice()
slice extracts a part of a string and returns it without modifying the original string. 
To define the part that you want to extract, you can call it with two parameters. 

=====> The first parameter defines the index of the first character in the string that you want to extract. 
=====> The second parameter defines the index of the first character that you DO NOT want to extract.

console.log('abcd'.slice(1,3))
// output: 'bc'

The second parameter is optional. If not defined, slice will simply return all characters starting from the start-index that you defined.

console.log('abcd'.slice(1))
// output: 'bcd'

This way, you can easily remove the first n characters of a string.
Approach 2: substring()

As I said above, substring is almost identical to slice. There are only very subtle differences in some edge cases, but they were never relevant for me.
console.log('abcd'.substring(1,3))
// output: 'bc'
console.log('abcd'.substring(1))
// output: 'bcd'




*/