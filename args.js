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
myFn("first");
myFn("first", "second");
myFn(undefined, "second");
myFn("first", "second", "third");
myFn("first", undefined, "third");
myFn("first", "second", "third", "fourth");
myFn(undefined, "second", undefined, "fourth");