/* Write a Program to Flatten a given n-dimensional array */
// Write your code here


const flatten = (array) => {
	var flat_array=[]
	flat_array=array.flat(Infinity)
	// return flat_array
	console.log(flat_array);
};

flatten([1, [2, 3], [[4], [5]]])

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
