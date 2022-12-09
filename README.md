# ARRAYED
arrayed is a utility for extending the array functionality.

# Git Repository
https://github.com/chetansu/arrayed.git

## Usage
install the package using npm command 
```sh
$ npm i arrayed
```

The following functions are exposed in Arrayed.
<br><br>

## arrayed.max()
max function takes in a single parameter in the form of array.

The response from this call is the maximum number in the array.

```sh
const arrayed = require(arrayed);

arrayed.max([20,22,15,9,8,15,22]);
```

returns
```sh
$ 22
```
<br><br>

## arrayed.min()
min function takes in a single parameter in the form of array.

The response from this call is the minimum number in the array.

```sh
const arrayed = require(arrayed);

arrayed.max([20,22,15,9,8,15,22]);
```

returns
```sh
$ 8
```
<br><br>

## arrayed.maxX()
maxX function takes in two parameters. 

  * the array
  * first X largest numbers count


The response from this call is an array of unique largest number's of size X.

```sh
const arrayed = require(arrayed);

arrayed.maxX([20,22,15,9,8,15,22], 2);
```

returns
```sh
$ [22, 20]
```
<br><br>

## arrayed.minX()
minX function takes in two parameters. 

  * the array
  * first X Smallest numbers count


The response from this call is an array of unique Smallest number's of size X.

```sh
const arrayed = require(arrayed);

arrayed.minX([20,22,15,9,8,15,22], 3);
```

returns
```sh
$ [8, 9, 15]
```
<br><br>

## arrayed.maxByRank()
maxByRank function takes in two parameters. 

  * the array
  * rank of the largest number in the sorted array


The response from this call is a number of particular rank in the sorted unique array.

```sh
const arrayed = require(arrayed);

arrayed.maxByRank([20,22,15,9,8,15,22], 2);
```

returns
```sh
$ 20
```
<br><br>

## arrayed.minByRank()
minByRank function takes in two parameters. 

  * the array
  * rank of the smallest number in the sorted array


The response from this call is a number of particular rank in the sorted unique array.

```sh
const arrayed = require(arrayed);

arrayed.minByRank([20,22,15,9,8,15,22], 3);
```

returns
```sh
$ 15
```
<br><br>

## arrayed.getUnique()
getUnique function takes in a single parameter in the form of array.. 

The response from this call is a unique unsorted array.

```sh
const arrayed = require(arrayed);

arrayed.getUnique([20,22,15,9,8,15,22]);
```

returns
```sh
$ [20,22,15,9,8]
```
<br><br>

## arrayed.compare()
compare function takes in a two parameter in the form of arrays

The response from this call is a boolean.

```sh
const arrayed = require(arrayed);

arrayed.compare([20,22,15,9,8], [20,22,15,9,8]);
```

returns
```sh
$ true
```
<br><br>

## arrayed.sortArray()
sortArray function takes in a two parameter
  * the array
  * increment or decremet the sort. increment is default

The response from this call is an incremented / decremented sorted array.

```sh
const arrayed = require(arrayed);

// Sort array incremented 
arrayed.sortArray([20,22,15,9,8,15,22]);
// Sort array decremented 
arrayed.sortArray([20,22,15,9,8,15,22], false);
```

returns
```sh
$ [22,22,20,15,15,9,8]
$ [8,9,15,15,20,22,22]
```
<br><br>

## arrayed.getUniqueSorted()
getUnique function takes in a single parameter in the form of array.. 

The response from this call is a unique sorted array in increasing or decreasing order.

```sh
const arrayed = require(arrayed);

// Sort array incremented 
arrayed.getUniqueSorted([20,22,15,9,8,15,22]);
// Sort array decremented 
arrayed.getUniqueSorted([20,22,15,9,8,15,22]);
```

returns
```sh
$ [22,20,15,9,8]
$ [8,9,15,20,22]
```
---
<br><br>

## arrayed.getCount()
getCount function takes in a two parameter
  * the array
  * the number to be searched

