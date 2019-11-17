describe("dispenseDrinkIntoPlasticCup", function() {

    it("returns false when no cup is available", function() {
    
        store.stocks.cups = 0;
        let result = dispenseDrinkIntoPlasticCup();

        expect(result).toBe(false);
    });

    it("uses a cup if it is available", function() {

        store.stocks.cups = 1;

        dispenseDrinkIntoPlasticCup(true);

        expect(store.stocks.cups).toBe(0);
    });

    
    it("adds pouring into the cup message when cup is available", function() {
          
        store.stocks.cups = 1;
        setStatusMessage = jasmine.createSpy('setStatusMessage spy');
  
        dispenseDrinkIntoPlasticCup(true);
  
        expect(setStatusMessage).toHaveBeenCalledWith("Pouring into the cup");
    });

    
    it("adds no cups left message when no cups available", function() {
          
        store.stocks.cups = 0;
        setStatusMessage = jasmine.createSpy('setStatusMessage spy');
  
        dispenseDrinkIntoPlasticCup(true);
  
        expect(setStatusMessage).toHaveBeenCalledWith("No cups left");
    });

    it("returns true when cup is available", function() {

        store.stocks.cups = 1;

        let result = dispenseDrinkIntoPlasticCup(true);

        expect(result).toBe(true);
    });
});