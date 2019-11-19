class lemonTea 
{
    static haveAllIngredients()  {
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

    make() {
        let isMade=false;
        setStatusMessage("Lemon Tea selected");

        if (!lemonTea.haveAllIngredients()) {    
            if (!confirm('One or more items are out of stock. Do you wish to proceed anyway?')) {
                setStatusMessage("Lemon Tea canceled");
                enableDrinksButtons();
            }
        } else {
            console.log("ingredients found");
        }

        if (canBoilWater()) {		
            return timerPromise(timings.boilWater).then(lemonTea.waterIsBoiled);
        }
        return isMade;
    }

    static served(lemonAddedToTea) {
        if (lemonAddedToTea) {
            setStatusMessage("Your lemon tea is served");
        } else {
            setStatusMessage("Voila! Your non-lemon tea is served");
        }
        enableDrinksButtons();
        return true;
    }
    
    static steepWaterInTea() {
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
    
    static addLemon() {
        if (store.inStock.lemon()) {
            store.use.lemon();
            setStatusMessage("Adding the lemon");
            return true;
        } else {
            setStatusMessage("Ran out of lemon");
            return recipePermissions.allowTeaWithoutLemon;
        }
    }
    
    static drinkDispensed(dispensed) {
        if (dispensed) {
            lemonTea.addLemon();            
            timerPromise(timings.addLemon).then(lemonTea.served);
        }
    }
    
    static waterIsSteeped(steeped) {
        if (steeped) {
            if (dispenseDrinkIntoPlasticCup()) {
                timerPromise(timings.pourIntoCup).then(lemonTea.drinkDispensed);
            } else {
                setStatusMessage("Preparation of your lemon tea could not be completed.");
                enableDrinksButtons();
            }           
        }
        return false;
    }
    
    static waterIsBoiled(isBoiled) {
        if (isBoiled) {
            lemonTea.steepWaterInTea();        
            timerPromise(timings.steepWater).then(lemonTea.waterIsSteeped);
        }
    }
};
