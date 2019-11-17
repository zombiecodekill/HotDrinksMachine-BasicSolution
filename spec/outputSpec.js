describe("clearStatusMessages", function(){

    it("remove status messages from the DOM", function(){

        let node = document.createElement('statusMessages');
        document.body.appendChild(node);

        expect(document.getElementById("statusMessages")).toBeDefined();

        clearStatusMessages();

        expect(document.getElementById("statusMessages")).toBe(null);
        
        document.body.removeChild(node);
    });

});