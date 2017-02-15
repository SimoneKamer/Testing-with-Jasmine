function CoinChanger(coins){
    var coins = coins;
    var amountOfCoins = [];

    this.calculateNumberOfCoins = function (amount){
            for (var i=0;i<coins.length;i++){
                amountOfCoins.push(Math.trunc(amount/(coins[i])));
                amount = amount - (amountOfCoins[i] * coins[i]);
            };
        }
    this.showNumberOfCoins = function (amount){
        this.calculateNumberOfCoins(amount);
        return amountOfCoins;
    };

    this.declareNumberOfCoins = function (){
    var declareArray = [];
        for (var i=0;i<coins.length;i++){
            if(amountOfCoins[i]>0){
                declareArray.push(amountOfCoins[i] + " times " + coins[i] + " cents");
            }
        }
        return declareArray.toString();
    }
};

CoinChanger.prototype.showCoins = function (amount){
    var amount = amount;
    return this.showNumberOfCoins(amount);
};

CoinChanger.prototype.declareCoins = function (amount){
    var amount = amount;
    this.showNumberOfCoins(amount);
    return this.declareNumberOfCoins(amount);

};