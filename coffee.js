var coffee = function() 
{

    var haveAllIngredients = function() {
        /*
            To make coffee we need:
            1 unit of water
            1 unit of coffee grounds
            1 cup
            1 unit of sugar
            1 unit of milk
        */
        let stocked = 
            (store.inStock.water()
            && store.inStock.coffee()
            && store.inStock.cup()
            && store.inStock.sugar()
            && store.inStock.milk())
        return stocked;
    }

    let addSugar = function() {
	    if (store.inStock.sugar()) {
    		store.use.sugar();
	    	setStatusMessage("Adding sugar");	
	    	return true;
	    }
    	setStatusMessage("No sugar left");
    	return recipePermissions.allowCoffeeWithoutSugar;
    }

    let addMilk = function() {
    	if (store.inStock.milk()) {
    		store.use.milk();
    		setStatusMessage("Adding the milk");	
    		return true;
    	}
    	setStatusMessage("No milk left");
    	return recipePermissions.allowCoffeeWithoutMilk;
    }

    let brew = function() {
        if (!store.inStock.coffee()) {
	    	setStatusMessage("Out of coffee");
		    return false;
	    } else {
	    	if (store.coffeeWasteAvailable()) {
	    		store.use.coffee();
		    	setStatusMessage("Brewing coffee");
		    } else {
			    setStatusMessage("Coffee waste tray is full");
		    }
	    }
    }

    let served = function(isAdded) {
        if (isAdded || recipePermissions.allowCoffeeWithoutMilk) {
            setStatusMessage("Your coffee is ready");
        } else {
            setStatusMessage("Preparation of your coffee could not be completed");
        }
        enableDrinksButtons();
    }

    let sugarIsAdded = function(isAdded) {
        if (isAdded || recipePermissions.allowCoffeeWithoutSugar) {
            addMilk();
            timerPromise(timings.addMilk).then(served);
        }
    }

    let blackCoffeeIsInCup = function(isPoured) {
        if (isPoured) {
            addSugar();
            timerPromise(timings.addSugar).then(sugarIsAdded);
        }
    }

    let coffeeIsBrewed = function(isBrewed) {
        if (isBrewed) {
            if (dispenseDrinkIntoPlasticCup()) {
                timerPromise(timings.pourIntoCup).then(blackCoffeeIsInCup);
            } else {
                served(false);
            }
        } else {
            if (recipePermissions.allowHotWaterOnly) {
                setStatusMessage('Hot water only');
                if (dispenseDrinkIntoPlasticCup()) {
                    timerPromise(timings.pourIntoCup).then(hotWaterIsInCup);
                }
            }
        }
    }

    let waterIsBoiled = function(isBoiled) {
        if (isBoiled) {
            brew();        
            timerPromise(timings.brewCoffee).then(coffeeIsBrewed);
        }
    }

    let make = function() {
        let isMade=false;
        setStatusMessage("Coffee selected");

        if(!haveAllIngredients()) {
            if (!window.confirm('One or more items are out of stock. Do you wish to proceed anyway?')) {
                setStatusMessage("Coffee canceled");
                enableDrinksButtons();
                return isMade;
            }
        }

    if (canBoilWater()) {		
        return timerPromise(timings.boilWater).then(waterIsBoiled);
    }
    return isMade;
    };

    return {
        make: make,
        haveAllIngredients: haveAllIngredients
    }
}();