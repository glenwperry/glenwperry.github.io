---
layout: post
title: Javascript Exercise - Alternating Numbers
date: 2016-09-16
categories: "javascript, forms, inline javascript"
tags: "javascript, forms, inline javascript"
---

This is my first attempt at getting a javascript program to operate inline on an html page. So far, it's broken. Not worth trying.

<body>
<form name="myform" action="" method="get">Enter a line of numbers to alternate adding and subtracting: <br>
<input type="text" name="inputbox" value=""><p>
<input type="button" name="button" Value="Click" onClick="alternator(form.inputbox.value)">
</form>

<script language="JavaScript">

function testResults (form) {
    var testVar = form.inputbox.value;
    alert ("You typed: " + TestVar);
}

function sumOf(array) {
	var sum = 0;
	for(var i=0; i<array.length; i++) {
		sum += array[i];
	}
	return sum;
}

function alternator(form) {
	var array = form.inputbox.value
	var newArray = [array[0], array[1]];
	var result = null;
	var i=2;
	while(i<array.length) {
		if(i % 2 === 0) {
			newArray[i] = (array[i]) * -1;
			}	
		if(i % 2 !== 0) {
			newArray[i] = (array[i]);
			}
		i++;
		}
		result = sumOf(newArray);
	alert (result);
}




</script>