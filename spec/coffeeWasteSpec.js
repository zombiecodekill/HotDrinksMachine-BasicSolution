describe("coffeeWaste", function(){

    describe("empty", function(){

        it("empties the coffee waste tray", function(){
            store.stocks.coffeeWaste = 5;

            coffeeWaste.empty();

            expect(store.stocks.coffeeWaste).toBe(0);
        });
    });

});