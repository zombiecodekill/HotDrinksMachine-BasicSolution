var refill = function() {
    var chocolate = function() {        
        if (store.stocks.chocolate < store.capacity.chocolate) {
            store.stocks.chocolate++;
        } else {
            setStatusMessage('Chocolate stocks are full');
        }
        buttonText.updateChocolateRefill();
    }
    var coffee = function() {
        if (store.stocks.coffee < store.capacity.coffee) {
            store.stocks.coffee++;
        } else {
            setStatusMessage('Coffee stocks are full');
        }        
        buttonText.updateCoffeeRefill();
    }
    var cups = function() {
        if (store.stocks.cups < store.capacity.cups) {
            store.stocks.cups++;
        } else {
            setStatusMessage('Cups holder is full')
        }
        buttonText.updateCupsRestock();
    }
    var lemon = function() {
        if (store.stocks.lemon < store.capacity.lemon) {
            store.stocks.lemon++;
        } else {
            setStatusMessage('Lemon stocks are full');
        }
        buttonText.updateLemonRefill();
    }
    var milk = function() {
        if (store.stocks.milk < store.capacity.milk) {
            store.stocks.milk++;
        } else {
            setStatusMessage('Milk container is full');
        }
        buttonText.updateMilkRefill();
    }
    var sugar = function() {
        if (store.stocks.sugar < store.capacity.sugar) {
            store.stocks.sugar++;
        } else {
            setStatusMessage('Sugar stocks are full');
        }
        buttonText.updateSugarRestock();
    }
    var tea = function() {
        if (store.stocks.tea < store.capacity.tea) {
            store.stocks.tea++;
        } else {
            setStatusMessage('Tea stocks are full');
        }
        buttonText.updateTeaRefill();
    }
    var water = function() {
        if (store.stocks.water < store.capacity.water) {
            store.stocks.water++;
        } else {
            setStatusMessage('Water container is full');
        }
        buttonText.updateWaterRefill();
    }

    var setButtonText = function() {
        buttonText.updateCoffeeRefill();
        buttonText.updateCupsRestock();
        buttonText.updateMilkRefill();
        buttonText.updateSugarRestock();
        buttonText.updateWaterRefill();
        buttonText.updateTeaRefill();
        buttonText.updateLemonRefill(); 
        buttonText.updateChocolateRefill();
    }

    return {
        chocolate: chocolate,
        cups: cups,
        tea: tea,
        coffee: coffee,
        lemon: lemon,
        milk: milk,
        sugar: sugar,
        water: water,
        setButtonText: setButtonText
    }
}();