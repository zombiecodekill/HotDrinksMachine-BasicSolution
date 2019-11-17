"use strict";

/* 
	The coffee functions of this hot drinks machine is loosely modelled on the technical specifications of the 
	MCA 16 and MCA 15 NA P machines, which are accessible online at
	http://www.westlandsales.com/ariston/service_manuals/coffee_centers/MCA_Trainman.pdf
	The additional tea and hot chocolate functions are imagined
*/

function ready(fn) {
	if (document.readyState != 'loading') {
		console.log("document is not loading so calling function");
	  return fn();
	} else {
		console.log("document is loading so adding DOMContentLoaded listener");
	  document.addEventListener('DOMContentLoaded', fn);
	}
}

function setClickHandlers() {
	teaBtn.addEventListener("click", makeDrink('tea'));
	coffeeBtn.addEventListener("click", makeDrink('coffee'));
	chocolateBtn.addEventListener("click", makeDrink('chocolate'));
}

function disableCoffeeBtn() { 
	let coffeeBtn = ready(getCoffeeBtn);
	if (coffeeBtn) {
		coffeeBtn.disabled = true;
	}
}

function getTeaBtn() {
	let teaBtn = document.getElementById('tea');
	return teaBtn;
}

function getCoffeeBtn() {
	let coffeeBtn = document.getElementById('coffee');
	return coffeeBtn;
}

function getHotChocolateBtn() {
	let chocolateBtn = document.getElementById('chocolate');
	return chocolateBtn;
}

function disableTeaBtn() {
	let teaBtn = ready(getTeaBtn);
	if (teaBtn) {
		teaBtn.disabled = true;
	}
}

function disableHotChocolateBtn() {
	let hotChocolateBtn = ready(getHotChocolateBtn); 
	if (hotChocolateBtn) {
		hotChocolateBtn.disabled = true;
	}
}

function enableHotChocolateBtn() {
	
	let hotChocolateBtn = ready(getHotChocolateBtn); 
	if (hotChocolateBtn) {
		hotChocolateBtn.disabled = false;
		console.log("re-enabled " + hotChocolateBtn);
	} else {
		console.log('could not get chocolate button by id');
	}
}

function enableCoffeeBtn() {
	
	let coffeeBtn = ready(getCoffeeBtn);
	if (coffeeBtn) {
		coffeeBtn.disabled = false;
		console.log("re-enabled " + coffeeBtn);
	} else {
		console.log('could not get coffee button by id');
	}
}

function enableTeaBtn() {	
	
	let teaBtn = ready(getTeaBtn);
	if (teaBtn) {
		teaBtn.disabled = false;
		console.log("re-enabled " + teaBtn);
	} else {
		console.log('could not get tea button by id');
	}
}

function disableDrinksButtons() {
	disableTeaBtn();
	disableCoffeeBtn();
	disableHotChocolateBtn();
}

function enableDrinksButtons() {
	console.log("enable drinks buttons");
	enableTeaBtn();
	enableCoffeeBtn();
	enableHotChocolateBtn();
}

function makeDrink(drink) {

	clearStatusMessages();

	var isMade=false;
	if (drink === "tea") {
		isMade = lemonTea.make();
	}
		
	if (drink === "coffee") {
		isMade = coffee.make();
	}
		
	if (drink === "chocolate") {
		isMade = chocolate.make();
	}

	disableDrinksButtons();

	clearStocks();
	outputStocks();
	refill.setButtonText();

	return isMade;
};

//TODO: Babel for IE11 support