```sh
const arrayed = require(arrayed);

// getCount called with the searched number being available in array 
arrayed.getCount([20,22,15,9,8,15,22], 22);
// getCount called with the searched number not being available in array
arrayed.getCount([20,22,15,9,8,15,22], 27);
```

returns
```sh
$ 2
$ 0
```


***


 
for instantiation, you wil have to assign arrayed to a variable.
A simple usage within the code is shown below.

```sh
const arrayed = require("./arrayed");

console.log("The largest number is " +arrayed.max([22,15,16,19,21,22]));
console.log("The smallest number is " +arrayed.min([22,15,16,19,21,22]));
console.log("The largest 2 numbers are " +arrayed.maxX([22,15,16,19,21,22], 2));
console.log("The smallest 3 numbers are " +arrayed.minX([22,15,16,19,21,22], 3));
console.log("The smallest 2nd number is " +arrayed.minByRank([22,15,16,19,21,22], 2));
console.log("The largest 3rd number is " +arrayed.maxByRank([22,15,16,19,21,22], 3));
console.log("On duplicate removal the array is " +arrayed.getUnique([22,15,16,19,21,22]));
console.log("On duplicate removal & sorting the array is " +arrayed.getUniqueSorted([22,15,16,19,21,22]));
console.log("On duplicate removal & sorting the array is " +arrayed.getUniqueSorted([22,15,16,19,21,22], false));
console.log("Sort Number array in decreasing order " +arrayed.sortArray([22,15,16,19,21,22], false));
console.log("Sort Number array in Increasing order " +arrayed.sortArray([22,15,16,19,21,22]));
```


# Testing
To run the mocha test case. please install mocha and run the cases by using the command mocha.
```sh
$ npm install -g mocha
$ mocha

Calling arrayed functions
calling function max with array [20,22,15,9,8,15,22]      
Response recieved is 22
    ✔ expected array is 22
calling function min with array [20,22,15,9,8,15,22]      
Response recieved is 8
    ✔ expected array is 8
calling function maxX with array [20,22,15,9,8,15,22]     
Response recieved is 22,20,15
    ✔ expected array is 22,20,15
calling function maxX with array [20,22,15,9,8,15,22]     
Response recieved is 22,20
    ✔ expected array is 22,20
calling function minX with array [20,22,15,9,8,15,22]     
Response recieved is 8,9,15
    ✔ expected array is 8,9,15
calling function minX with array [20,22,15,9,8,15,22]     
Response recieved is 8,9
    ✔ expected array is 8,9
calling function maxByRank with array [20,22,15,9,8,15,22]
Response recieved is 15
    ✔ expected array is 15
calling function maxByRank with array [20,22,15,9,8,15,22]
Response recieved is 20
    ✔ expected array is 20
calling function minByRank with array [20,22,15,9,8,15,22]
Response recieved is 15
    ✔ expected array is 15
calling function minByRank with array [20,22,15,9,8,15,22]
Response recieved is 9
    ✔ expected array is 9
calling function getUnique with array [20,22,15,9,8,15,22]
Response recieved is 20,22,15,9,8
    ✔ expected array is 20,22,15,9,8
calling function getUniqueSorted with array [20,22,15,9,8,15,22]
Response recieved is 22,20,15,9,8
    ✔ expected array is 22,20,15,9,8
calling function getUniqueSorted with array [20,22,15,9,8,15,22]
Response recieved is 8,9,15,20,22
    ✔ expected array is 8,9,15,20,22
calling function sortArray with array [22,22,20,15,15,9,8]
Response recieved is 22,22,20,15,15,9,8
    ✔ expected array is 22,22,20,15,15,9,8
calling function sortArray with array [8,9,15,15,20,22,22]
Response recieved is 8,9,15,15,20,22,22
    ✔ expected array is 8,9,15,15,20,22,22


  15 passing (23ms)
```

## NOTE
This library can be directly used with AWS lambda function to work as a microservice.

License
----
ISC
**Free Software, Hell Yeah!**

