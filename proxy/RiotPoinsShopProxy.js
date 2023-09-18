"use strict";
class User {
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
}
class RiotPointsShop {
    buy() {
        console.log('Riot points has been bought');
    }
}
class RiotPointsShopProxy {
    constructor(riotPointsShop, user) {
        this.riotPointsShop = riotPointsShop;
        this.user = user;
    }
    buy() {
        if (this.checkBalance()) {
            this.riotPointsShop.buy();
        }
        else {
            console.log('This user has not enough money');
        }
    }
    checkBalance() {
        return this.user.getBalance() >= 100;
    }
}
function main() {
    const user = new User(50);
    const shop = new RiotPointsShop();
    const proxyShop = new RiotPointsShopProxy(shop, user);
    shop.buy();
    proxyShop.buy();
}
main();
