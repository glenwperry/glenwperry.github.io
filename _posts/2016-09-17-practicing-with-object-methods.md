---
layout: post
title: Practice Creating Objects and Object Methods
date: 2016-09-17
categories: "javascript"
tags: "javascript"
published: false
---

Prompt
======

**Step 1**
Create an object to represent Rex using literal syntax. Define properties such as color, weakness, size and name. Also create an object method that prints out details about the cat in a string.

**Step 2**
Create an object for Sheba using a constructor function Cat(). Use dot notation as the property accessor. Print her details using Object.key and a function declaration.

Attempt
=======

**Step 1**

```javascript
//This is an object literal, also called an object initializer.
var cat1 = {
	name: "rex",
	color: "orange",
	size: "medium",
	weakness: "love"
};

function catDetails() { //creating the function that will be our logDetails method
	console.log(this.name + " is a " + this.size + " " + this.color + " cat whose weakness is " + this.weakness)
};

cat1.logDetails = catDetails; //assigning the method to our cat1 object

cat1.logDetails(); //calling the logDetails method
```

**Step 2**
	
```javascript
function Cat(name, color, size, weakness) { //define object type (Cat) as well as properties
	this.name = name; //define values (which refer to arguments above)
	this.color = color;
	this.size = size;
	this.weakness = weakness;
};

var cat2 = new Cat("Sheba", "grey", "small", "kidneys"); //instantiate a new Cat object type

function catDetails(catObject) {  //function declaration (No variable. Declarations occur as standalone constructs and can't be nested within non-function blocks)
	var array = []; //create blank array to hold the details once we get them
	var catProperties = Object.keys(catObject); //factor this down to make things less crazy
	for(var i=0; i < catProperties.length; i++) { //for loop to iterate through "cat" argument for the number equal to the cat object's properties (4)
		array[i] = catObject[catProperties[i]]; //array index equals meaning of iterated properties of catObject.
	}
	console.log(array);
}

catDetails(cat2); //calling the catDetails function on cat2

Can you make catDetails a method of Cat object type?

Cat.prototype.details = catDetails(catObject); //this doesn't work but I feel like it should. Try it again later by re-writing catDetails without an arguement.

```

Well that's it for now, later on try giving this a shot:

**Step 3**
Create an object for Loki using Object.create() method. Use bracket notation as the property accessor. Print out her details using for...in.

**Step 4**
Write a function expression that returns an array of all cat colors. Also write a function declaration that returns all cat weaknesses. See here for more information about the difference: https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/



