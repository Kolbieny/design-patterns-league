abstract class LeagueMapFactory {
    //Factory class implements a factory method
    public abstract getShop(): Shop

    //Factory class most of all implements business logic, which has a strict relation to the products
    //The business logic creates at first products, then interacts with them
    public buyItem(): void
    {
        const item = this.getItem()
        console.log(`Bought: ${item}`)
    }

    private getItem(): string
    {
        return this.getShop().getItem()
    }
}

interface Shop {
    getItem(): string;
}

class SummonersRiftShop implements Shop {
    public getItem(): string {
        return "Hullbreaker";
    }
}

class HowlingAbyssShop implements Shop {
    public getItem(): string {
        return "Guardian's Horn";
    }
}

//Factory class instances override the factory method
class SummonersRift extends LeagueMapFactory {
    public getShop(): Shop {
        return new SummonersRiftShop();
    }
}

class HowlingAbyss extends LeagueMapFactory {
    public getShop(): Shop {
        return new HowlingAbyssShop();
    }
}

function main(leagueMap: LeagueMapFactory): void {
    leagueMap.buyItem();
}

main(new SummonersRift());
main(new HowlingAbyss());