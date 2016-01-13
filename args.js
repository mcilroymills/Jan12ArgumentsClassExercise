/****************************************************************************
This function takes any amount of arguments and prints messages according to 
the assignment instructions starting on line 37.
*****************************************************************************/
function myFn(first, second, third) {
	if (arguments.length === 0)
		console.log("No arguments!");
	else {
		console.log("Beginning to read arguments...");
		for (var i = 1; i <= 3; i++) {
			if (arguments[i-1] !== undefined)
				console.log("Reading argument #" + i + ": " + arguments[i -1]);
		}	
		if (arguments.length > 3) {
			console.log("AARG! Too many arguments:");
			console.log(arguments);
		}
	}
}

myFn();
console.log();
myFn("first");
console.log();
myFn("first", "second");
console.log();
myFn(undefined, "second");
console.log();
myFn("first", "second", "third");
console.log();
myFn("first", undefined, "third");
console.log();
myFn("first", "second", "third", "fourth");
console.log();
myFn(undefined, "second", undefined, "fourth");

// The following code...

//myFn();
//myFn("first");
//myFn("first", "second");
//myFn(undefined, "second");
//myFn("first", "second", "third");
//myFn("first", undefined, "third");
//myFn("first", "second", "third", "fourth");
//myFn(undefined, "second", undefined, "fourth");

// Should return the following...

// No arguments!

// Beginning to read arguments...
// Reading argument #1: first

// Beginning to read arguments...
// Reading argument #1: first
// Reading argument #2: second

// Beginning to read arguments...
// Reading argument #2: second

// Beginning to read arguments...
// Reading argument #1: first
// Reading argument #2: second
// Reading argument #3: third

// Beginning to read arguments...
// Reading argument #1: first
// Reading argument #3: third

// Beginning to read arguments...
// Reading argument #1: first
// Reading argument #2: second
// Reading argument #3: third

// AARG! Too many arguments:
//  { '0': 'first', '1': 'second', '2': 'third', '3': 'fourth' }

// Beginning to read arguments...
// Reading argument #2: second

// AARG! Too many arguments:
//  { '0': undefined, '1': 'second', '2': undefined, '3': 'fourth' }