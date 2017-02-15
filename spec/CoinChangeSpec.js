describe ("coin changer", function (){
    var coins = [100,50,20,10,5,2,1];
    var changer;
    beforeEach(function () {
        changer = new CoinChanger(coins);
    });

    it ("should return 1 * 100 cent of input = 100", function(){
        expect (changer.showCoins(100)).toEqual ([1,0,0,0,0,0,0]);
    });
    it ("should return 2 * 100 and 1 * 50 cent of input = 250", function(){
        expect (changer.showCoins(250)).toEqual ([2,1,0,0,0,0,0]);
    });
    it ("should return 1 * 50 cent of input = 50", function(){
        expect (changer.showCoins(50)).toEqual ([0,1,0,0,0,0,0]);
    });
    it ("should return 1 * 20 cent of input = 20", function(){
        expect (changer.showCoins(20)).toEqual ([0,0,1,0,0,0,0]);
    });
    it ("should tell 1 times 20 cents of input = 20", function(){
        expect (changer.declareCoins(20)).toEqual ("1 times 20 cents");
    });
    it ("should tell 1 times 50 cents and 1 times 20 cents of input = 20", function(){
        expect (changer.declareCoins(70)).toEqual ("1 times 50 cents,1 times 20 cents");
    });

});