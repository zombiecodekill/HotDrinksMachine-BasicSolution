"use strict";

var chocolate = function() {

    let haveAllIngredients = function() {
        /*
            To make hot chocolate we need:
            1 unit of water
            1 unit of drinking chocolate powder
            1 cup
        */
        let stocked = 
            (store.inStock.water()
            && store.inStock.chocolate()
            && store.inStock.cup())
        return stocked;
    }

    let addPowder = function() {
        if (store.inStock.chocolate()) {
            store.use.chocolate();
            appendStatusMessage("Adding drinking chocolate powder to the water");
            return true;
        } else {
            appendStatusMessage("No chocolate left");
            return false;
        }
    }

    let waterIsBoiled = function(isBoiled) {
        if (isBoiled) {
            addPowder();        
            timerPromise(timings.addPowder).then(powderIsAdded);
        }
    }
    
    let powderIsAdded = function(isAdded) {
        if (isAdded) {
            if (dispenseDrinkIntoPlasticCup()) {
                timerPromise(timings.pourIntoCup).then(served);
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

    let served = function(isPoured) {
        if (isPoured) {
            setStatusMessage("Your hot chocolate is served");
        } else {
            setStatusMessage("Preparation of your hot chocolate could not be completed");
        }
        enableDrinksButtons();
        return true;
    }

    let make = function() {
        let isMade=false;
        setStatusMessage("Hot Chocolate selected");

        if(!haveAllIngredients()) {
            if (!window.confirm('One or more items are out of stock. Do you wish to proceed anyway?')) {
                setStatusMessage("Hot chocolate canceled");
                enableDrinksButtons();
                return isMade;
            }
        }

        if (canBoilWater()) {		
            return timerPromise(timings.boilWater).then(waterIsBoiled);
        }
        return isMade;
    }

    return {
        make: make,
        haveAllIngredients: haveAllIngredients
    }    
}();