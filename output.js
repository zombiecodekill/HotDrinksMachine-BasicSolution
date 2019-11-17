"use strict";

function clearStatusMessages() {
    var statusNode = document.getElementById("statusMessages")
    if (statusNode) {
        while (statusNode.firstChild) {
            statusNode.removeChild(statusNode.firstChild);
        }
    }
}

function appendStatusMessage(text) {
    var status = document.getElementById("statusMessages");
    if (status) {
        status.innerHTML += "<div class='status'>" + text + "</div>";
    }    
}

function setStatusMessage(text) {
    // This function only displays one message at a time.
    // If you want to the whole history, replace this method with appendStatusMessage(text) 
    var status = document.getElementById("statusMessages");
    if (status) {
        status.innerHTML = "<div class='status'>" + text + "</div>";
    }
}

function createTable(data, capacity) {
    // Create a new table
    var table = document.createElement("table");
    // Add the table header
    var tr = document.createElement('tr');
    var leftRow = document.createElement('td');
    leftRow.innerHTML = "Stock Item";
    tr.appendChild(leftRow);
    var rightRow = document.createElement('td');
    rightRow.innerHTML = "Quantity";
    tr.appendChild(rightRow);
    table.appendChild(tr);
    // Add the table rows
    for (var name in data) {
    var value = data[name] + "/" + capacity[name];
    var tr = document.createElement('tr');
    var leftRow = document.createElement('td');
    leftRow.innerHTML = name;
    tr.appendChild(leftRow);
    var rightRow = document.createElement('td');
    rightRow.innerHTML = value;
    tr.appendChild(rightRow);
    table.appendChild(tr);
    }
    return table;
}

function outputStocks() {
    var stocksNode = document.getElementById("supplies");
	if (stocksNode) {
		stocksNode.appendChild(createTable(store.stocks, store.capacity));	
	}
}

function clearStocks() {
    var stocksNode = document.getElementById("supplies");
	if (stocksNode) {
		stocksNode.innerHTML = "";	
	}
}

var buttonText = function() {
    var updateMilkRefill = function() {
        let milkRefillBtn = document.getElementById('milkRefillBtn');
        if (milkRefillBtn) {
            milkRefillBtn.innerText = "Refill Milk (" + store.stocks.milk + " units)";
        }    
    }

    var updateWaterRefill = function() {
        let waterRefillBtn = document.getElementById('waterRefillBtn');
        if (waterRefillBtn) {
            waterRefillBtn.innerText = "Refill Water (" + store.stocks.water + " units)";
        }
    }

    var updateCoffeeRefill = function() {
        let coffeeRefillBtn = document.getElementById('coffeeRefillBtn');
        if (coffeeRefillBtn) {
            coffeeRefillBtn.innerText = "Refill Coffee (" + store.stocks.coffee + " units)";
        }
    }

    var updateCupsRestock = function() {
        let cupsRestockBtn = document.getElementById('cupsRestockBtn');
        if (cupsRestockBtn) {
            cupsRestockBtn.innerText = "Restock Cups (" + store.stocks.cups + " units)";
        }
    }

    var updateLemonRefill = function() {
        let lemonRefillBtn = document.getElementById('lemonRefillBtn');
        if (lemonRefillBtn) {
            lemonRefillBtn.innerText = "Refill Lemon Juice (" + store.stocks.lemon + " units)";
        }
    }

    var updateSugarRestock = function() {
        let sugarRestockBtn = document.getElementById('sugarRestockBtn');
        if (sugarRestockBtn) {
            sugarRestockBtn.innerText = "Restock Sugar (" + store.stocks.sugar + " units)";
        }    
    } 

    var updateTeaRefill = function() {
        let teaRefillBtn = document.getElementById('teaRefillBtn');
        if (teaRefillBtn) {
            teaRefillBtn.innerText = "Refill Tea (" + store.stocks.tea + " units)";
        }    
    }

    var updateChocolateRefill = function() {
        let chocolateRestockBtn = document.getElementById('chocolateRefillBtn');
        if (chocolateRestockBtn) {
            chocolateRestockBtn.innerText = "Refill Chocolate Powder (" + store.stocks.chocolate + " units)";
        }
    }

    return {
        updateMilkRefill: updateMilkRefill,
        updateWaterRefill: updateWaterRefill,
        updateCoffeeRefill: updateCoffeeRefill,
        updateCupsRestock: updateCupsRestock,
        updateLemonRefill: updateLemonRefill,
        updateSugarRestock: updateSugarRestock,
        updateTeaRefill: updateTeaRefill,
        updateChocolateRefill: updateChocolateRefill
    }
}();
