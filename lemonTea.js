var lemonTea = function() 
{

    var haveAllIngredients = function() {
        /*
            To make lemon tea we need:
            1 unit of water
            1 unit of tea
            1 cup
            1 unit of lemon juice
        */
        let stocked = 
            (store.inStock.water() 
            && store.inStock.tea()
            && store.inStock.cup()
            && store.inStock.lemon())
        return stocked;
    }

    var make = function() {
        let isMade=false;
        setStatusMessage("Lemon Tea selected");

        if (!haveAllIngredients()) {    
            if (!confirm('One or more items are out of stock. Do you wish to proceed anyway?')) {
                setStatusMessage("Lemon Tea canceled");
                enableDrinksButtons();
            }
        } else {
            console.log("ingredients found");
        }

        if (canBoilWater()) {		
            return timerPromise(timings.boilWater).then(waterIsBoiled);
        }
        return isMade;
    }

    var served = function(lemonAddedToTea) {
        if (lemonAddedToTea) {
            setStatusMessage("Your lemon tea is served");
        } else {
            setStatusMessage("Voila! Your non-lemon tea is served");
        }
        enableDrinksButtons();
        return true;
    }
    
    var steepWaterInTea = function() {
        if (store.inStock.tea()) {
            store.use.tea();
            setStatusMessage("Steeping the water in the tea");
            return true;
        } else {
            setStatusMessage("No more tea. Please restock.");
            if (recipePermissions.allowHotWaterOnly) {
                setStatusMessage('Hot water only');
                if (dispenseDrinkIntoPlasticCup()) {
                    timerPromise(timings.pourIntoCup).then(hotWaterIsInCup);
                }
            }
            return false;            
        }
    }
    
    var addLemon = function() {
        if (store.inStock.lemon()) {
            store.use.lemon();
            setStatusMessage("Adding the lemon");
            return true;
        } else {
            setStatusMessage("Ran out of lemon");
            return recipePermissions.allowTeaWithoutLemon;
        }
    }
    
    var drinkDispensed = function(dispensed) {
        if (dispensed) {
            addLemon();            
            timerPromise(timings.addLemon).then(served);
        }
    }
    
    var waterIsSteeped = function(steeped) {
        if (steeped) {
            if (dispenseDrinkIntoPlasticCup()) {
                timerPromise(timings.pourIntoCup).then(drinkDispensed);
            } else {
                setStatusMessage("Preparation of your lemon tea could not be completed.");
                enableDrinksButtons();
            }           
        }
        return false;
    }
    
    var waterIsBoiled = function(isBoiled) {
        if (isBoiled) {
            steepWaterInTea();        
            timerPromise(timings.steepWater).then(waterIsSteeped);
        }
    }
  
    return {
        make: make,
        haveAllIngredients: haveAllIngredients
    }
}();