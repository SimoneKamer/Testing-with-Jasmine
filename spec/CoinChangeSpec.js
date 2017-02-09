describe ("coin changer", function (){
    it ("should return 1 * 100 cent of input = 100", function(){
        var game = new CoinChanger (100);
        expect (game.showCoins()).toEqual (1,0,0);
    });
    it ("should return 2 * 100 cent of input = 250", function(){
        var game = new CoinChanger (250);
        expect (game.showCoins()).toEqual (2,0,0);
    });
    it ("should return 1 * 50 cent of input = 50", function(){
        var game = new CoinChanger (50);
        expect (game.showCoins()).toEqual (0,1,0);
    });
    it ("should return 1 * 20 cent of input = 20", function(){
        var game = new CoinChanger (20);
        expect (game.showCoins()).toEqual ([0,0,1]);
    });




});