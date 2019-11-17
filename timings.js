let timings = {
    //TODO: change boilWater back to 10 seconds
	boilWater: 1000,
    steepWater: 5000,
	brewCoffee: 5000,
	addPowder: 2000,
	addSugar: 1000,
	addLemon: 1000,
	addMilk: 2000,
	pourIntoCup: 4000,
};

/* 
	The timerPromise is used to simulate the time needed to perform each step 
   	For the sake of simplicity this assumes that the operation always completes successfully once started 
*/
var timerPromise = function(milliseconds) {
	return new Promise(function(resolve) {
		setTimeout(function() {	resolve(true);}, milliseconds);
	});
}