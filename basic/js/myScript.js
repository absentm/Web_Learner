/**
 * one programer test function
 */
function myFunction() {
	document.getElementById("para1").innerHTML = "My Test Demo have Changed!";
	// single line comment

	/*
	 * more line comment
	 */

	var num1 = 10.0;
	var num2 = 20;
	var sum = num1 + num2;

	// cover the first "para1" document 
	document.write("num1 + num2 = " + sum + "<br />");


	var flag = true; // bool type

	var cars = new Array(); // array type
	cars[0] = "DaZhong";
	cars[1] = "BMW";
	cars[2] = "BENS"

	var cars1 = new Array("DA", "XIAO", "SAND"); // array type
	var cars2 = ["SNJS", "ds", 1.0];

	for (item in cars2) { // item is the index of cars2 array
		//		alert(item);  // result : 0, 1, 2  
		document.write(cars2[item] + "<br/>")
	}

	// define a object
	var person = {
		id: 1001,
		name: "zhangsan", // string type should close with "" 
		age: 18,
		detail: function() { // define a function
			return "this person: " +
				this.id + ", " + this.name + ", " + this.age;
		}
	};
	alert(person.id);
	alert(person.name);
	alert(person["age"]); // show two use method
	alert(person.detail());

	// or this define type
	var carName = new String;
	var x = new Number;
	var y = new Boolean;
	var cars = new Array;
	var person = new Object;
	person = null; // to clean person 

}

/**
 * @param {Object} msg: message
 * @param {Object} name: person's name
 */
function myFunction1(msg, name) {
	alert(msg + ", " + name);
}


/**
 * test try catch
 */
function message() {
	var txt = "";

	try {
		adddalert("Welcome guest!");
	} catch (err) {
		txt = "This page hava an error!\n\n";
		txt += "error description: " + err.message + "\n\n";
		txt += "Click OK to continue!\n\n";
		alert(txt);
	}
}


/**
 * try catch throw test
 */
function throwTest() {
	try {
		var x = document.getElementById("num_input").value;

		if (x == "") {
			throw "The value is null!";
		}

		if (isNaN(x)) {
			throw "Is's not a number!";
		}

		if (x > 10) {
			throw "too larger!";
		}

		if (x < 5) {
			throw "too small!";
		}

		throw "Right!!!"

	} catch (err) {
		var y = document.getElementById("error_hint");
		y.innerHTML = "Error: " + err + ".";
	}

}


/**
 * document.forms function test
 */
function formsTest() {
	var x = document.forms["myForm"]["fname"].value;

	if (x == null || x == "") {
		alert("First name must be filled out!");
		return false;
	}

	// test demo
	var getFrom = document.forms["myForm"]; // get the form named: myForm
	// or var getFrom = document.forms[0];
	// print the propertie of "myForm, e.g: fname, username, address"
	console.info("fname: " + getFrom.fname.value);
	console.info("username: " + getFrom.username.value);
	console.info("address: " + getFrom.address.value);
}


/**
 * the use of json
 */
function testJson() {
	//	var text = "\"employees\":[{\"firstName\":\"john\", \"lastName\":\"Doe\"},{\"firstName\":\"Peter\", \"lastName\":\"Jones\"},{\"firstName\":\"Anna\", \"lastName\":\"Smith\"}]";
	var text = '{ "employees" : [' +
		'{ "firstName":"John" , "lastName":"Doe" },' +
		'{ "firstName":"Anna" , "lastName":"Smith" },' +
		'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
	var jsonObj = JSON.parse(text);

	document.getElementById("jsonDemo1").innerHTML = jsonObj.toString();
	document.getElementById("jsonDemo2").innerHTML = jsonObj.employees[0].firstName + " " + jsonObj.employees[0].lastName;
	document.getElementById("jsonDemo3").innerHTML = jsonObj.employees[2].firstName + " " + jsonObj.employees[2].lastName;

	var person = {
		id: 1001,
		name: "zhangsan", // string type should close with "" 
		age: 18
	};

	document.getElementById("jsonDemo4").innerHTML = JSON.stringify(person);
}

/**
 * void func test demo
 */
function voidTest() {
	var a, b, c;
	a = void(b = 5, c = 7);
	alert("a = " + a + ",\n " + "b = " + b + ",\n " + "c = " + c + "\n");
}

/**
 * the use of function test
 */
function funcTest() {
	var myFunc = new Function("a", "b", "return a * b");
	var x = myFunc(2, 3);
	console.log("func test: x = " + x);

	// function's self call, have no function name
	// use "()" close the function content, and add "()" to call! 
	(function() {
		document.getElementById("func_id").innerHTML = "hello, I am called By my self!"
	})();

	(function(a, b) {
		console.log("arguments.length = " + arguments.length);
		var txt = myFunc.toString();
		console.log("func_toString: " + txt);
	})();


	// function cluster test
	var add = (function() {
		var count = 0;
		return function() {
			return count += 1;
		}
	})();


	add();
	add();
	add();

	console.log("add = " + add());

	// addEventListener test!!
	document.getElementById("btn_id").addEventListener("click", alertFunc());
}

function alertFunc() {
	alert("Hello DOM AddEventListener");
}

/**
 * more addEventListener test!!
 */
function addEventTest() {
	var btnEvent = document.getElementById("myBtn");
	btnEvent.addEventListener("click", oneFunc);
	btnEvent.addEventListener("click", otherFunc);
}


function oneFunc() {
	alert("one function!");
}

function otherFunc() {
	alert("other function");
}

/**
 * 使用匿名函数传递参数
 */
function paramAddEventTest() {
	var p1 = 5;
	var p2 = 7;

	document.getElementById("paramBtn").addEventListener("click", function() {
		sumTest(p1, p2);
	});
}

function sumTest(a, b) {
	var result = a + b;
	document.getElementById("show_text").innerHTML = result;
}