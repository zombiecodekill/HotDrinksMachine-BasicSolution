describe("canBoilWater", function() {

    it("returns false when no water to boil", function() {

        store.stocks.water = 0;
    
        let result = canBoilWater();

        expect(result).toBe(false);
    });

    it("returns true when water is avaiable to boil", function() {

        store.stocks.water = 1;
    
        let result = canBoilWater();

        expect(result).toBe(true);
    });

    xit("sets the status 'Boiling some water' when water is avaiable to boil", function() {
        store.stocks.water = 1;
        let setStatusMessage = jasmine.createSpy('setStatusMessage spy');

        canBoilWater();

        expect(setStatusMessage).toHaveBeenCalledWith("Boiling some water");
    });

    xit("sets the status 'No water left' when no water is avaiable", function() {
        store.stocks.water = 0;
        let setStatusMessage = jasmine.createSpy('setStatusMessage spy');

        canBoilWater();

        expect(setStatusMessage).toHaveBeenCalledWith("No water left");
    });


});