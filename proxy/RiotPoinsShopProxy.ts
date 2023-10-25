//GUI-type class that cooperates with the service.
//It can contain the interface-type service.
class User {
    private readonly balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    public getBalance(): number {
        return this.balance;
    }
}

//Common interface for the proxy its target class
interface Shop {
    buy(): void;
}

//Class that needs to have a proxy
class RiotPointsShop implements Shop {
    public buy(): void {
        console.log('Riot points has been bought');
    }
}

//Proxy extends methods from interface with its own implementation.
//In case of extending 'final' classes, proxy uses them as a service.
//Then it may balance between extending and getting resources from the extended class.
class RiotPointsShopProxy implements Shop {
    private riotPointsShop: RiotPointsShop;
    private user: User;

    constructor(riotPointsShop: RiotPointsShop, user: User) {
        this.riotPointsShop = riotPointsShop;
        this.user = user;
    }

    public buy(): void {
        if (this.checkBalance()) {
            this.riotPointsShop.buy();
        } else {
            console.log('This user has not enough money');
        }
    }

    private checkBalance(): boolean {
        return this.user.getBalance() >= 100;
    }
}

function main(): void {
    const user = new User(50);
    const shop = new RiotPointsShop();
    const proxyShop = new RiotPointsShopProxy(shop, user);

    shop.buy();
    proxyShop.buy();
}

main();