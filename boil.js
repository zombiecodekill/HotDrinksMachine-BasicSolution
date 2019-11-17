function canBoilWater() {
	if (store.inStock.water()) {
		store.use.water();
		setStatusMessage("Boiling some water");
		return true;
	} 
	setStatusMessage("No water left");
	return false;
}