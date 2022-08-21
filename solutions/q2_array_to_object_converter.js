/* Write a Program to convert an array of objects to an object
	based on a given key */
// Write your code here

	const convert = (obj, key) => {
		var newObj = {};
		obj.forEach(element => {
			newObj[element[key]] = element;
		});
		
		return newObj;
	}
	
	var newObj = convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id');
	
	console.log(newObj);
	


/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}

		}
		//reference
const names = ['Alex', 'Bob', 'Johny', 'Atta']

const obj = Object.assign({}, names)

console.log(obj)
// { '0': 'Alex', '1': 'Bob', '2': 'Johny', '3': 'Atta' }

*/

module.exports = convert;
