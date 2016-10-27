---
layout: post
title: Factoring Down Javascript Programs
date: 2016-09-18
categories: "javascript, factoring"
tags: "javascript, factoring"
published: false
---

Factor down the following program(?) as much as you can:

```javascript
//Write a function called generateFizzBuzz that returns an object with all the numbers from 1 to 100 as keys and values, with two exceptions. 
//For numbers divisible by 3, the value should be "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), the value should be "Buzz" instead. Example: 

//{0:0,1:1,2:2,3:’Fizz’,4:4,5:’Buzz’...}

//When you have that working, modify your function to show "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still show "Fizz" or "Buzz"for numbers divisible by only one of those). 

//Example: 

//{...15: ‘FizzBuzz’...} 

function generateFizzBuzz() {
	var newObject = {};
	for(var i=0; i<101; i++) {
		newObject[i] = i;
	}
	return newObject;
}

function fizz() {
	var newObject = generateFizzBuzz();
	var newObjectLength = (Object.keys(newObject).length);
	for(var i=0; i< newObjectLength; i++) {
		(newObject[i] % 3 === 0 && newObject[i] % 5 !== 0) ? (newObject[i] = "fizz");
		}
	}
	return newObject;
}

function buzz() {
	var newObject = fizz();
	var newObjectLength = (Object.keys(newObject).length);
	for(var i=0; i< newObjectLength; i++) {
		if(newObject[i] % 5 === 0 && newObject[i] % 3 !== 0) {
			newObject[i] = "buzz";
		}
	}
	return newObject;
}

function fizzBuzz() {
	var newObject = buzz();
	var newObjectLength = (Object.keys(newObject).length);
	for(var i=0; i< newObjectLength; i++) {
		if(newObject[i] % 5 === 0 && newObject[i] % 3 === 0) {
			newObject[i] = "fizzbuzz";
		}
	}
	console.log(newObject);
}

fizzBuzz();
```





```javascript
function organizeCurrencies(moneyarray) {
	var coins = {};
	var bills = {};
	var bigObj = [coins,bills];
	for(i=0; i<moneyarray.length; i++) {
		if(moneyarray[i].charAt(0) === "£") {
			bills[moneyarray[i]] = (bigObj[1][moneyarray[i]] || 0) + 1;
			console.log(bigObj[1])
		}
		else {
			coins[moneyarray[i]] = (bigObj[0][moneyarray[i]] || 0) + 1;
		}
	}
	return bigObj;
}


organizeCurrencies(['1p','2p','5p', '5p','10p','20p','50p','£1', '20p','50p','£1','£2'])
```