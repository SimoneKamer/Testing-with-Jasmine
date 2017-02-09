function CoinChanger(amount){
    var amount = amount;
    var coins = [100,50,20,10,5,2,1];

    this.showNumberOfCoins = function (){
        var amountOfCoins =[]
        for (var i=0;i<coins.length;i++){
        amountOfCoins.push(Math.trunc(amount/(coins[i])));
        amount = amount - (amountOfCoins[i] * coins[i]);
        };
        return amountOfCoins;
    };

};

CoinChanger.prototype.showCoins = function (){
    return this.showNumberOfCoins();
};
