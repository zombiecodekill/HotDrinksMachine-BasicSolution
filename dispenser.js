"use strict";

function dispenseDrinkIntoPlasticCup() {
	if (store.inStock.cup()) {
		store.use.cup();
		setStatusMessage("Pouring into the cup");
		return true;
	} else {
		setStatusMessage("No cups left");
		return false;
	}
}