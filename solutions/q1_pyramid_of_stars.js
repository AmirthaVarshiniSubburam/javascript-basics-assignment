/* Write a program to build a `Pyramid of stars` of given height */
// Write your code here

const buildPyramid = (stars) => {
     var pyramid= ""
     for (let i = 1; i <= stars; i++) {
          
          // printing spaces
          for (let j = 1; j <= stars - i; j++) {
            pyramid = pyramid + " "
          }
          // printing stars
          for (let k = 0; k < i; k++) {
               pyramid = pyramid + "* "
          }
          //to print in next line \n
          pyramid = pyramid + "\n"
        }
     
         //return pyramid
        console.log(pyramid);
	
};

buildPyramid(6)

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
