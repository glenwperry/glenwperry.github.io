---
layout: post
title: Different Ways to Iterate Through Object Properties/Values
date: 2016-09-17
categories: "javascript"
tags: "javascript"
published: false
---

Javascript objects are confusing me and I don't think I can progress until I really get them down. I'll be using the Animal Fetcher exercise
as an example.

Prompt
======



**Step One**

Given this object: 

```javascript
var animals = { 
mammals:['bears','lions','whales','otters'], 
birds:['penguins','ducks','swans','chickens'], 
cats:['panther','mountain lion','leopard','snow tiger'], 
insects: ['flea','mosquito','beetle','fly','grasshopper']
}
```

Create a function called getFirstAnimals that returns an array of all the first animals in the object. 
Example: [‘bears’,’penguins’,panther’,’flea’]

**Step Two**

Also create a function called getLastAnimals that returns an array of all the last animals in the object. 
Example: [‘otters’,’chickens’...etc]



Object.keys(obj)
================

This method returns an array of a given object's *own enumerable properties.*

What are *enumerable properties*? They are the named properties that aren't "built in" to the object such as .length, typeof, valueOf, hasOwnProperty, toString(), indexOf().
In other words - **they are the properties that can be returned in a for/in loop.**

How do you get the values of those properties?

```javascript
firstAnimals[i] = animals[Object.keys(animals)[i]][0];
```

A little complicated. What's actually happening here?

```javascript
animals <--- your object.

[Object.keys(animals)[i]] <--- iterating through each enumerable property of animal object.

[0] <--- returning the value at index position '0' of the property being iterated through.
```

If you ever find yourself using this, you should factor it down to something more manageable. Like...

```javascript
var species = Object.keys(animals)
```

Then your solution would look like this:

```javascript
function getFirstAnimals(animals) {
	var firstAnimals = [];
	var species = Object.keys(animals)
	for(i=0; i < species.length; i++) {
		firstAnimals[i] = animals[species[i]][0];
	}
	return firstAnimals;
}
```

This formula is hard to remember. Let's see if there's a better way.

For...in statement
==================

This loop iterates over the enumerable properties (like Object.keys) but in arbitrary order. Since it's a loop, you can execute a statement on each property as it cycles through.
This shouldn't be used where order matters, apparently. But when wouldn't it matter?


The code below does not work! It returns the *first letter* of each key/species, not the first value.

```javascript
function getFirstAnimals(animals) {
	var firstAnimals = [];
		for(var species in animals) {
		firstAnimals.push(species[0])
		}
	return firstAnimals;
}
```

Can for...in be used to return **the first value**?

Moving the [0] outside the ) returns 'undefined'. This is confusing because
animals.mammals[0] returns "bears". So it seems like animals.species[0] should also return bears. It is iterating through 'species' (because it's a loop, after all)

```javascript
function getFirstAnimals(animals) {
	var firstAnimals = [];
		for(var species in animals) {
		firstAnimals.push(animals[species][0])
		}
	return firstAnimals;
}
```

THIS WORKS. How?

```javascript
for(var species in animals) {... <--- cycle through each property/key in animals object

...and push...

(animals...) <--- your animals object.

[species] <--- your key/property.

[0]) <--- first value of that key/property
```

In other words, this is the *literal syntax* for cycling through the dynamic variable (species) as though it were something like animals.mammals[0].

Does it work with dot notation?

```javascript
function getFirstAnimals(animals) {
	var firstAnimals = [];
		for(var species in animals) {
		firstAnimals.push(animals.species)[0]

		or

		firstAnimals.push(animals.species)[0]
		}
	return firstAnimals;
}
```

No. The first example says property '0' of undefined can't be returned. The second returns four "undefined" values.

For...of
========

The most complicated one, which seems like it should be the simplest. Creates a loop over all *iterable objects* (Array, Map, Set, String, arguments) and executes a statement on the value of each property.

You can't get it to work. Forget about it for now.

Conclusion
==========
For now, stick to Object.keys. It doesn't mix things up and it's the one you are most familiar with. Re-visit for...in occasionally but until then, this is the ticket:

```javascript
	var species = Object.keys(animals)
	for(i=0; i < species.length; i++) {
		firstAnimals[i] = animals[species[i]][0];
```

