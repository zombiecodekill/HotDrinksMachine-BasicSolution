/*
    The best storage solution for any application depends on the answers to questions such as:
    How many users will there be?
    Will the application operate over the public internet or run on a private intranet?
    How much data needs to be stored?
    What will be the busiest times of the day?
    Will there be concurrent updates?

    For a single hot drinks machine, it can only serve one user at a time.
    Below we have a naive solution which just stores the data in browser memory.
    This means stocks are 'replenished' when the users refreshes their browser.
    So this is not a real world solution but is useful for rapid prototyping and demonstration purposes.

    Unlike Alan's solution, the storage implementation details are hidden from the main code logic using a facade.
*/

var store = function () {

    var capacity = {
        tea: 10,
        lemon: 10,
        water: 10,
        chocolate: 10,
        cups: 10,
        milk: 10,
        sugar: 10,
        coffee: 10,
        coffeeWaste: 10
    }

    var stocks = {
        tea: 3,
        lemon: 1,
        water: 4,
        chocolate: 4,
        cups: 1,
        milk: 4,
        sugar: 5,
        coffee: 4,
        coffeeWaste: 0
    };

    function getStocks() {
        return stocks;
    }
    function getCapacity() {
        return capacity;
    }

    function coffeeWasteAvailable() {
        return stocks.coffeeWaste < capacity.coffeeWaste;
    }

    var inStock = function() {

        var chocolate = function() {
            return store.stocks.chocolate > 0;
        }
        var cup = function() {
            return store.stocks.cups > 0;
        }
        var coffee = function() {
            return store.stocks.coffee > 0;
        }
        var lemon = function() {
            return store.stocks.lemon > 0;
        }
        var milk = function() {
            return store.stocks.milk > 0;
        }
        var sugar = function() {
            return store.stocks.sugar > 0;
        }
        var tea = function() {
            return store.stocks.tea > 0;
        }
        var water = function() {
            return store.stocks.water > 0;
        }

        return {
            chocolate: chocolate,
            cup: cup,
            tea: tea,
            coffee: coffee,
            lemon: lemon,
            milk: milk,
            sugar: sugar,
            water: water
        }
    }();
    

    var use = function() {
        var chocolate = function() {
            store.stocks.chocolate -= 1;
        }
        var coffee = function() {
            store.stocks.coffee -= 1;
            store.stocks.coffeeWaste++;
        }
        var cup = function() {
            store.stocks.cups -= 1;
        }
        var lemon = function() {
            store.stocks.lemon -= 1;
        }
        var milk = function() {
            store.stocks.milk -= 1;
        }
        var sugar = function() {
            store.stocks.sugar -= 1;
        }
        var tea = function() {
            store.stocks.tea -= 1;
        }
        var water = function() {
            store.stocks.water -= 1;
        }
        return {
            chocolate: chocolate,
            cup: cup,
            tea: tea,
            coffee: coffee,
            lemon: lemon,
            milk: milk,
            sugar: sugar,
            water: water
        }
    }();
    return {
        coffeeWasteAvailable: coffeeWasteAvailable,
        use: use,
        stocks: getStocks(),
        capacity: getCapacity(),
        inStock: inStock,
    }
}();